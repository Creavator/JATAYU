import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12">
        <img 
          src="C:/Users/Shivanshu/OneDrive/Desktop/APP/project/src/utils/bird.png" 
          alt="Bird Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-2xl font-bold tracking-wider text-white">Jatayu</span>
    </div>
  );
}
