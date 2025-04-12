
import React, { useState, useRef } from 'react';
import { Play, Pause, X } from 'lucide-react';

interface VideoPlayerProps {
  videoSrc: string;
  thumbnailSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, thumbnailSrc, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // If the modal is closed, reset the video
  React.useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-1 z-10 hover:bg-opacity-70 transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>
        
        <div className="relative">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full"
            poster={thumbnailSrc}
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the video tag.
          </video>
          
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-20 h-20 bg-fitgreen rounded-full flex items-center justify-center hover:bg-fitblue transition-colors">
                <Play className="text-white ml-1" size={30} />
              </div>
            </button>
          )}
          
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-colors"
              aria-label="Pause video"
            >
              <Pause size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
