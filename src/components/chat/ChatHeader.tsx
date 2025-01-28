import React from 'react';
import { EagleLogo } from '../common/icons/EagleLogo';

export function ChatHeader() {
  return (
    <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <EagleLogo className="w-8 h-8 text-gray-900" />
        <h1 className="text-xl font-bold text-gray-900">Discussions</h1>
      </div>
    </div>
  );
}