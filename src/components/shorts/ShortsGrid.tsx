import React from 'react';
import { ShortVideo } from './ShortVideo';
import type { Short } from '../../types';

interface ShortsGridProps {
  shorts: Short[];
}

export function ShortsGrid({ shorts }: ShortsGridProps) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {shorts.map((short) => (
        <div className="mb-6" key={short.id}> {/* Increased margin bottom */}
          <ShortVideo short={short} />
        </div>
      ))}
      <div className="flex justify-end mt-4"> {/* Align button to the right */}
        <button 
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => {
            // Logic to scroll to the next short
            const nextShort = document.querySelector('.short-video:last-child');
            if (nextShort) {
              nextShort.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          ⬇️
        </button>
      </div>
    </div>
  );
}
