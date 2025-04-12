import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, Dumbbell, Users } from 'lucide-react';

// Mock data for program details
const programDetails = {
  'personal-training': {
    title: 'Personal Training',
    description: 'One-on-one sessions with our expert trainers tailored to your specific goals, fitness level, and preferences.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
    features: [
      'Customized workout plans based on your fitness assessment',
      'Constant form correction and technique guidance',
      'Regular progress tracking and plan adjustments',
      'Nutrition advice to complement your training',
      'Flexible scheduling to fit your lifestyle'
    ],
    sessions: '30, 45, or 60 minutes',
    pricing: 'Starting at ₹3,599 per session',
    packages: [
      { name: 'Starter Package', sessions: 4, price: '₹15,999', savings: 'Save ₹1,500' },
      { name: 'Commitment Package', sessions: 12, price: '₹44,999', savings: 'Save ₹8,999' },
      { name: 'Transformation Package', sessions: 24, price: '₹79,999', savings: 'Save ₹26,999' }
    ]
  },
  'group-classes': {
    title: 'Group Classes',
    description: 'Energetic, instructor-led sessions including HIIT, spinning, body pump, and more in a motivating group setting.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3',
    features: [
      'Variety of class types to challenge different muscle groups',
      'High-energy environment with motivating music',
      'Community atmosphere that fosters accountability',
      'Modifications offered for all fitness levels',
      'Regular class updates to prevent plateaus'
    ],
    classSize: '5-15 people',
    pricing: '₹7,499/month (unlimited)',
    classTypes: [
      { name: 'HIIT', description: 'High-intensity interval training for maximum calorie burn', duration: '45 min' },
      { name: 'Spinning', description: 'Indoor cycling workouts with varying intensity', duration: '50 min' },
      { name: 'Body Pump', description: 'Total body strength workout using light to moderate weights', duration: '60 min' },
      { name: 'Yoga Flow', description: 'Dynamic yoga sequences to improve flexibility and strength', duration: '75 min' },
      { name: 'Core Blast', description: 'Focused abdominal and back strengthening workout', duration: '30 min' }
    ]
  },
  'nutrition-coaching': {
    title: 'Nutrition Coaching',
    description: 'Personalized nutrition plans and ongoing support to optimize your diet for better health and fitness results.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3',
    features: [
      'Comprehensive nutritional assessment and goal setting',
      'Custom meal plans based on your preferences and lifestyle',
      'Education on food selection, preparation, and portion control',
      'Regular check-ins and plan adjustments',
      'Strategies for dining out and special occasions'
    ],
    consultation: '60 minutes',
    pricing: '8-Week Program: ₹21,999',
    includes: [
      'Initial 60-minute consultation',
      'Personalized nutrition plan',
      'Weekly check-ins and adjustments',
      'Food journal review and feedback',
      'Recipe suggestions and meal prep tips',
      'Lifetime access to our nutrition resources library'
    ]
  },
  'hiit': {
    title: 'HIIT Workouts',
    description: 'High-intensity interval training sessions designed to maximize calorie burn and improve cardiovascular fitness.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3',
    features: [
      'Science-backed interval training for optimal results',
      'Time-efficient workouts (30-45 minutes)',
      'Combination of bodyweight and equipment exercises',
      'Modifications for all fitness levels',
      'Continued calorie burn post-workout'
    ],
    sessions: '3-5 times per week',
    pricing: 'Included in membership or ₹1,099 per class',
    benefits: [
      'Improved cardiovascular health',
      'Increased metabolic rate',
      'Fat loss while preserving muscle',
      'No equipment necessary for many workouts',
      'Quick results with consistent effort'
    ]
  },
  'strength': {
    title: 'Strength Training',
    description: 'Progressive resistance training to build muscle, increase strength, and improve body composition.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3',
    features: [
      'Compound movements for maximum muscle recruitment',
      'Progressive overload methodology',
      'Form-focused instruction to prevent injury',
      'Periodized programming for continued progress',
      'Balanced approach targeting all major muscle groups'
    ],
    sessions: '3-4 times per week',
    pricing: 'Included in membership or ₹4,799 per session with a specialist',
    levels: [
      { name: 'Beginner', focus: 'Learning proper form and building foundational strength' },
      { name: 'Intermediate', focus: 'Progressive overload and more advanced movement patterns' },
      { name: 'Advanced', focus: 'Specialized training techniques and peak performance' }
    ]
  },
  'yoga': {
    title: 'Yoga & Wellness',
    description: 'Mind-body practices that improve flexibility, strength, posture, and mental well-being.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3',
    features: [
      'Variety of yoga styles (Vinyasa, Hatha, Yin, Power)',
      'Focus on breath work and mindfulness',
      'Improvement in flexibility and joint health',
      'Stress reduction and mental clarity',
      'Complement to other training modalities'
    ],
    sessions: '60-90 minutes',
    pricing: 'Included in membership or ₹1,299 per class',
    styles: [
      { name: 'Vinyasa Flow', level: 'All levels', focus: 'Flowing movements synchronized with breath' },
      { name: 'Power Yoga', level: 'Intermediate-Advanced', focus: 'Strength-building dynamic practice' },
      { name: 'Yin Yoga', level: 'All levels', focus: 'Deep tissue stretching with longer holds' },
      { name: 'Restorative', level: 'All levels', focus: 'Gentle practice focused on relaxation and recovery' }
    ]
  }
};

