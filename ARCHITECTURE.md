# Reusable Table Architecture - Component Hierarchy

## System Architecture

```
App Layout (AppLayout)
├── Sidebar Navigation (AdminSidebar with routing)
│   ├── Link to /submits
│   ├── Link to /forms
│   ├── Link to /tests
│   └── Link to /leaderboard
│
└── Page Content
    ├── SubmitsScreen (Page: /submits)
    │   ├── PageHeader
    │   ├── StatsCards
    │   ├── FilterSection
    │   └── SubmissionsTable
    │       └── DataTable<Submission> ✓ Uses generic component
    │
    ├── FormsScreen (Page: /forms)
    │   ├── PageHeader
    │   ├── FilterSection
    │   └── FormsTable
    │       ├── DataTable<ContactForm> ✓ Uses generic component
    │       └── FormDetail (detail view when selected)
    │
    ├── TestsScreen (Page: /tests)
    │   ├── PageHeader
    │   ├── Alert Banner
    │   ├── FilterSection
    │   └── TestsTable
    │       └── DataTable<TestSubmission> ✓ Uses generic component
    │
    └── LeaderboardScreen (Page: /leaderboard)
        ├── PageHeader
        ├── FilterSection
        └── LeaderboardTable
            └── DataTable<LeaderboardEntry> ✓ Uses generic component
```

## Component Reusability Matrix

| Component | Used By | Purpose |
|-----------|---------|---------|
| DataTable | All Screens | Generic table renderer with column configs |
| PageHeader | All Screens | Title + description per screen |
| FilterSection | All Screens except Detail | Search & filter UI |
| StatusBadge | Submissions, Leaderboard | Type/status badges |

## Data Flow

```
ColumnDef[] Configuration
    ↓
DataTable Component
    ├── Desktop Rendering: HTML Table
    └── Mobile Rendering: Card Layout

Custom Renderers
    ↓
Cell Customization
    ├── Status indicators (colored dots)
    ├── Action buttons
    └── Type badges
```

## Type Safety Flow

```
Data Type: T
    ↓
ColumnDef<T> enforces:
    ├── key: keyof T (must match data property)
    ├── render?: (value, row) => ReactNode
    └── Type checking at compile time

Result: 
    ✓ No runtime errors from mismatched columns
    ✓ IDE autocomplete for column definitions
    ✓ Type-safe custom renderers
```

## Code Reduction Example

### Before (SubmissionsTable - Old Way)
```typescript
// Hardcoded table markup: ~190 lines
<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      {/* 6 more headers... */}
    </tr>
  </thead>
  <tbody>
    {submissions.map(submission => (
      <tr>
        {/* 8 hardcoded <td> cells... */}
      </tr>
    ))}
  </tbody>
</table>

{/* Mobile card markup: ~90 lines */}
<div className="md:hidden">
  {submissions.map(submission => (
    <div>
      {/* Manually duplicate all data... */}
    </div>
  ))}
</div>
```

### After (Using DataTable - New Way)
```typescript
// Column configuration: ~30 lines
const columns: ColumnDef<Submission>[] = [
  { key: 'id', label: 'ID', render: (v) => <span className="text-accent">{v}</span> },
  { key: 'type', label: 'Loại', render: (v) => <StatusBadge type={v} /> },
  // ... more columns
];

// One line of JSX
<DataTable<Submission> columns={columns} data={submissions} rowId="id" />
```

**Result: 70% less code, same functionality, mobile-responsive included!**

## Extensibility

### Adding a New Column
```typescript
// Easy - just add to columns array
const columns: ColumnDef<Data>[] = [
  // ... existing columns
  {
    key: 'newField',
    label: 'New Column',
    render: (value) => <CustomComponent value={value} />,
    hidden: { mobile: true }, // Optional: hide on mobile
  },
];
```

### Adding Custom Row Styling
```typescript
// DataTable supports onRowClick for interactions
<DataTable
  columns={columns}
  data={data}
  onRowClick={(row, index) => {
    // Handle row click
  }}
/>
```

### Creating New Table
```typescript
// 1. Create new interface
interface NewData { /* ... */ }

// 2. Define columns
const columns: ColumnDef<NewData>[] = [/* ... */];

// 3. Use DataTable
<DataTable<NewData> columns={columns} data={data} rowId="id" />

// That's it!
```

## Responsive Behavior

### Desktop (md: breakpoint)
```
┌─────┬──────────┬─────────┐
│ ID  │ Name     │ Actions │
├─────┼──────────┼─────────┤
│ #1  │ Test 1   │ [Button]│
│ #2  │ Test 2   │ [Button]│
└─────┴──────────┴─────────┘
```

### Mobile (< md: breakpoint)
```
┌──────────────────────────┐
│ ID: #1                   │
│ Name: Test 1             │
│ Actions: [Button]        │
└──────────────────────────┘

┌──────────────────────────┐
│ ID: #2                   │
│ Name: Test 2             │
│ Actions: [Button]        │
└──────────────────────────┘
```

Both views use the same data and column configuration!

## Performance Optimization

1. **Single Render Logic**: One component handles both desktop/mobile
2. **No Duplication**: Mobile and desktop views share column config
3. **Type Safety**: Compile-time checking prevents runtime errors
4. **Component Reuse**: DataTable used by 4 different screens

## Maintenance Benefits

| Change | Old Way | New Way |
|--------|---------|---------|
| Update table styling | 4 places (each table) | 1 place (DataTable.tsx) |
| Add new column | Hardcode in table markup | Add to column config |
| Add mobile view | Duplicate all HTML | Already included |
| Fix responsive bug | Fix in 4 tables | Fix in DataTable |
| Add new table | Copy-paste 200 lines | Create 10-line config |

## Security Considerations

1. **XSS Prevention**: All values are React-escaped by default
2. **Custom Renderers**: Developers can add renderers, but React handles sanitization
3. **Type Safety**: Reduces accidental data access errors
4. **Server Components**: Parent screens can use metadata for SEO

## Future Scalability

This architecture supports:
- ✓ Sorting by clicking column headers
- ✓ Filtering with column-specific filters
- ✓ Pagination
- ✓ Bulk actions (checkboxes)
- ✓ Row expansion/details views
- ✓ Export to CSV/Excel
- ✓ Infinite scroll
- ✓ Virtual scrolling for large datasets

All without changing the core DataTable component!
