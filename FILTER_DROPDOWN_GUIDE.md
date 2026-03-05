# FilterDropdown Component Guide

A reusable, composable dropdown filter component for the V-BENCH admin panel.

## Overview

The `FilterDropdown` component provides a flexible, accessible dropdown for filtering table data. It handles:
- Multiple selectable options
- State management
- Click-outside detection
- Keyboard accessibility
- Custom styling

## Component API

### FilterDropdown Props

```typescript
interface FilterDropdownProps {
  label: string;           // Button label (displays selected option or default)
  options: FilterOption[]; // Array of { label, value } options
  selectedValue?: string;  // Currently selected option value
  onSelect?: (value: string) => void; // Callback when option selected
  className?: string;      // Optional wrapper className
  placeholder?: string;    // Optional placeholder text
}

interface FilterOption {
  label: string;  // Display text
  value: string;  // Internal value
}
```

## Basic Usage

```tsx
import { FilterDropdown, type FilterOption } from '@/components/ui/filter-dropdown';
import { useState } from 'react';

export default function MyComponent() {
  const [selected, setSelected] = useState('all');

  const options: FilterOption[] = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Hoàn thành', value: 'completed' },
    { label: 'Đang chờ', value: 'pending' },
  ];

  return (
    <FilterDropdown
      label="Tất cả trạng thái"
      options={options}
      selectedValue={selected}
      onSelect={setSelected}
    />
  );
}
```

## Integration Pattern

Each screen (Submits, Tests, Forms, Leaderboard) has its own `FilterSection` component that wraps the `FilterDropdown`:

```tsx
// src/screens/testsScreen/components/FilterSection.tsx
import { FilterDropdown, type FilterOption } from '@/components/ui/filter-dropdown';

const typeOptions: FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Public Test', value: 'public' },
  { label: 'Private Test', value: 'private' },
];

export default function FilterSection() {
  const [selectedType, setSelectedType] = useState('all');

  return (
    <div className="flex gap-3">
      <FilterDropdown
        label="Tất cả loại"
        options={typeOptions}
        selectedValue={selectedType}
        onSelect={setSelectedType}
      />
    </div>
  );
}
```

## Features

### 1. **Click-Outside Detection**
Automatically closes the dropdown when clicking outside:
```tsx
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }
  // ...
}, [isOpen]);
```

### 2. **Visual Feedback**
- Rotating chevron icon on open/close
- Hover states on options
- Selected option highlighting
- Accessible aria attributes

### 3. **Responsive Design**
Works on mobile and desktop without additional configuration.

## Creating a New Filter Section

To add filters to a new page:

1. Create `src/screens/yourScreen/components/FilterSection.tsx`:

```tsx
'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FilterDropdown, type FilterOption } from '@/components/ui/filter-dropdown';

const statusOptions: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
];

export default function FilterSection() {
  const [selectedStatus, setSelectedStatus] = useState('all');

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
      <FilterDropdown
        label="Tất cả trạng thái"
        options={statusOptions}
        selectedValue={selectedStatus}
        onSelect={setSelectedStatus}
      />
    </div>
  );
}
```

2. Import in your screen component:

```tsx
import FilterSection from './components/FilterSection';

export default function YourScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6">
      <FilterSection />
      {/* Rest of screen */}
    </div>
  );
}
```

## Styling

The component uses design tokens and follows the project's design system:
- Border: `border-border`
- Background: `bg-background`
- Accent: `bg-accent text-accent-foreground`
- Hover: `hover:border-border/70`
- Focus: Focus ring with `ring-ring/50`

All styles are in the component and don't require additional CSS.

## Best Practices

1. **Option Values**: Use semantic, lowercase values:
   ```tsx
   { label: 'Hoàn thành', value: 'completed' } ✓
   { label: 'Completed', value: 'HAS_COMPLETED' } ✗
   ```

2. **Default Selection**: Always include an "all" or "all statuses" option:
   ```tsx
   const options = [
     { label: 'Tất cả loại', value: 'all' },  // Always first
     { label: 'Type 1', value: 'type1' },
     { label: 'Type 2', value: 'type2' },
   ];
   ```

3. **State Management**: Use separate state for each dropdown:
   ```tsx
   const [selectedType, setSelectedType] = useState('all');
   const [selectedStatus, setSelectedStatus] = useState('all');
   // Not: const [filters, setFilters] = useState({}) - harder to track
   ```

4. **Accessibility**: The component includes:
   - `aria-expanded` for screen readers
   - `aria-label` for button
   - Semantic HTML with `<button>`
   - Full keyboard navigation support

## Existing FilterSection Implementations

All four main screens use the FilterDropdown:

- **Submits Screen**: Type (completed/pending) + Status (waiting/published/evaluating)
- **Tests Screen**: Type (public/private) + Status (completed/pending/evaluating)
- **Forms Screen**: Type (public/private) + Status (pending/completed/published)
- **Leaderboard Screen**: Leaderboard type (public/private) + Status (pending/active/hidden)

Each can be customized independently without affecting others.
