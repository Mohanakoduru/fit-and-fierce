
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Dumbbell, Users } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fitness Programs</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our diverse range of programs designed to help you achieve your specific fitness goals, whether you're a beginner or an experienced athlete.
          </p>
        </div>
        
        {/* Featured Program */}
        <div className="bg-fitdark text-white rounded-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-fitgreen text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">FEATURED PROGRAM</span>
              <h2 className="text-3xl font-bold mb-4">12-Week Body Transformation</h2>
              <p className="mb-6 text-gray-300">
                Our signature program combines personalized training, nutrition guidance, and accountability coaching to deliver extraordinary results. This holistic approach addresses all aspects of fitness and wellness.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-fitgreen" />
                  <span>3 sessions per week (45-60 minutes each)</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-fitgreen" />
                  <span>12-week duration with progress tracking</span>
                </li>
                <li className="flex items-center">
                  <Dumbbell className="mr-3 h-5 w-5 text-fitgreen" />
                  <span>Custom workout and nutrition plan</span>
                </li>
                <li className="flex items-center">
                  <Users className="mr-3 h-5 w-5 text-fitgreen" />
                  <span>Weekly check-ins with your dedicated coach</span>
                </li>
              </ul>
              <Button className="self-start">Learn More</Button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3" 
                alt="Body Transformation Program" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Program Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Personal Training */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3" 
              alt="Personal Training" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Personal Training</h3>
              <p className="text-gray-600 mb-4">
                One-on-one sessions with our expert trainers tailored to your specific goals, fitness level, and preferences.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Session Options:</span>
                  <span>30, 45, or 60 minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Starting at:</span>
                  <span className="text-fitgreen font-bold">$50 per session</span>
                </div>
              </div>
              <Button className="w-full flex items-center justify-center">
                View Details <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Group Classes */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b6?ixlib=rb-4.0.3" 
              alt="Group Classes" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Group Classes</h3>
              <p className="text-gray-600 mb-4">
                Energetic, instructor-led sessions including HIIT, spinning, body pump, and more in a motivating group setting.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Class Size:</span>
                  <span>5-15 people</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Monthly Pass:</span>
                  <span className="text-fitgreen font-bold">$99/month (unlimited)</span>
                </div>
              </div>
              <Button className="w-full flex items-center justify-center">
                View Schedule <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Nutrition Coaching */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1616279969856-759f2a53b03a?ixlib=rb-4.0.3" 
              alt="Nutrition Coaching" 
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Nutrition Coaching</h3>
              <p className="text-gray-600 mb-4">
                Personalized nutrition plans and ongoing support to optimize your diet for better health and fitness results.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Initial Consultation:</span>
                  <span>60 minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">8-Week Program:</span>
                  <span className="text-fitgreen font-bold">$299</span>
                </div>
              </div>
              <Button className="w-full flex items-center justify-center">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* More Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Online Coaching */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Online Coaching</h3>
            <p className="text-gray-600 mb-4">
              Remote training programs with virtual check-ins, perfect for busy professionals or those who prefer working out at home or while traveling.
            </p>
            <Button variant="outline" className="w-full">Explore Online Options</Button>
          </div>
          
          {/* Sports Performance */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Sports Performance</h3>
            <p className="text-gray-600 mb-4">
              Specialized training for athletes looking to improve performance in specific sports through targeted strength, speed, and agility work.
            </p>
            <Button variant="outline" className="w-full">View Sports Programs</Button>
          </div>
          
          {/* Wellness & Recovery */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Wellness & Recovery</h3>
            <p className="text-gray-600 mb-4">
              Focus on mobility, flexibility, and recovery techniques including yoga, foam rolling, and therapeutic exercises for injury prevention.
            </p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          
          {/* Senior Fitness */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Senior Fitness</h3>
            <p className="text-gray-600 mb-4">
              Age-appropriate fitness programs designed to improve strength, balance, and mobility for older adults in a safe, supportive environment.
            </p>
            <Button variant="outline" className="w-full">View Details</Button>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-fitblue to-fitgreen text-white p-8 md:p-12 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Our expert trainers are ready to help you achieve your fitness goals. Book a free consultation to learn which program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-fitblue hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-fitblue">
                Book a Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
