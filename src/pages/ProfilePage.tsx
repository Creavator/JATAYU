import React, { useState } from 'react';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileStats } from '../components/profile/ProfileStats';
import { ProfileTabs } from '../components/profile/ProfileTabs';
import { ProfilePosts } from '../components/profile/ProfilePosts';
import { ProfileProtests } from '../components/profile/ProfileProtests';
import { ProfileRedeem } from '../components/profile/ProfileRedeem';
import { CreateVideoPost } from '../components/video/CreateVideoPost';
import { CreateProtestForm } from '../components/protest/CreateProtestForm';
import { CommentSection } from '../components/comments/CommentSection';

const MOCK_USER = {
  id: '1',
  username: 'citizen.one',
  fullName: 'Active Citizen',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
  followers: 1520,
  following: 890,
  isVerified: true,
  socialCreditScore: 92,
  tokens: 2500,
  protestsParticipated: 8,
  bio: 'Dedicated to making our community better | Digital Rights Activist',
  location: 'New Delhi, India'
};

const TABS = [
  { id: 'posts', label: 'Posts' },
  { id: 'videos', label: 'Videos' },
  { id: 'protests', label: 'Protests' },
  { id: 'redeem', label: 'Redeem' }
] as const;

type Tab = typeof TABS[number]['id'];

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>('posts');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-custom-blue rounded-lg p-6 mb-6">
        <ProfileHeader user={MOCK_USER} />
        <ProfileStats user={MOCK_USER} />
      </div>

      <div className="bg-gray-900 rounded-lg">
        <ProfileTabs 
          tabs={TABS} 
          activeTab={activeTab} 
          onTabChange={(id) => setActiveTab(id as Tab)} 
        />
        
        <div className="p-6">
          {activeTab === 'posts' && (
            <div className="space-y-6">
              <ProfilePosts />
              <CommentSection />
            </div>
          )}
          {activeTab === 'videos' && <CreateVideoPost />}
          {activeTab === 'protests' && (
            <div className="space-y-6">
              <CreateProtestForm />
              <ProfileProtests />
            </div>
          )}
          {activeTab === 'redeem' && <ProfileRedeem />}
        </div>
      </div>
    </div>
  );
}