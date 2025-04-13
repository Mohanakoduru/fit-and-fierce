
import { createClient } from '@supabase/supabase-js';

// Getting Supabase URL and Anon Key from environment variables which will be set up when connecting Supabase in Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock implementation for when Supabase credentials are missing
const createMockClient = () => {
  console.warn('Using mock Supabase client. Please connect Supabase in Lovable to use real database functionality.');
  
  return {
    from: () => ({
      insert: async () => {
        console.log('Mock insert called - no actual database operation performed');
        return { data: null, error: null, status: 200, statusText: 'OK' };
      },
      select: async () => {
        console.log('Mock select called - no actual database operation performed');
        return { data: [], error: null };
      },
      update: async () => {
        console.log('Mock update called - no actual database operation performed');
        return { data: null, error: null };
      },
      delete: async () => {
        console.log('Mock delete called - no actual database operation performed');
        return { data: null, error: null };
      },
    }),
    auth: {
      signUp: async () => {
        console.log('Mock signUp called - no actual auth operation performed');
        return { data: null, error: null };
      },
      signIn: async () => {
        console.log('Mock signIn called - no actual auth operation performed');
        return { data: null, error: null };
      },
      signOut: async () => {
        console.log('Mock signOut called - no actual auth operation performed');
        return { error: null };
      },
    },
  };
};

// Initialize Supabase client with real credentials if available, otherwise use mock client
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient();

// Types for membership registration
export type MembershipPlan = 'Basic' | 'Premium' | 'Elite';

export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  emergencyContact: string;
  healthConditions?: string;
  paymentMethod: string;
  selectedPlan: MembershipPlan;
  createdAt: string;
}

// Function to save registration data to Supabase
export async function saveRegistrationData(data: Omit<RegistrationFormData, 'createdAt'>) {
  try {
    // Log the data being saved (for debugging)
    console.log('Saving registration data:', data);
    
    const { data: insertedData, error } = await supabase
      .from('registrations')
      .insert([{
        ...data,
        createdAt: new Date().toISOString()
      }]);

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return { success: true, data: insertedData };
  } catch (error) {
    console.error('Error saving registration data:', error);
    return { success: false, error };
  }
}
