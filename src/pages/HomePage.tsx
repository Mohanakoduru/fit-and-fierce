import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Users, 
  Trophy, 
  CheckCircle, 
  ArrowRight,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import VideoPlayer from '@/components/VideoPlayer';

const HomePage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Mock data for featured blog posts
  const featuredPosts = [
    {
      id: '1',
      title: '10 Essential Strength Training Exercises for Beginners',
      excerpt: 'Learn the fundamental strength training movements that will help you build a solid foundation and prevent injuries.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'April 8, 2025',
      author: 'Mike Johnson',
      category: 'Strength Training',
    },
    {
      id: '2',
      title: 'The Ultimate Guide to Post-Workout Nutrition',
      excerpt: 'Discover what to eat after your workouts to maximize recovery, build muscle, and replenish energy stores effectively.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'April 5, 2025',
      author: 'Sarah Williams',
      category: 'Nutrition',
    },
    {
      id: '3',
      title: '5 HIIT Workouts You Can Do in Under 30 Minutes',
      excerpt: 'Short on time? These high-intensity interval training workouts will help you burn fat and improve fitness in minimal time.',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      date: 'April 2, 2025',
      author: 'Lisa Thompson',
      category: 'HIIT',
    },
  ];

  // Video information
  const videoInfo = {
    src: "https://cdn.jsdelivr.net/npm/big-buck-bunny-1080p@0.0.6/video.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Transform Your Body, <br />
                <span className="text-gradient">Elevate Your Life</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join FIT & FIERCE, where we empower you to push your limits, achieve your fitness goals, and become the strongest version of yourself.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/join">
                  <Button className="btn-primary">
                    Join Us Today
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-fitdark">
                    Explore Programs
                  </Button>
                </Link>
              </div>
              <div className="flex items-center mt-12 space-x-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-fitgreen">500+</h3>
                  <p className="text-gray-300">Happy Members</p>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-fitgreen">50+</h3>
                  <p className="text-gray-300">Expert Trainers</p>
                </div>
                <div className="h-12 w-px bg-gray-700"></div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-fitgreen">15+</h3>
                  <p className="text-gray-300">Programs</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block hero-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Fitness training" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-fitgreen">FIT</span><span className="text-fitorange">&</span>FIERCE</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're more than just a gym – we're a community dedicated to helping you become the best version of yourself through expert guidance, innovative programs, and unwavering support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-fitgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="text-fitgreen" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Equipment</h3>
              <p className="text-gray-600">
                Access premium fitness equipment designed for effective workouts and optimal results.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-fitgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-fitgreen" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Trainers</h3>
              <p className="text-gray-600">
                Learn from certified professionals committed to your fitness journey and personal goals.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-fitgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-fitgreen" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Programs</h3>
              <p className="text-gray-600">
                Personalized workout and nutrition plans tailored to your specific needs and fitness level.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-fitgreen/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-fitgreen" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Supportive Community</h3>
              <p className="text-gray-600">
                Join a motivating community of like-minded individuals on similar fitness journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section-padding bg-fitdark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Energy of Our Gym</h2>
              <p className="text-gray-300 mb-8">
                Take a virtual tour of our facilities and get a glimpse of the dynamic, supportive environment that makes FIT & FIERCE special. Our community thrives on mutual encouragement, expert guidance, and a shared passion for fitness.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-fitgreen mr-3 shrink-0" />
                  <span>Spacious workout areas with premium equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-fitgreen mr-3 shrink-0" />
                  <span>Dedicated zones for cardio, strength, and functional training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-fitgreen mr-3 shrink-0" />
                  <span>Professional trainers providing personalized support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-fitgreen mr-3 shrink-0" />
                  <span>Vibrant group classes for all fitness levels</span>
                </li>
              </ul>
              <Link to="/free-trial">
                <Button className="btn-primary">
                  Book a Free Trial
                </Button>
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={videoInfo.thumbnail}
                alt="Gym interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-fitgreen rounded-full flex items-center justify-center hover:bg-fitblue transition-colors"
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play video"
                >
                  <Play className="text-white ml-1" size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player Modal */}
        <VideoPlayer
          videoSrc={videoInfo.src}
          thumbnailSrc={videoInfo.thumbnail}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Fitness Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of programs designed to help you achieve your specific fitness goals, whether you're a beginner or an experienced athlete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Link 
                  to="/programs?program=personal-training" 
                  className="flex items-center text-fitgreen font-semibold hover:text-fitblue transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

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
                <Link 
                  to="/programs?program=group-classes" 
                  className="flex items-center text-fitgreen font-semibold hover:text-fitblue transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

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
                <Link 
                  to="/programs?program=nutrition-coaching" 
                  className="flex items-center text-fitgreen font-semibold hover:text-fitblue transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button className="btn-primary">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our members who have transformed their lives through dedication, hard work, and our supportive fitness community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="David Thompson" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold">David Thompson</h3>
                <p className="text-fitblue">Lost 45 lbs in 6 months</p>
              </div>
              <p className="text-gray-600 italic">
                "FIT & FIERCE changed my life. The trainers designed a program that was challenging but achievable, and the supportive community kept me motivated. I've never felt stronger or more confident."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
                  alt="Jennifer Richards" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold">Jennifer Richards</h3>
                <p className="text-fitblue">Completed first marathon</p>
              </div>
              <p className="text-gray-600 italic">
                "After years of avoiding exercise, the coaches at FIT & FIERCE helped me discover my passion for running. Their training plan was perfect, and I just completed my first marathon!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Michael Ford" 
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold">Michael Ford</h3>
                <p className="text-fitblue">Gained 15 lbs of muscle</p>
              </div>
              <p className="text-gray-600 italic">
                "The strength training program at FIT & FIERCE was exactly what I needed. The trainers corrected my form, progressively increased the challenge, and the nutrition guidance was spot on."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="btn-outline">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Expert advice, fitness tips, nutrition guidance, and inspiring stories to support your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="btn-outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fitblue to-fitgreen text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join FIT & FIERCE today and take the first step toward a stronger, healthier, more confident you. Your fitness journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/join">
              <Button className="bg-white text-fitblue hover:bg-gray-100">
                Join Now
              </Button>
            </Link>
            <Link to="/free-trial">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-fitblue">
                Book a Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
