'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AuthTopHeader() {
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
      <div className="flex items-center gap-1 sm:gap-2 min-w-0">
        <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm flex-shrink-0">
          V
        </div>
        <span className="font-bold text-foreground text-sm sm:text-base truncate">V-BENCH</span>
        <span className="text-muted-foreground text-xs hidden sm:inline">/ v2.2</span>
      </div>

      <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
          Trang chủ
        </a>
        <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
          Giới thiệu
        </a>
        <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
          Bảng xếp hạng
        </a>
        <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
          Dataset
        </a>
        <a href="#" className="hover:text-foreground transition-colors whitespace-nowrap">
          Nộp bài
        </a>
      </nav>

      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
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
      </div>
    </header>
  );
}
