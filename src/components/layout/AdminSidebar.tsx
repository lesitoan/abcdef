'use client';

import { Mail, FileText, Upload, Trophy } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { path: '/submits', icon: Mail, label: 'Tất cả Submissions', count: 47 },
    { path: '/forms', icon: FileText, label: 'Private Test Forms', count: 18 },
    { path: '/tests', icon: Upload, label: 'Upload Điểm', count: 3 },
    { path: '/leaderboard', icon: Trophy, label: 'Duyệt Leaderboard', count: 0 },
  ];

  return (
    <aside className="w-52 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-3 sm:p-4">
        <h3 className="text-xs font-bold text-sidebar-foreground uppercase tracking-wider mb-3 sm:mb-4">
          ADMIN PANEL
        </h3>
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
    </aside>
  );
}
