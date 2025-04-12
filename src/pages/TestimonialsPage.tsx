
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

// Mock data for full testimonial stories
const testimonialFullStories = {
  "sarah": {
    name: "Sarah Johnson",
    achievement: "Lost 65 lbs in 8 months",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3",
    rating: 5,
    story: "After struggling with my weight for years, I finally found a program that worked for me at FIT & FIERCE. The personalized approach and constant support from my trainer made all the difference. I've gained confidence, energy, and a love for fitness that I never thought possible.\n\nWhen I first started, I couldn't even run for 2 minutes without stopping. Now I'm training for my first half marathon! The trainers at FIT & FIERCE didn't just help me lose weight, they helped me change my entire lifestyle. They taught me how to make sustainable changes to my diet and exercise routine that I can maintain long-term.\n\nOne of the biggest differences compared to other gyms I've tried is the community. Everyone is so supportive and encouraging. I've made friends who hold me accountable and celebrate my victories with me. If you're on the fence about joining, just do it. It will be the best decision you ever make for your health and happiness.",
    program: "12-Week Body Transformation"
  },
  "michael": {
    name: "Michael Rodriguez",
    achievement: "Gained 22 lbs of muscle in 6 months",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3",
    rating: 5,
    story: "I've always been skinny and struggled to put on muscle. The trainers at FIT & FIERCE designed a program specifically for my body type, corrected my form, and created a nutrition plan that finally helped me gain muscle mass. The results have been amazing.\n\nBefore joining FIT & FIERCE, I had tried everything - different workout routines, protein supplements, you name it. Nothing seemed to work. The trainers here took the time to understand my goals and challenges, and created a personalized plan that addressed my specific needs.\n\nThe nutrition coaching was a game-changer for me. I had no idea I was consuming far too few calories to support muscle growth. My coach helped me develop a meal plan that provided the right nutrients and calories to support my training regimen. Within the first month, I started seeing real progress.\n\nThe environment at FIT & FIERCE is unlike any gym I've been to before. The trainers are knowledgeable and supportive, and the community is welcoming and motivating. I'm no longer embarrassed to walk into the gym - I feel like I belong here. If you're struggling to see results, give FIT & FIERCE a try. They'll help you achieve what you thought was impossible.",
    program: "Strength Training + Nutrition Coaching"
  },
  "jennifer": {
    name: "Jennifer Richards",
    achievement: "Completed first marathon",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3",
    rating: 5,
    story: "After years of avoiding exercise, the coaches at FIT & FIERCE helped me discover my passion for running. Their training plan was perfect, and I just completed my first marathon!\n\nI never thought I would be a runner. In fact, I used to joke that I only ran if something was chasing me. But the coaches at FIT & FIERCE helped me build up my endurance gradually, starting with walk-run intervals and slowly increasing my distance.\n\nWhat made the difference was the supportive community and the structured training plan. My coach understood that I needed clear goals and milestones to stay motivated. They celebrated every achievement with me, no matter how small, and that kept me coming back.\n\nThe cross-training program they designed helped me build strength and prevent injuries during my marathon training. I'm proof that anyone can become a runner with the right guidance and support. Now I'm setting my sights on an ultramarathon!",
    program: "Running Program + Cross Training"
  },
  "david": {
    name: "David Thompson",
    achievement: "Lost 45 lbs in 6 months",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3",
    rating: 5,
    story: "FIT & FIERCE changed my life. The trainers designed a program that was challenging but achievable, and the supportive community kept me motivated. I've never felt stronger or more confident.\n\nAfter my doctor told me I was at risk for type 2 diabetes, I knew I needed to make a change. I had tried to lose weight on my own many times, but I always ended up giving up after a few weeks. The accountability and structure that FIT & FIERCE provided made all the difference.\n\nMy trainer helped me set realistic goals and created a program that included both strength training and cardio. They also connected me with a nutrition coach who helped me understand how to fuel my body properly without feeling deprived.\n\nThe weight loss has been amazing, but the health benefits have been even better. My blood pressure is normal, my energy levels are through the roof, and I no longer have joint pain. I can keep up with my kids now, and I'm setting a healthy example for them. If you're struggling with your weight, FIT & FIERCE has the tools and support you need to succeed.",
    program: "Weight Loss Program"
  },
  "michael-ford": {
    name: "Michael Ford",
    achievement: "Gained 15 lbs of muscle",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
    rating: 5,
    story: "The strength training program at FIT & FIERCE was exactly what I needed. The trainers corrected my form, progressively increased the challenge, and the nutrition guidance was spot on.\n\nI had been lifting weights on my own for years but had plateaued and wasn't seeing any more gains. Within weeks of starting at FIT & FIERCE, I was breaking through my plateaus and seeing definition in muscles I didn't even know I had.\n\nThe trainers are incredibly knowledgeable about proper form and technique. They identified issues with my squat and deadlift form that were holding me back and potentially setting me up for injury. With their corrections, I was able to lift heavier weights safely and effectively.\n\nThe gym has top-of-the-line equipment and a great atmosphere. Everyone is focused on their workouts, but also friendly and supportive. I've recommended FIT & FIERCE to all my friends who are serious about improving their strength and physique.",
    program: "Advanced Strength Training"
  }
};

const TestimonialsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openTestimonial = (id) => {
    setSelectedTestimonial(testimonialFullStories[id]);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeTestimonial = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };

  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real results from real people. Discover how our members transformed their lives through dedication, 
            hard work, and our supportive fitness community.
          </p>
        </div>
        
        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-fitdark to-transparent opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3" 
                alt="Sarah's transformation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                <p className="text-sm">Lost 65 lbs in 8 months</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "After struggling with my weight for years, I finally found a program that worked for me at FIT & FIERCE. 
                The personalized approach and constant support from my trainer made all the difference. I've gained 
                confidence, energy, and a love for fitness that I never thought possible."
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-fitgreen font-semibold">Program:</span>
                  <span>12-Week Body Transformation</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => openTestimonial('sarah')}>Read Full Story</Button>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-fitdark to-transparent opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3" 
                alt="Michael's transformation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Michael Rodriguez</h3>
                <p className="text-sm">Gained 22 lbs of muscle in 6 months</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "I've always been skinny and struggled to put on muscle. The trainers at FIT & FIERCE designed a 
                program specifically for my body type, corrected my form, and created a nutrition plan that finally 
                helped me gain muscle mass. The results have been amazing."
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-fitgreen font-semibold">Program:</span>
                  <span>Strength Training + Nutrition Coaching</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => openTestimonial('michael')}>Read Full Story</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Story 1 */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3" 
                alt="Jennifer Richards" 
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Jennifer Richards</h3>
              <p className="text-fitblue">Completed first marathon</p>
            </div>
            <p className="text-gray-600 italic mb-4">
              "After years of avoiding exercise, the coaches at FIT & FIERCE helped me discover my passion for running. Their training plan was perfect, and I just completed my first marathon!"
            </p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => openTestimonial('jennifer')}>Read More</Button>
          </div>
          
          {/* Story 2 */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3" 
                alt="David Thompson" 
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">David Thompson</h3>
              <p className="text-fitblue">Lost 45 lbs in 6 months</p>
            </div>
            <p className="text-gray-600 italic mb-4">
              "FIT & FIERCE changed my life. The trainers designed a program that was challenging but achievable, and the supportive community kept me motivated. I've never felt stronger or more confident."
            </p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => openTestimonial('david')}>Read More</Button>
          </div>
          
          {/* Story 3 */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3" 
                alt="Michael Ford" 
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Michael Ford</h3>
              <p className="text-fitblue">Gained 15 lbs of muscle</p>
            </div>
            <p className="text-gray-600 italic mb-4">
              "The strength training program at FIT & FIERCE was exactly what I needed. The trainers corrected my form, progressively increased the challenge, and the nutrition guidance was spot on."
            </p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => openTestimonial('michael-ford')}>Read More</Button>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community and start your transformation journey today. Our expert trainers 
            and supportive environment will help you achieve results you never thought possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join">
              <Button className="btn-primary">
                Join Today
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button variant="outline">
                Book a Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Full Story Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{selectedTestimonial.name}'s Story</h3>
              <button 
                onClick={closeTestimonial}
                className="text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img 
                  src={selectedTestimonial.image} 
                  alt={selectedTestimonial.name} 
                  className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-2">{selectedTestimonial.achievement}</h4>
                  <div className="flex mb-4">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <div className="mb-4">
                    <span className="text-fitgreen font-semibold">Program: </span>
                    <span>{selectedTestimonial.program}</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 space-y-4">
                {selectedTestimonial.story.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link to="/free-trial">
                  <Button className="btn-primary">Book Your Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
