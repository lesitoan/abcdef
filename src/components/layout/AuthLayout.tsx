'use client';

import { useState } from 'react';
import AuthTopHeader from './AuthTopHeader';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-background">
      <AuthTopHeader />
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
}
