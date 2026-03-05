# Developer Quick Reference - Reusable Table Component

## Quick Start: Creating a New Table Page

### 1. Create Screen Folder Structure
```bash
src/screens/myScreen/
├── index.tsx
└── components/
    ├── PageHeader.tsx
    ├── MyTable.tsx
    └── (optional) DetailView.tsx
```

### 2. Define Your Data Type
```typescript
// src/screens/myScreen/components/MyTable.tsx
interface MyData {
  id: string;
  email: string;
  name: string;
  status: string;
  createdAt: string;
}

const mockData: MyData[] = [
  {
    id: '#1',
    email: 'user@example.com',
    name: 'John Doe',
    status: 'Active',
    createdAt: '01/03/2026',
  },
  // ... more data
];
```

### 3. Define Columns with Configurations
```typescript
import { ColumnDef } from '@/lib/types/table';

const columns: ColumnDef<MyData>[] = [
  {
    key: 'id',
    label: 'ID',
    align: 'left',
    width: '80px',
  },
  {
    key: 'email',
    label: 'EMAIL',
    align: 'left',
  },
  {
    key: 'name',
    label: 'NAME',
    align: 'left',
  },
  {
    key: 'status',
    label: 'STATUS',
    align: 'left',
    render: (value) => {
      const colors = {
        'Active': 'bg-accent',
        'Inactive': 'bg-gray-300',
      };
      return (
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${colors[value] || 'bg-gray-300'}`}></span>
          <span>{value}</span>
        </div>
      );
    },
  },
  {
    key: 'createdAt',
    label: 'CREATED',
    align: 'left',
    hidden: { mobile: true }, // Hide on mobile
  },
  {
    key: 'id',
    label: 'ACTIONS',
    align: 'left',
    render: (_, row) => (
      <Button size="sm" variant="ghost">
        View
      </Button>
    ),
  },
];
```

### 4. Create Table Component
```typescript
import DataTable from '@/components/ui/data-table';

export default function MyTable() {
  return (
    <DataTable<MyData>
      columns={columns}
      data={mockData}
      rowId="id"
    />
  );
}
```

### 5. Create Screen Index
```typescript
// src/screens/myScreen/index.tsx
import PageHeader from './components/PageHeader';
import MyTable from './components/MyTable';
import FilterSection from '@/screens/submitsScreen/components/FilterSection';

export const metadata = {
  title: 'V-BENCH - My Page Title',
  description: 'My page description',
};

export default function MyScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 p-3 sm:p-6 w-full">
      <PageHeader />
      <FilterSection />
      <MyTable />
    </div>
  );
}
```

### 6. Create Page Route
```typescript
// src/app/my-page/page.tsx
import MyScreen from '@/screens/myScreen';

function MyPage() {
  return <MyScreen />;
}

export default MyPage;
```

### 7. Update Sidebar Navigation
```typescript
// src/components/layout/AdminSidebar.tsx
const menuItems = [
  // ... existing items
  { path: '/my-page', icon: YourIcon, label: 'My Page Label', count: 0 },
];
```

## Column Definition API

### ColumnDef<T> Options

```typescript
interface ColumnDef<T> {
  // Required
  key: keyof T;                    // Must match property in T
  label: string;                   // Column header text
  
