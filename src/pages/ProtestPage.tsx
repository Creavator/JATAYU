import React from 'react';
import { ProtestCard } from '../components/protest/ProtestCard';

const MOCK_PROTESTS = [
  {
    id: '1',
    title: 'Digital Rights March',
    description: 'Join us in our peaceful protest for digital privacy rights and data protection. Together we can make a difference!',
    location: 'New Delhi, India',
    date: '2024-04-15',
    participants: 1200,
    status: 'upcoming' as const,
    videoUrl: '/mock-protest-1.mp4',
    likes: 2500,
    comments: 342,
    dailyUpdates: [
      {
        date: '2024-03-20',
        content: 'Permit applications submitted. Planning committee formed.'
      },
      {
        date: '2024-03-19',
        content: 'Initial route planning completed. Starting volunteer registration.'
      }
    ]
  },
  {
    id: '2',
    title: 'Clean Governance Rally',
    description: 'Standing together for transparency in digital governance. This protest aims to highlight the importance of accountability.',
    location: 'Mumbai, India',
    date: '2024-04-20',
    participants: 800,
    status: 'active' as const,
    videoUrl: '/mock-protest-2.mp4',
    likes: 1800,
    comments: 256,
    dailyUpdates: [
      {
        date: '2024-03-20',
        content: 'Second planning meeting completed. Route confirmed.'
      },
      {
        date: '2024-03-19',
        content: 'First batch of volunteers onboarded.'
      }
    ]
  }
];

export function ProtestPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Digital Protests</h1>
          <p className="text-gray-400">Join and support digital rights movements</p>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
          Organize Protest
        </button>
      </div>

      <div className="space-y-6">
        {MOCK_PROTESTS.map((protest) => (
          <ProtestCard key={protest.id} protest={protest} />
        ))}
      </div>
    </div>
  );
}