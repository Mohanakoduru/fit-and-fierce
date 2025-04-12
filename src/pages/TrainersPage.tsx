
import React from 'react';
import { 
  ChevronRight,
  Mail,
  Instagram,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TrainersPage = () => {
  const trainers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Head Trainer & Founder",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "With over 15 years of experience and multiple certifications, Alex specializes in strength training and athletic performance.",
      fullBio: "Alex founded FIT & FIERCE with a vision to create a gym that combines expert coaching with a supportive community. After competing as a professional athlete, he turned his passion for fitness into a career dedicated to helping others reach their potential. His training philosophy focuses on functional movements, progressive overload, and sustainable habits that lead to long-term success.",
      certifications: ["NASM Certified Personal Trainer", "CrossFit Level 3 Trainer", "Precision Nutrition Level 2"],
      specialties: ["Strength Training", "Athletic Performance", "Weight Management"],
      contact: {
        email: "alex@fitandfierce.com",
        instagram: "@alex.trainer"
      },
      schedule: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Nutrition Coach",
      image: "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Sarah combines her expertise in nutritional science with practical meal planning to help clients optimize their diet for better health and performance.",
      fullBio: "Sarah holds a Master's degree in Nutritional Sciences and has helped hundreds of clients transform their relationship with food. She believes that nutrition should be personalized, sustainable, and enjoyable. Her approach focuses on small, consistent changes that add up to significant results over time. Sarah works closely with our training team to ensure nutrition plans complement workout routines for maximum effectiveness.",
      certifications: ["Precision Nutrition Level 2", "Integrative Nutrition Health Coach", "NASM Fitness Nutrition Specialist"],
      specialties: ["Weight Management", "Sports Nutrition", "Meal Planning"],
      contact: {
        email: "sarah@fitandfierce.com",
        instagram: "@sarah.nutrition"
      },
      schedule: ["Monday", "Wednesday", "Thursday", "Friday"]
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Strength & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Marcus specializes in helping clients build strength, power, and functional fitness through scientifically-backed training methods.",
      fullBio: "Marcus brings a scientific approach to strength and conditioning, constantly staying updated on the latest research in exercise physiology. After working with professional athletes and teams, he joined FIT & FIERCE to share his expertise with our community. Marcus excels at designing progressive training programs that safely build strength while preventing injury. His clients appreciate his detailed approach and ability to explain complex concepts in simple terms.",
      certifications: ["NSCA Certified Strength & Conditioning Specialist", "USA Weightlifting Level 2", "TRX Suspension Training"],
      specialties: ["Strength Development", "Olympic Lifting", "Sport-Specific Training"],
      contact: {
        email: "marcus@fitandfierce.com",
        instagram: "@marcus.strength"
      },
      schedule: ["Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"]
    },
    {
      id: 4,
      name: "Jessica Miller",
      role: "Yoga & Mobility Instructor",
      image: "https://images.unsplash.com/photo-1594751684241-bcef0ac0feb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      bio: "Jessica helps clients improve flexibility, mobility, and mindfulness through specialized yoga and mobility training.",
      fullBio: "Jessica discovered yoga after a sports injury and was amazed at how it transformed not just her physical recovery but her entire approach to fitness and well-being. She completed multiple yoga teacher certifications and specialized in working with athletes and fitness enthusiasts. At FIT & FIERCE, Jessica teaches classes and works one-on-one with clients to improve mobility, prevent injuries, and develop mind-body awareness that enhances overall performance and well-being.",
      certifications: ["RYT-500 Yoga Instructor", "FRC Mobility Specialist", "Mind-Body Fitness Coach"],
      specialties: ["Yoga for Athletes", "Mobility Training", "Stress Reduction"],
      contact: {
        email: "jessica@fitandfierce.com", 
        instagram: "@jessica.yoga"
      },
      schedule: ["Monday", "Tuesday", "Thursday", "Friday", "Sunday"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our Expert <span className="text-fitgreen">Trainers</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Meet the dedicated professionals who will guide and support you on your fitness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {trainers.map((trainer, index) => (
              <div key={trainer.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name} 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">{trainer.name}</h3>
                      <p className="text-fitgreen">{trainer.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4">{trainer.name}</h2>
                  <p className="text-fitgreen font-semibold mb-4">{trainer.role}</p>
                  
                  <p className="text-gray-700 mb-6">{trainer.fullBio}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold mb-3">Certifications</h3>
                      <ul className="space-y-2">
                        {trainer.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="text-fitgreen shrink-0 mr-1 mt-1" size={16} />
                            <span className="text-gray-700">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-3">Specialties</h3>
                      <ul className="space-y-2">
                        {trainer.specialties.map((specialty, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="text-fitgreen shrink-0 mr-1 mt-1" size={16} />
                            <span className="text-gray-700">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center">
                      <Calendar className="text-fitgreen mr-2" size={18} />
                      <span className="text-gray-700 text-sm">Available: {trainer.schedule.join(', ')}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-fitgreen mr-2" size={18} />
                      <span className="text-gray-700 text-sm">{trainer.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Instagram className="text-fitgreen mr-2" size={18} />
                      <span className="text-gray-700 text-sm">{trainer.contact.instagram}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="btn-primary">Book a Session</Button>
                    <Button variant="outline" className="border-fitgreen text-fitgreen hover:bg-fitgreen hover:text-white">
                      Contact
                    </Button>
                  </div>
                </div>
                
                {index < trainers.length - 1 && (
                  <div className="lg:col-span-12">
                    <hr className="border-gray-200 my-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fitblue to-fitgreen text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book a session with one of our expert trainers and take the first step towards achieving your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-fitblue hover:bg-gray-100">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/join">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-fitblue">
                Join FIT & FIERCE
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainersPage;
