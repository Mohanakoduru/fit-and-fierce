
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TestimonialsPage = () => {
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
                <Button variant="outline" size="sm">Read Full Story</Button>
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
                <Button variant="outline" size="sm">Read Full Story</Button>
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
            <Button variant="outline" size="sm" className="w-full">Read More</Button>
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
            <Button variant="outline" size="sm" className="w-full">Read More</Button>
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
            <Button variant="outline" size="sm" className="w-full">Read More</Button>
          </div>
        </div>
        
        {/* Before & After Showcase */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Before & After Transformations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Transformation 1 */}
            <div>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded mb-2">BEFORE</span>
                  <img 
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&w=400" 
                    alt="Before transformation" 
                    className="w-full h-44 object-cover rounded"
                  />
                </div>
                <div className="w-1/2">
                  <span className="inline-block bg-fitgreen text-white text-xs font-semibold px-2 py-1 rounded mb-2">AFTER</span>
                  <img 
                    src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&w=400" 
                    alt="After transformation" 
                    className="w-full h-44 object-cover rounded"
                  />
                </div>
              </div>
              <h3 className="font-bold mb-1">Lisa M. - Lost 35 lbs</h3>
              <p className="text-sm text-gray-600">"6 months of consistent training and nutrition guidance"</p>
            </div>
            
            {/* Transformation 2 */}
            <div>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded mb-2">BEFORE</span>
                  <img 
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&w=400" 
                    alt="Before transformation" 
                    className="w-full h-44 object-cover rounded"
                  />
                </div>
                <div className="w-1/2">
                  <span className="inline-block bg-fitgreen text-white text-xs font-semibold px-2 py-1 rounded mb-2">AFTER</span>
                  <img 
                    src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-4.0.3&w=400" 
                    alt="After transformation" 
                    className="w-full h-44 object-cover rounded"
                  />
                </div>
              </div>
              <h3 className="font-bold mb-1">John T. - Gained muscle definition</h3>
              <p className="text-sm text-gray-600">"12-week strength program with custom meal plan"</p>
            </div>
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
    </div>
  );
};

export default TestimonialsPage;
