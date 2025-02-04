import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-3 ">
      <div className="w-32 h-32">
        <img 
          src="dist\assets\jatayu_logo.png" 
          alt="Bird Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-2xl font-bold tracking-wider text-white">Jatayu</span>
    </div>
  );
}
