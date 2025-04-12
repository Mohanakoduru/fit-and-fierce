
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BlogCard from '@/components/BlogCard';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock blog posts data
  const allPosts = [
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
    {
      id: '4',
      title: 'How to Perfect Your Squat Form: A Comprehensive Guide',
      excerpt: 'Master the king of all exercises with this detailed breakdown of proper squat technique, common mistakes, and helpful variations.',
      image: 'https://images.unsplash.com/photo-1534368786749-b63e05c92392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 28, 2025',
      author: 'Marcus Chen',
      category: 'Strength Training',
    },
    {
      id: '5',
      title: 'The Science of Sleep and Its Impact on Fitness Results',
      excerpt: 'Understand how sleep affects muscle recovery, weight management, and overall athletic performance — and how to optimize your sleep routine.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
      date: 'March 25, 2025',
      author: 'Dr. Rebecca Chang',
      category: 'Recovery',
    },
    {
      id: '6',
      title: 'Vegan Protein Sources: Building Muscle on a Plant-Based Diet',
      excerpt: 'Discover how to meet your protein needs and build lean muscle while following a vegan or vegetarian diet with these nutrient-rich foods.',
      image: 'https://images.unsplash.com/photo-1610123598195-eea6079a80ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      date: 'March 20, 2025',
      author: 'Sarah Williams',
      category: 'Nutrition',
    },
    {
      id: '7',
      title: 'Yoga Poses to Improve Your Mobility and Prevent Injuries',
      excerpt: 'Incorporate these 8 yoga poses into your routine to enhance flexibility, joint mobility, and reduce your risk of common training injuries.',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 15, 2025',
      author: 'Jessica Miller',
      category: 'Yoga',
    },
    {
      id: '8',
      title: 'Training for Your First 5K: A 8-Week Plan for Beginners',
      excerpt: 'Follow this beginner-friendly training schedule to successfully prepare for and complete your first 5K race with confidence.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'March 10, 2025',
      author: 'Thomas Reed',
      category: 'Running',
    },
    {
      id: '9',
      title: 'Common Fitness Myths Debunked by Science',
      excerpt: 'Separate fact from fiction as we analyze popular fitness myths and reveal what the scientific research actually tells us about effective training.',
      image: 'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
      date: 'March 5, 2025',
      author: 'Dr. Rebecca Chang',
      category: 'Fitness Myths',
    },
  ];

  // Popular categories
  const categories = [
    'Strength Training',
    'Nutrition',
    'HIIT',
    'Yoga',
    'Recovery',
    'Running',
    'Fitness Myths',
    'Weight Loss',
  ];

  // Popular posts
  const popularPosts = allPosts.slice(0, 4);

  // Filter posts based on search term
  const filteredPosts = searchTerm
    ? allPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allPosts;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fitdark to-fitdark/90 text-white py-24 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Fitness Blog & Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, workout tips, nutrition guidance, and success stories to support your fitness journey.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-6 text-black rounded-full border-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Articles'}
              </h2>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <BlogCard key={post.id} {...post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow text-center">
                  <h3 className="text-xl font-bold mb-4">No articles found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles matching your search criteria. Please try different keywords.
                  </p>
                  <Button className="btn-primary" onClick={() => setSearchTerm('')}>
                    View All Articles
                  </Button>
                </div>
              )}

              <div className="mt-10">
                <Button className="btn-outline">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSearchTerm(category)}
                        className="text-gray-700 hover:text-fitgreen transition-colors flex items-center"
                      >
                        <ArrowRight size={14} className="mr-2" />
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map(post => (
                    <div key={post.id} className="flex gap-3 group">
                      <Link to={`/blog/${post.id}`} className="shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </Link>
                      <div>
                        <Link to={`/blog/${post.id}`}>
                          <h4 className="font-bold group-hover:text-fitgreen transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <Calendar size={12} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-fitgreen text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Get Fitness Tips</h3>
                <p className="mb-6">
                  Subscribe to our newsletter for workout tips, healthy recipes, and expert advice.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white border-0"
                  />
                  <Button className="w-full bg-fitdark hover:bg-fitdark/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Workouts', 'Nutrition', 'Strength', 'Cardio', 'Weight Loss', 'Muscle Building', 'Recovery', 'Mobility', 'Mental Health', 'Supplements'].map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchTerm(tag)}
                      className="bg-gray-100 hover:bg-fitgreen hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-fitblue/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions About Your Fitness Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert trainers are ready to help you achieve your fitness goals. Schedule a free consultation today.
          </p>
          <Button className="btn-primary">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
