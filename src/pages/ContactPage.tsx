
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to your backend here
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions or ready to start your fitness journey? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Reach out using any of the methods below, or fill out the contact form, and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-fitgreen/10 p-3 rounded-full mr-4">
                    <MapPin className="text-fitgreen" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Fitness Avenue, Workout City, WC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fitgreen/10 p-3 rounded-full mr-4">
                    <Phone className="text-fitgreen" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone Number</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fitgreen/10 p-3 rounded-full mr-4">
                    <Mail className="text-fitgreen" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Address</h3>
                    <p className="text-gray-600">info@fitandfierce.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-fitgreen/10 p-3 rounded-full mr-4">
                    <Clock className="text-fitgreen" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hours of Operation</h3>
                    <p className="text-gray-600">Monday - Friday: 5:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-fitgreen hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-fitgreen hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-fitgreen hover:text-white transition-colors" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-fitgreen hover:text-white transition-colors" aria-label="YouTube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button className="btn-primary w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <div className="w-full h-96">
          {/* Replace with an actual Google Maps embed in production */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-fitgreen" />
              <p className="text-lg font-semibold">Google Maps Embed</p>
              <p className="text-sm">An interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-fitblue/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a stronger, healthier you. Schedule a free consultation or visit our gym today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">
              Book a Free Consultation
            </Button>
            <Button variant="outline" className="border-fitgreen text-fitgreen hover:bg-fitgreen hover:text-white">
              View Membership Options
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
