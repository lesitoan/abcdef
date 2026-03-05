'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, FileText, Upload, Trophy, ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SIDEBAR_MIN_WIDTH = 200;
const SIDEBAR_MAX_WIDTH = 400;
const SIDEBAR_STORAGE_KEY = 'sidebar-width';

export default function ResizableSidebar({ isCollapsed, onToggleCollapse }: { isCollapsed: boolean; onToggleCollapse: () => void }) {
  const pathname = usePathname();
  const [width, setWidth] = useState(208); // w-52 = 208px
  const [isDragging, setIsDragging] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Load saved width from localStorage on mount
  useEffect(() => {
    const savedWidth = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (savedWidth) {
      setWidth(Math.max(SIDEBAR_MIN_WIDTH, Math.min(parseInt(savedWidth), SIDEBAR_MAX_WIDTH)));
    }
  }, []);

  // Handle mouse move for dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newWidth = e.clientX;
      if (newWidth >= SIDEBAR_MIN_WIDTH && newWidth <= SIDEBAR_MAX_WIDTH) {
        setWidth(newWidth);
        localStorage.setItem(SIDEBAR_STORAGE_KEY, newWidth.toString());
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const menuItems = [
    { path: '/submits', icon: Mail, label: 'Tất cả Submissions', count: 47 },
    { path: '/forms', icon: FileText, label: 'Private Test Forms', count: 18 },
    { path: '/tests', icon: Upload, label: 'Upload Điểm', count: 3 },
    { path: '/leaderboard', icon: Trophy, label: 'Duyệt Leaderboard', count: 0 },
  ];

  if (isCollapsed) {
    return (
      <div className="w-20 h-full bg-sidebar border-r border-sidebar-border overflow-hidden flex flex-col items-center py-4 gap-2">
        {/* Toggle expand button */}
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
          title="Expand sidebar"
        >
          <ChevronLeft className="w-5 h-5 text-sidebar-foreground rotate-180" />
        </button>

        {/* Icons only */}
        <nav className="flex flex-col gap-2 w-full items-center">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`p-3 rounded-lg transition-colors ${isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div
      ref={sidebarRef}
      className="h-full bg-sidebar border-r border-sidebar-border overflow-hidden flex flex-col relative group"
      style={{ width: `${width}px` }}
    >
      <div className="flex-1 overflow-y-auto p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-xs font-bold text-sidebar-foreground uppercase tracking-wider">
            ADMIN PANEL
          </h3>
          <button
            onClick={onToggleCollapse}
            className="p-1 hover:bg-sidebar-accent rounded transition-colors flex-shrink-0"
            title="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4 text-sidebar-foreground" />
          </button>
        </div>

        <nav className="space-y-1 sm:space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm ${isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium truncate">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className={`text-xs font-bold rounded-full px-2 py-1 flex-shrink-0 ml-1 ${isActive
                      ? 'bg-sidebar-accent-foreground text-sidebar-accent'
                      : 'bg-accent text-accent-foreground'
                    }`}>
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Resize handle */}
      <div
        onMouseDown={() => setIsDragging(true)}
        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
        title="Drag to resize sidebar"
      />
    </div>
  );
}
