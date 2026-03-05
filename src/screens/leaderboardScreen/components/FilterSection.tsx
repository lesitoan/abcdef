'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FilterDropdown } from '@/components/ui/filter-dropdown';
import { LEADERBOARD_OPTIONS, STATUS_OPTIONS } from '../constants';

export default function FilterSection() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Tìm kiếm..."
          className="pl-12 h-10 text-sm bg-background border-border hover:border-border/70 focus:border-accent transition-colors w-full"
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-3 flex-col sm:flex-row md:flex-row">
        <FilterDropdown
          label="Tất cả loại"
          options={LEADERBOARD_OPTIONS}
          selectedValue={selectedType}
          onSelect={setSelectedType}
        />

        <FilterDropdown
          label="Tất cả trạng thái"
          options={STATUS_OPTIONS}
          selectedValue={selectedStatus}
          onSelect={setSelectedStatus}
        />
      </div>
    </div>
  );
}
