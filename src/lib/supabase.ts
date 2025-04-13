
import { createClient } from '@supabase/supabase-js';

// Getting Supabase URL and Anon Key from environment variables which will be set up when connecting Supabase in Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Please connect Supabase in Lovable.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

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
    const { data: insertedData, error } = await supabase
      .from('registrations')
      .insert([{
        ...data,
        createdAt: new Date().toISOString()
      }]);

    if (error) {
      throw error;
    }

    return { success: true, data: insertedData };
  } catch (error) {
    console.error('Error saving registration data:', error);
    return { success: false, error };
  }
}
