'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FilterDropdown, type FilterOption } from '@/components/ui/filter-dropdown';

const typeOptions: FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Public Test', value: 'public' },
  { label: 'Private Test', value: 'private' },
];

const statusOptions: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Hoàn thành', value: 'completed' },
  { label: 'Đang chờ', value: 'pending' },
  { label: 'Đang đánh giá', value: 'evaluating' },
];

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
          options={typeOptions}
          selectedValue={selectedType}
          onSelect={setSelectedType}
        />

        <FilterDropdown
          label="Tất cả trạng thái"
          options={statusOptions}
          selectedValue={selectedStatus}
          onSelect={setSelectedStatus}
        />
      </div>
    </div>
  );
}
