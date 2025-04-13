import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Check, User, Mail, Phone, Calendar } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { saveRegistrationData, MembershipPlan } from '@/lib/supabase';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  dob: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Please enter a valid date of birth.",
  }),
  emergencyContact: z.string().min(10, { message: "Please enter a valid emergency contact number." }),
  healthConditions: z.string().optional(),
  paymentMethod: z.enum(["credit", "debit", "upi", "netbanking"]),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const JoinPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [step, setStep] = useState(1); // 1: Plan selection, 2: Registration form, 3: Payment method
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      emergencyContact: "",
      healthConditions: "",
      paymentMethod: "credit",
      termsAccepted: false as any, // This is a known issue with z.literal(true) and defaultValues
    },
  });

  const handlePlanSelection = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setStep(2);
    
    toast({
      title: "🎉 Excellent Choice!",
      description: `You've selected the ${plan} plan. This is a fantastic option that fits your fitness goals!`,
    });
  };

  const onSubmit = async (values: FormValues) => {
    if (!selectedPlan) {
      toast({
        title: "Error",
        description: "Please select a plan before proceeding.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { termsAccepted, ...registrationData } = values;
      
      const result = await saveRegistrationData({
        ...registrationData,
        selectedPlan,
      });
      
      if (result.success) {
        toast({
          title: "🎉 Congratulations on Your New Fitness Journey!",
          description: `Welcome to the FIT & FIERCE family! Your ${selectedPlan} membership has been activated. We're excited to help you achieve your fitness goals!`,
        });
        
        setStep(1);
        setSelectedPlan(null);
        form.reset();
        
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        throw new Error("Failed to save registration");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="container-custom py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Join FIT & FIERCE Today</h1>
        
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex-1 text-center ${step >= 1 ? 'text-fitgreen font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-fitgreen' : 'bg-gray-300'} text-white flex items-center justify-center mx-auto mb-2`}>1</div>
              <span>Select Plan</span>
            </div>
            <div className={`flex-1 h-1 ${step >= 2 ? 'bg-fitgreen' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 text-center ${step >= 2 ? 'text-fitgreen font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-fitgreen' : 'bg-gray-300'} text-white flex items-center justify-center mx-auto mb-2`}>2</div>
              <span>Registration</span>
            </div>
            <div className={`flex-1 h-1 ${step >= 3 ? 'bg-fitgreen' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 text-center ${step >= 3 ? 'text-fitgreen font-semibold' : ''}`}>
              <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-fitgreen' : 'bg-gray-300'} text-white flex items-center justify-center mx-auto mb-2`}>3</div>
              <span>Payment</span>
            </div>
          </div>
        </div>
        
        {step === 1 && (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Membership Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div 
                  className={`border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer ${selectedPlan === 'Basic' ? 'border-fitgreen border-2' : ''}`}
                  onClick={() => setSelectedPlan('Basic')}
                >
                  <h3 className="text-lg font-bold mb-2">Basic</h3>
                  <p className="text-2xl font-bold text-fitgreen mb-4">₹3,499<span className="text-sm text-gray-500">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Gym access 8am-8pm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Basic equipment usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>1 fitness assessment</span>
                    </li>
                  </ul>
                  <Button className="w-full" onClick={() => handlePlanSelection('Basic')}>Select Plan</Button>
                </div>
                
                <div 
                  className={`border rounded-lg p-6 bg-gray-50 hover:shadow-md transition-shadow cursor-pointer relative ${selectedPlan === 'Premium' ? 'border-fitgreen border-2' : ''}`}
                  onClick={() => setSelectedPlan('Premium')}
                >
                  <div className="absolute top-0 right-0 bg-fitgreen text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                  <h3 className="text-lg font-bold mb-2">Premium</h3>
                  <p className="text-2xl font-bold text-fitgreen mb-4">₹5,999<span className="text-sm text-gray-500">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>24/7 gym access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Full equipment usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>2 personal training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Group classes included</span>
                    </li>
                  </ul>
                  <Button className="w-full" onClick={() => handlePlanSelection('Premium')}>Select Plan</Button>
                </div>
                
                <div 
                  className={`border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer ${selectedPlan === 'Elite' ? 'border-fitgreen border-2' : ''}`}
                  onClick={() => setSelectedPlan('Elite')}
                >
                  <h3 className="text-lg font-bold mb-2">Elite</h3>
                  <p className="text-2xl font-bold text-fitgreen mb-4">₹8,999<span className="text-sm text-gray-500">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>24/7 gym access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>4 personal training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Nutrition consultation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fitgreen mr-2">✓</span>
                      <span>Monthly body composition analysis</span>
                    </li>
                  </ul>
                  <Button className="w-full" onClick={() => handlePlanSelection('Elite')}>Select Plan</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <Form {...form}>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <User className="text-gray-500 w-5 h-5 mr-2 mt-2.5" />
                            <Input placeholder="John Doe" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <Mail className="text-gray-500 w-5 h-5 mr-2 mt-2.5" />
                            <Input placeholder="your.email@example.com" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <Phone className="text-gray-500 w-5 h-5 mr-2 mt-2.5" />
                            <Input placeholder="+91 98765 43210" {...field} />
                          </div>
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
                          <div className="flex">
                            <Calendar className="text-gray-500 w-5 h-5 mr-2 mt-2.5" />
                            <Input type="date" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your residential address" {...field} />
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
                      <FormLabel>Emergency Contact Number</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <Phone className="text-gray-500 w-5 h-5 mr-2 mt-2.5" />
                          <Input placeholder="+91 98765 43210" {...field} />
                        </div>
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
                      <FormLabel>Any Health Conditions (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Please mention any health conditions, allergies, or injuries we should be aware of" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={goBack}>Back</Button>
                  <Button type="button" onClick={() => setStep(3)}>Next: Payment Details</Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <p className="text-lg mb-4">
                  Selected Plan: <span className="font-bold">{selectedPlan}</span>
                  {selectedPlan === 'Basic' && <span className="ml-2">- ₹3,499/month</span>}
                  {selectedPlan === 'Premium' && <span className="ml-2">- ₹5,999/month</span>}
                  {selectedPlan === 'Elite' && <span className="ml-2">- ₹8,999/month</span>}
                </p>

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Select Payment Method</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="space-y-3"
                        >
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="credit" id="credit" />
                            <label htmlFor="credit" className="flex items-center cursor-pointer">
                              <CreditCard className="mr-2 h-5 w-5" />
                              <span>Credit Card</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="debit" id="debit" />
                            <label htmlFor="debit" className="flex items-center cursor-pointer">
                              <CreditCard className="mr-2 h-5 w-5" />
                              <span>Debit Card</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="upi" id="upi" />
                            <label htmlFor="upi" className="flex items-center cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                                <path d="M6 9h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9Z" />
                                <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4H5V5Z" />
                              </svg>
                              <span>UPI</span>
                            </label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border p-3 rounded-md">
                            <RadioGroupItem value="netbanking" id="netbanking" />
                            <label htmlFor="netbanking" className="flex items-center cursor-pointer">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                                <path d="M3 21h18" />
                                <path d="M3 10h18" />
                                <path d="M5 6l7-3 7 3" />
                                <path d="M4 10v11" />
                                <path d="M20 10v11" />
                                <path d="M8 14v3" />
                                <path d="M12 14v3" />
                                <path d="M16 14v3" />
                              </svg>
                              <span>Net Banking</span>
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms and conditions and privacy policy
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={goBack} type="button" disabled={isSubmitting}>Back</Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Complete Registration"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
        
        <div className="mt-10 pt-6 border-t">
          <h2 className="text-xl font-semibold mb-4">How to Join</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li className={step === 1 ? "text-fitgreen font-semibold" : ""}>Select your preferred membership plan above</li>
            <li className={step === 2 ? "text-fitgreen font-semibold" : ""}>Complete the registration form with your details</li>
            <li className={step === 3 ? "text-fitgreen font-semibold" : ""}>Choose your payment method</li>
            <li>Visit our gym to collect your membership card</li>
          </ol>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/contact">
            <Button variant="outline" className="mr-4">Contact Us</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
