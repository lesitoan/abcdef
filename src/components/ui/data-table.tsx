'use client';

import { DataTableProps, ColumnDef } from '@/lib/types/table';

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  rowId,
  variant = 'default',
  onRowClick,
}: DataTableProps<T>) {
  const getRowKey = (row: T, index: number) => {
    if (rowId && row[rowId]) {
      return String(row[rowId]);
    }
    return index;
  };

  const getColumnValue = (row: T, column: ColumnDef<T>) => {
    return row[column.key];
  };

  const renderCell = (column: ColumnDef<T>, row: T, rowIndex: number) => {
    const value = getColumnValue(row, column);
    if (column.render) {
      return column.render(value, row, rowIndex);
    }
    return value;
  };

  const getAlignClass = (align?: string) => {
    switch (align) {
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {columns
                .filter((col) => !col.hidden?.desktop)
                .map((column) => (
                  <th
                    key={String(column.key)}
                    className={`px-3 sm:px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider ${getAlignClass(column.align)}`}
                    style={column.width ? { width: column.width } : undefined}
                  >
                    {column.label}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={getRowKey(row, rowIndex)}
                className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onRowClick?.(row, rowIndex)}
              >
                {columns
                  .filter((col) => !col.hidden?.desktop)
                  .map((column) => (
                    <td
                      key={`${getRowKey(row, rowIndex)}-${String(column.key)}`}
                      className={`px-3 sm:px-6 py-4 text-sm ${getAlignClass(column.align)}`}
                    >
                      {renderCell(column, row, rowIndex)}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 p-3 sm:p-4">
        {data.map((row, rowIndex) => (
          <div
            key={getRowKey(row, rowIndex)}
            className="border border-border rounded-lg p-3 sm:p-4 bg-background hover:bg-muted/50 transition-colors cursor-pointer"
            onClick={() => onRowClick?.(row, rowIndex)}
          >
            {columns
              .filter((col) => !col.hidden?.mobile)
              .map((column, colIndex) => (
                <div key={`${getRowKey(row, rowIndex)}-${String(column.key)}`} className={colIndex > 0 ? 'mt-2' : ''}>
                  <div className="text-xs text-muted-foreground font-semibold mb-1">{column.label}</div>
                  <div className="text-sm text-foreground">{renderCell(column, row, rowIndex)}</div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
