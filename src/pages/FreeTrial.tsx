
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const FreeTrial = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Free trial booked!",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  return (
    <div className="container-custom py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Book Your Free Trial</h1>
        
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            Experience FIT & FIERCE with a complimentary trial session. Our free trial gives you full access to our facilities and a personalized introduction to our gym with one of our expert trainers.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">What's Included in Your Free Trial</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-fitgreen mr-2 font-bold">✓</span>
                <span>Full access to all gym equipment and facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-fitgreen mr-2 font-bold">✓</span>
                <span>One complimentary group class of your choice</span>
              </li>
              <li className="flex items-start">
                <span className="text-fitgreen mr-2 font-bold">✓</span>
                <span>30-minute consultation with a fitness expert</span>
              </li>
              <li className="flex items-start">
                <span className="text-fitgreen mr-2 font-bold">✓</span>
                <span>Body composition analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-fitgreen mr-2 font-bold">✓</span>
                <span>No obligation to join</span>
              </li>
            </ul>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Book Your Session</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitgreen"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitgreen"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitgreen"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input
                type="date"
                id="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitgreen"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fitgreen"
              placeholder="Tell us about your fitness goals or any questions you have..."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="h-4 w-4 text-fitgreen rounded focus:ring-fitgreen" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
          
          <div className="flex justify-between items-center">
            <Button type="submit">Book My Free Trial</Button>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeTrial;
