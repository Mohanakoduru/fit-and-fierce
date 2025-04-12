import React from 'react';
import { 
  Award, 
  Users, 
  Heart, 
  Dumbbell, 
  Clock,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const coreValues = [
    {
      icon: <Heart className="h-10 w-10 text-fitgreen" />,
      title: "Passion",
      description: "We're driven by our love for fitness and helping others achieve their full potential."
    },
    {
      icon: <Users className="h-10 w-10 text-fitgreen" />,
      title: "Community",
      description: "We foster a supportive environment where everyone belongs and feels motivated."
    },
    {
      icon: <Award className="h-10 w-10 text-fitgreen" />,
      title: "Excellence",
      description: "We strive for the highest standards in training, facilities, and member experience."
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-fitgreen" />,
      title: "Results",
      description: "We're committed to helping you achieve tangible, sustainable fitness outcomes."
    }
  ];

  const trainers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Head Trainer & Founder",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "With over 15 years of experience and multiple certifications, Alex specializes in strength training and athletic performance.",
      certifications: ["NASM Certified Personal Trainer", "CrossFit Level 3 Trainer", "Precision Nutrition Level 2"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Nutrition Coach",
      image: "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Sarah combines her expertise in nutritional science with practical meal planning to help clients optimize their diet for better health and performance.",
      certifications: ["Precision Nutrition Level 2", "Integrative Nutrition Health Coach", "NASM Fitness Nutrition Specialist"]
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Strength & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Marcus specializes in helping clients build strength, power, and functional fitness through scientifically-backed training methods.",
      certifications: ["NSCA Certified Strength & Conditioning Specialist", "USA Weightlifting Level 2", "TRX Suspension Training"]
    },
    {
      id: 4,
      name: "Jessica Miller",
      role: "Yoga & Mobility Instructor",
      image: "https://images.unsplash.com/photo-1594751684241-bcef0ac0feb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      bio: "Jessica helps clients improve flexibility, mobility, and mindfulness through specialized yoga and mobility training.",
      certifications: ["RYT-500 Yoga Instructor", "FRC Mobility Specialist", "Mind-Body Fitness Coach"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-fitgreen">FIT</span><span className="text-fitorange">&</span>FIERCE
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're more than just a gym - we're a community dedicated to helping you become the strongest, healthiest version of yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                FIT & FIERCE was born from a simple yet powerful vision: to create a fitness community where everyone feels welcome, supported, and empowered to reach their full potential.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2015 by professional fitness trainer Alex Rodriguez, our gym began as a small personal training studio. As word spread about our personalized approach and supportive atmosphere, we quickly outgrew our original space.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we've evolved into a comprehensive fitness center with state-of-the-art equipment, diverse class offerings, and a team of expert trainers. While we've grown in size, our core mission remains unchanged: to help each member transform their life through fitness, regardless of their starting point.
              </p>
              <p className="text-gray-600">
                What truly sets us apart is our community. When you join FIT & FIERCE, you become part of a family that celebrates every victory, supports you through challenges, and inspires you to keep pushing forward on your fitness journey.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Gym interior" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-fitgreen text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">Est. 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At FIT & FIERCE, we're guided by a clear mission and set of core values that shape everything we do.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl text-gray-700 mb-6">
              "To empower individuals to transform their lives through fitness by providing expert guidance, innovative programs, and a supportive community that inspires everyone to discover their inner strength and achieve lasting results."
            </p>
            <div className="flex items-center">
              <Clock className="text-fitgreen mr-3" />
              <p className="text-gray-700">
                We're committed to this mission every day, with every member who walks through our doors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Trainers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of certified fitness professionals is passionate about helping you achieve your goals through personalized guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">View Profile</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-fitgreen font-medium mb-3">{trainer.role}</p>
                  <p className="text-gray-600 mb-4">{trainer.bio}</p>
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Certifications:</h4>
                  <ul className="space-y-1">
                    {trainer.certifications.map((cert, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start">
                        <ChevronRight className="text-fitgreen shrink-0 mr-1 mt-1" size={14} />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our members who have experienced real transformations with FIT & FIERCE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="text-6xl text-fitgreen/20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">
                  Working with the trainers at FIT & FIERCE completely changed my approach to fitness. They created a personalized plan that worked for my busy schedule and helped me lose 30 pounds in 6 months. More importantly, they taught me how to maintain a healthy lifestyle long-term.
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Emily Watson" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Emily Watson</h4>
                    <p className="text-sm text-gray-500">Member since 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="text-6xl text-fitgreen/20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">
                  I was intimidated to join a gym after years of inactivity, but the staff at FIT & FIERCE made me feel welcome from day one. The supportive community and expert coaching helped me build confidence and strength I never thought possible. Now I look forward to my workouts!
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Thomas Reed" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Thomas Reed</h4>
                    <p className="text-sm text-gray-500">Member since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="btn-outline">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose FIT & FIERCE?</h2>
              <p className="text-gray-600 mb-8">
                We understand you have many options when it comes to your fitness journey. Here's what makes FIT & FIERCE the right choice for achieving your goals:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-fitgreen shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Personalized Approach</h3>
                    <p className="text-gray-600">We understand that everyone's fitness journey is unique, which is why we create customized plans tailored to your specific goals, fitness level, and preferences.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fitgreen shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Expert Guidance</h3>
                    <p className="text-gray-600">Our team of certified trainers brings years of experience and specialized knowledge to help you train safely and effectively.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fitgreen shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Supportive Community</h3>
                    <p className="text-gray-600">At FIT & FIERCE, you'll find a welcoming environment where members encourage each other and celebrate successes together.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-fitgreen shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold">Comprehensive Approach</h3>
                    <p className="text-gray-600">We focus on all aspects of fitness including strength, endurance, flexibility, nutrition, and recovery for holistic results.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Gym equipment" 
                className="rounded-lg shadow-md object-cover h-full w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Group fitness class" 
                className="rounded-lg shadow-md object-cover h-full w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Personal training" 
                className="rounded-lg shadow-md object-cover h-full w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80" 
                alt="Gym facilities" 
                className="rounded-lg shadow-md object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fitblue to-fitgreen text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a stronger, healthier you. Schedule a free consultation with one of our expert trainers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-fitblue hover:bg-gray-100">
              Book a Free Consultation
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-fitblue">
              Learn About Membership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
