import React, { useState } from 'react';
import { VideoCard } from '../components/home/VideoCard';
import { ShortsPreview } from '../components/home/ShortsPreview';
import { CategoryFilter } from '../components/categories/CategoryFilter';
import { VideoEmbed } from '../components/video/VideoEmbed';
import { MOCK_VIDEOS } from '../data/mockVideos';
import { MOCK_SHORTS } from '../data/mockShorts';
import type { Video, Short } from '../types';

export function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredVideos = selectedCategories.length === 0
    ? MOCK_VIDEOS
    : MOCK_VIDEOS.filter(video =>
        video.categories.some(cat => selectedCategories.includes(cat))
      );

  const filteredShorts = selectedCategories.length === 0
    ? MOCK_SHORTS
    : MOCK_SHORTS.filter(short =>
        short.categories.some(cat => selectedCategories.includes(cat))
      );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <CategoryFilter
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
      />

      <section>
        <h1 className="text-2xl font-bold mb-4 text-white">Featured Video</h1>
        <VideoEmbed 
          videoId="0D9xvS2ptUA"
          title="YouTube video player"
          className="mb-8"
        />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Recommended</h2>
        <div className="space-y-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section>
        <ShortsPreview shorts={filteredShorts} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Latest Updates</h2>
        <div className="space-y-6">
          {filteredVideos.map((video) => (
            <VideoCard key={`latest-${video.id}`} video={video} />
          ))}
        </div>
      </section>
    </div>
  );
}