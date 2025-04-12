
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs, memberships, or anything else? We're here to help. 
            Reach out through the form below or using our contact information.
          </p>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Membership Inquiry" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-fitgreen shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">PJXP+4CH, L.B.Reddy Nagar, Krishna District, Mylavaram, Andhra Pradesh 521230.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-fitgreen shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">8639033832</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-fitgreen shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">mohankoduru064@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-fitgreen shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7493266761277!2d80.63246477602075!3d16.74915628267903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35dcd4e3536a51%3A0x2c2b18ea19cc6cfb!2sLakireddy%20Bali%20Reddy%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1713167428498!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="FIT & FIERCE Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What are your membership options?</h3>
              <p className="text-gray-600">
                We offer flexible monthly and annual memberships, as well as class packages and day passes. Visit our membership page or contact us for detailed pricing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do you offer personal training?</h3>
              <p className="text-gray-600">
                Yes, we have certified personal trainers available for one-on-one or small group sessions. Our trainers specialize in various areas including strength, weight loss, and sport-specific training.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I try before I join?</h3>
              <p className="text-gray-600">
                Absolutely! We offer free trial sessions for new members. Book your trial through our website or by contacting our front desk.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2">What COVID-19 precautions are in place?</h3>
              <p className="text-gray-600">
                We follow all local health guidelines, maintain enhanced cleaning protocols, provide sanitization stations, and monitor capacity as needed to ensure a safe environment.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-fitdark text-white p-8 md:p-12 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join FIT & FIERCE today and take the first step toward achieving your fitness goals with our supportive community and expert guidance.
          </p>
          <Button className="bg-fitgreen hover:bg-fitgreen/90 text-white">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