const ProgramsPage = () => {
  const location = useLocation();
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  useEffect(() => {
    // Get program from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const program = queryParams.get('program');
    
    if (program && programDetails[program]) {
      setSelectedProgram(programDetails[program]);
      // Scroll to the program details section
      setTimeout(() => {
        const detailsSection = document.getElementById('program-details');
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setSelectedProgram(null);
    }
  }, [location]);

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
              <Link to="/programs?program=transformation">
                <Button className="self-start">Learn More</Button>
              </Link>
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

        {/* Program Details (displayed when a program is selected) */}
        {selectedProgram && (
          <div id="program-details" className="mb-16 scroll-mt-20">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fitdark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProgram.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xl text-gray-700 mb-8">
                  {selectedProgram.description}
                </p>
                
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selectedProgram.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="mr-3 h-5 w-5 text-fitgreen mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Session Details</h4>
                    {selectedProgram.sessions && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Session Options:</span>
                        <span>{selectedProgram.sessions}</span>
                      </div>
                    )}
                    {selectedProgram.classSize && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Class Size:</span>
                        <span>{selectedProgram.classSize}</span>
                      </div>
                    )}
                    {selectedProgram.consultation && (
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Initial Consultation:</span>
                        <span>{selectedProgram.consultation}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm pt-2 border-t mt-2">
                      <span className="font-medium">Pricing:</span>
                      <span className="text-fitgreen font-bold">{selectedProgram.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Get Started Today</h4>
                    <p className="text-gray-600 mb-4">
                      Ready to begin your fitness journey with our {selectedProgram.title.toLowerCase()} program? Book a free consultation to learn more and get started.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/free-trial">
                        <Button className="w-full">Book a Free Consultation</Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full">Contact Us</Button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Conditional content based on program type */}
                {selectedProgram.packages && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Package Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProgram.packages.map((pkg, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                          <div className="text-3xl font-bold text-fitgreen mb-2">{pkg.price}</div>
                          <p className="text-sm mb-2">{pkg.sessions} sessions</p>
                          <p className="text-fitblue font-semibold">{pkg.savings}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProgram.classTypes && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Available Classes</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProgram.classTypes.map((classType, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <h4 className="text-lg font-bold">{classType.name}</h4>
                              <p className="text-gray-600">{classType.description}</p>
                            </div>
                            <div className="mt-2 md:mt-0 md:ml-4 flex items-center whitespace-nowrap">
                              <Clock className="h-4 w-4 text-fitgreen mr-1" />
                              <span className="text-sm">{classType.duration}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProgram.includes && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProgram.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="mr-3 h-5 w-5 text-fitgreen mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProgram.benefits && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProgram.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="mr-3 h-5 w-5 text-fitgreen mt-1 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProgram.levels && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Program Levels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProgram.levels.map((level, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold mb-2">{level.name}</h4>
                          <p className="text-gray-600">{level.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedProgram.styles && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Yoga Styles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedProgram.styles.map((style, index) => (
                        <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold mb-1">{style.name}</h4>
                          <p className="text-sm text-fitblue mb-2">{style.level}</p>
                          <p className="text-gray-600">{style.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
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
                  <span className="text-fitgreen font-bold">₹3,599 per session</span>
                </div>
              </div>
              <Link to="/programs?program=personal-training">
                <Button className="w-full flex items-center justify-center">
                  View Details <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Group Classes */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3" 
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
                  <span className="text-fitgreen font-bold">₹7,499/month (unlimited)</span>
                </div>
              </div>
              <Link to="/programs?program=group-classes">
                <Button className="w-full flex items-center justify-center">
                  View Schedule <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Nutrition Coaching */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3" 
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
                  <span className="text-fitgreen font-bold">₹21,999</span>
                </div>
              </div>
              <Link to="/programs?program=nutrition-coaching">
                <Button className="w-full flex items-center justify-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
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
            <Link to="/programs?program=yoga">
              <Button variant="outline" className="w-full">Learn More</Button>
            </Link>
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
