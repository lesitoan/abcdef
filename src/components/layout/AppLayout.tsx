'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TopHeader from './TopHeader';
import ResizableSidebar from './ResizableSidebar';

const SIDEBAR_COLLAPSED_KEY = 'sidebar-collapsed';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
    if (saved) {
      setDesktopSidebarCollapsed(JSON.parse(saved));
    }
  }, []);

  if (pathname === '/login') {
    return <>{children}</>;
  }

  const toggleDesktopSidebar = () => {
    const newState = !desktopSidebarCollapsed;
    setDesktopSidebarCollapsed(newState);
    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, JSON.stringify(newState));
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <TopHeader 
        onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        onDesktopToggle={toggleDesktopSidebar}
        desktopSidebarCollapsed={desktopSidebarCollapsed}
      />
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile sidebar - full height on mobile */}
        {mobileMenuOpen && (
          <div className="fixed top-16 left-0 right-0 bottom-0 z-40 md:hidden">
            <ResizableSidebar 
              isCollapsed={false} 
              onToggleCollapse={() => setMobileMenuOpen(false)} 
            />
          </div>
        )}

        {/* Desktop sidebar - always visible, resizable and collapsible */}
        <div className="hidden md:flex">
          <ResizableSidebar 
            isCollapsed={desktopSidebarCollapsed}
            onToggleCollapse={toggleDesktopSidebar}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
