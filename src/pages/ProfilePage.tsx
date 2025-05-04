
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Profile form schema
const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phone: z.string().optional(),
  address: z.string().optional(),
  dob: z.string().optional(),
  emergencyContact: z.string().optional(),
  healthConditions: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ProfilePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("profile");

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      dob: '',
      emergencyContact: '',
      healthConditions: '',
    },
  });

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) throw error;

          if (data) {
            setProfile(data);
            form.reset({
              firstName: data.first_name || '',
              lastName: data.last_name || '',
              phone: data.phone || '',
              address: data.address || '',
              dob: data.dob || '',
              emergencyContact: data.emergency_contact || '',
              healthConditions: data.health_conditions || '',
            });
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
    };

    fetchProfile();
  }, [user, form]);

  const onSubmit = async (values: ProfileFormValues) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phone,
          address: values.address,
          dob: values.dob,
          emergency_contact: values.emergencyContact,
          health_conditions: values.healthConditions,
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Format the last login date
  const formatLastLogin = (dateString?: string) => {
    if (!dateString) return "Never logged in";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  };

  return (
    <div className="container-custom py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Profile</h1>
        
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profile?.avatar_url || ''} alt={profile?.first_name || 'User'} />
                <AvatarFallback className="text-2xl bg-fitgreen text-white">
                  {profile?.first_name ? profile.first_name[0] : ''}{profile?.last_name ? profile.last_name[0] : ''}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl">{profile?.first_name || ''} {profile?.last_name || ''}</CardTitle>
                <CardDescription>{profile?.email || user?.email}</CardDescription>
                {profile?.last_login && (
                  <div className="mt-1 text-xs text-gray-500">
                    Last login: {formatLastLogin(profile?.last_login)}
                  </div>
                )}
                {profile?.membership_plan && (
                  <div className="mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold bg-fitgreen text-white">
                    {profile.membership_plan} Membership
                  </div>
                )}
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:flex sm:space-x-2">
                <TabsTrigger value="profile">Personal Info</TabsTrigger>
                <TabsTrigger value="membership">Membership</TabsTrigger>
              </TabsList>
            
              <CardContent className="py-4">
                <TabsContent value="profile">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="emergencyContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="healthConditions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Health Conditions</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please list any health conditions or medical information we should be aware of"
                                className="resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <span className="animate-spin mr-2">◌</span>
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="membership">
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold text-lg mb-2">Current Membership</h3>
                      {profile?.membership_plan ? (
                        <div className="space-y-2">
                          <p className="flex justify-between">
                            <span className="text-gray-600">Plan:</span>
                            <span className="font-medium">{profile.membership_plan}</span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-medium text-green-600">Active</span>
                          </p>
                          <Button className="w-full mt-4" variant="outline">
                            Change Plan
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-gray-600">You don't have an active membership plan.</p>
                          <Button className="w-full" onClick={() => window.location.href = '/join'}>
                            Join Now
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="p-4 border rounded-lg bg-gray-50">
                      <h3 className="font-semibold text-lg mb-2">Payment Methods</h3>
                      <p className="text-gray-600">No payment methods added yet.</p>
                      <Button className="w-full mt-4" variant="outline">
                        Add Payment Method
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
