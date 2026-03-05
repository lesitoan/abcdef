'use client';

import { HEADER_ITEMS } from '@/constants/header';
import { Menu, Sun, Moon, User, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TopHeader({
  onMenuClick,
  onDesktopToggle,
  desktopSidebarCollapsed,
}: {
  onMenuClick: () => void;
  onDesktopToggle: () => void;
  desktopSidebarCollapsed: boolean;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <header className="border-b border-border bg-card h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 gap-2 sm:gap-4">
      
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0 md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1 sm:gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
            V
          </div>

          <span className="font-bold text-foreground text-sm sm:text-base truncate">
            V-BENCH
          </span>

          <span className="text-muted-foreground text-xs hidden sm:inline">
            / v2.2
          </span>
        </div>
      </div>

      {/* NAV */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm text-muted-foreground">
        {HEADER_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-foreground transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* RIGHT */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">

        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-4 sm:w-5 h-4 sm:h-5" />
          ) : (
            <Sun className="w-4 sm:w-5 h-4 sm:h-5" />
          )}
        </button>

        <span className="text-xs font-medium text-accent hidden sm:inline">
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>

        <span className="text-xs font-medium text-destructive ml-1 sm:ml-2 hidden sm:inline">
          Admin
        </span>

        <button
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="User profile"
        >
          <User className="w-4 sm:w-5 h-4 sm:h-5" />
        </button>
      </div>
    </header>
  );
}