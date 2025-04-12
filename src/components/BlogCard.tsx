
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
}) => {
  return (
    <div className="blog-card overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
      <Link to={`/blog/${id}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-fitgreen text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-fitgreen transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="text-fitgreen font-semibold inline-flex items-center hover:text-fitblue transition-colors"
        >
          Read More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
