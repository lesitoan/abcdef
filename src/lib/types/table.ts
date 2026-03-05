import { ReactNode } from 'react';

export type CellRenderer<T> = (value: any, row: T, rowIndex: number) => ReactNode;

export interface ColumnDef<T> {
  key: keyof T;
  label: string;
  render?: CellRenderer<T>;
  align?: 'left' | 'center' | 'right';
  hidden?: {
    mobile?: boolean;
    desktop?: boolean;
  };
  width?: string;
}

export interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  rowId?: keyof T;
  variant?: 'default' | 'striped';
  onRowClick?: (row: T, rowIndex: number) => void;
}