  // Optional
  render?: (value, row, index) => ReactNode;  // Custom cell renderer
  align?: 'left' | 'center' | 'right';        // Text alignment
  hidden?: {
    mobile?: boolean;              // Hide on mobile
    desktop?: boolean;             // Hide on desktop
  };
  width?: string;                  // CSS width (e.g., '100px')
}
```

### Common Patterns

#### Status Badge
```typescript
{
  key: 'status',
  label: 'STATUS',
  render: (value) => (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent"></span>
      <span>{value}</span>
    </div>
  ),
}
```

#### Colored Text
```typescript
{
  key: 'score',
  label: 'SCORE',
  render: (value) => (
    <span className="font-semibold text-orange-600">{value}</span>
  ),
}
```

#### Action Buttons
```typescript
{
  key: 'id',
  label: 'ACTIONS',
  render: (_, row) => (
    <div className="flex gap-2">
      <Button size="sm" onClick={() => handleEdit(row)}>
        Edit
      </Button>
      <Button size="sm" variant="outline" onClick={() => handleDelete(row)}>
        Delete
      </Button>
    </div>
  ),
}
```

#### Link
```typescript
{
  key: 'email',
  label: 'EMAIL',
  render: (value) => (
    <a href={`mailto:${value}`} className="text-accent hover:underline">
      {value}
    </a>
  ),
}
```

#### Badge/Tag
```typescript
{
  key: 'type',
  label: 'TYPE',
  render: (value) => (
    <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-accent/20 text-accent border border-accent/30">
      {value}
    </span>
  ),
}
```

## DataTable Props

```typescript
interface DataTableProps<T> {
  columns: ColumnDef<T>[];           // Column definitions (required)
  data: T[];                         // Data rows (required)
  rowId?: keyof T;                   // Which property is unique ID
  variant?: 'default' | 'striped';   // Table variant (default: 'default')
  onRowClick?: (row: T, index: number) => void;  // Row click handler
}
```

## Common Use Cases

### 1. Detail View on Click
```typescript
const [selectedRow, setSelectedRow] = useState<MyData | null>(null);

if (selectedRow) {
  return <DetailView row={selectedRow} onClose={() => setSelectedRow(null)} />;
}

return (
  <DataTable
    columns={columns}
    data={data}
    rowId="id"
    onRowClick={(row) => setSelectedRow(row)}
  />
);
```

### 2. Conditional Rendering in Column
```typescript
{
  key: 'status',
  label: 'ACTIONS',
  render: (value, row) => {
    if (value === 'pending') {
      return <Button>Approve</Button>;
    }
    return <Button variant="ghost">View</Button>;
  },
}
```

### 3. Multiple Action Buttons
```typescript
{
  key: 'id',
  label: 'ACTIONS',
  render: (_, row) => {
    if (row.status === 'pending') {
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1"
          >
            <Check className="w-3 h-3" />
            Approve
          </Button>
          <Button size="sm" variant="outline">
            ✕
          </Button>
        </div>
      );
    }
    return <Button size="sm" variant="outline">Revoke</Button>;
  },
}
```

## Best Practices

1. **Type Safety First**
   - Always define your data interface first
   - Use `keyof T` to ensure columns match data

2. **Column Order Matters**
   - Order columns array in the order you want them to appear
   - Last column is often actions

3. **Mobile Responsiveness**
   - Use `hidden: { mobile: true }` for columns that don't fit
   - Keep at least 2-3 columns visible on mobile

4. **Custom Renderers**
   - Keep renderers simple
   - Don't do heavy computations in render functions
   - Use memoization if needed for performance

5. **Accessibility**
   - Add meaningful column labels
   - Use semantic HTML in custom renderers
   - Include aria labels where appropriate

6. **Performance**
   - For large datasets, consider pagination
   - Use rowId for efficient React key handling
   - Memoize custom renderers if data is large

## Troubleshooting

### Table Not Showing
- Check that `columns` array is not empty
- Verify `data` array has items
- Check browser console for TypeScript errors

### Custom Renderer Not Working
- Ensure renderer function returns valid JSX/ReactNode
- Check that `key` property exists in data

### Mobile View Issues
- Use `hidden: { mobile: true }` for wide columns
- Test with responsive design mode in browser
- Ensure cards are readable on small screens

### Type Errors
- Verify `key` property matches a property in `T`
- Check that `rowId` (if used) matches a property in `T`
- Ensure column definition properties are spelled correctly

## Examples Reference

- **Submissions Table:** `src/screens/submitsScreen/components/SubmissionsTable.tsx`
- **Forms Table:** `src/screens/formsScreen/components/FormsTable.tsx`
- **Tests Table:** `src/screens/testsScreen/components/TestsTable.tsx`
- **Leaderboard Table:** `src/screens/leaderboardScreen/components/LeaderboardTable.tsx`

Copy and adapt these as templates for new tables!
