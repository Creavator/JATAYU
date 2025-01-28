import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, User } from 'lucide-react';
import { CommentSection } from '../comments/CommentSection';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function VideoEmbed({ videoId, title, className = '' }: VideoEmbedProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className={`relative w-full pt-[56.25%] ${className}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-400" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              {title}
            </h3>
            <div className="text-sm text-gray-400">
              Digital Rights Initiative • 10K views
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Heart className="w-5 h-5" />
            <span>4.2K</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <MessageCircle className="w-5 h-5" />
            <span>256</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-400 hover:text-white">
            <Bookmark className="w-5 h-5" />
            <span>Save</span>
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            <span className="font-semibold text-white">Description:</span>
            <p className="mt-1">
              Learn about digital rights and privacy in this comprehensive guide. Join us in understanding how to protect your online presence and advocate for digital freedom.
            </p>
          </div>
        </div>

        <CommentSection />
      </div>
    </div>
  );
}