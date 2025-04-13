
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

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
  const navigate = useNavigate();
  
  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/blog?id=${id}`);
  };
  
  return (
    <div className="blog-card overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
      <Link to={`/blog?id=${id}`}>
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
        <Link to={`/blog?id=${id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-fitgreen transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <button
          onClick={handleReadMore}
          className="text-fitgreen font-semibold inline-flex items-center hover:text-fitblue transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
