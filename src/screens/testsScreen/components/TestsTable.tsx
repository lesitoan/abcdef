'use client';

import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@/lib/types/table';

interface TestSubmission {
  id: string;
  modelName: string;
  email: string;
  date: string;
  status: string;
}

const testData: TestSubmission[] = [
  {
    id: '#PT-047',
    modelName: 'Vintern-3B-VIQA',
    email: 'lab@vinai.io',
    date: '02/03/2026',
    status: 'Chờ upload điểm',
  },
  {
    id: '#PT-044',
    modelName: 'PhoGPT-7B-v2',
    email: 'vbench@vinuni.edu.vn',
    date: '15/02/2026',
    status: 'Chờ upload điểm',
  },
];

export default function TestsTable() {
  const columns: ColumnDef<TestSubmission>[] = [
    {
      key: 'id',
      label: 'ID',
      align: 'left',
      width: '80px',
    },
    {
      key: 'modelName',
      label: 'BỘ HÌNH',
      align: 'left',
    },
    {
      key: 'email',
      label: 'NGƯỜI DÙNG',
      align: 'left',
    },
    {
      key: 'date',
      label: 'NGÀY GỞI',
      align: 'left',
    },
    {
      key: 'status',
      label: 'TRẠNG THÁI',
      align: 'left',
      render: (value) => (
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="text-foreground">{value}</span>
        </div>
      ),
    },
    {
      key: 'id',
      label: 'HÀNH ĐỘNG',
      align: 'left',
      render: () => (
        <Button
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Upload điểm
        </Button>
      ),
    },
  ];

  return <DataTable<TestSubmission> columns={columns} data={testData} rowId="id" />;
}
