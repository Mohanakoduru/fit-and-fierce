
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fitdark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-fitgreen">FIT</span>
              <span className="text-fitorange">&</span>
              <span>FIERCE</span>
            </h3>
            <p className="text-gray-300">
              Empowering individuals to embrace their strength, push beyond limits, and achieve their fitness goals in a supportive community.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fitgreen transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fitgreen transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fitgreen transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fitgreen transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-fitgreen transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-fitgreen transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-fitgreen transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/trainers" className="text-gray-300 hover:text-fitgreen transition-colors">Our Trainers</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-fitgreen transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Personal Training</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Group Classes</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">HIIT Workouts</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Strength Training</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Yoga & Wellness</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-fitgreen transition-colors">Nutrition Planning</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-fitgreen shrink-0 mt-1" />
                <span className="text-gray-300">123 Fitness Avenue, Workout City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-fitgreen shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-fitgreen shrink-0" />
                <span className="text-gray-300">info@fitandfierce.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300">Get the latest fitness tips, nutrition advice, and exclusive offers.</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none text-fitdark"
                />
                <button className="bg-fitgreen hover:bg-fitgreen/90 text-white font-semibold px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} FIT & FIERCE. All Rights Reserved. | 
            <Link to="/privacy" className="ml-1 hover:text-fitgreen transition-colors">Privacy Policy</Link> | 
            <Link to="/terms" className="ml-1 hover:text-fitgreen transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
