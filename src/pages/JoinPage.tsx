
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JoinPage = () => {
  return (
    <div className="container-custom py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Join FIT & FIERCE Today</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Membership Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
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
              <Button className="w-full">Select Plan</Button>
            </div>
            
            <div className="border rounded-lg p-6 bg-gray-50 hover:shadow-md transition-shadow relative">
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
              <Button className="w-full">Select Plan</Button>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
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
              <Button className="w-full">Select Plan</Button>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Join</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Select your preferred membership plan above</li>
            <li>Complete the registration form with your details</li>
            <li>Choose your payment method</li>
            <li>Visit our gym to collect your membership card</li>
          </ol>
        </div>
        
        <div className="flex justify-center">
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
