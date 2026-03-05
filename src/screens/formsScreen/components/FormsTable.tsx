'use client';

import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@/lib/types/table';
import { useState } from 'react';
import FormDetail from './FormDetail';
import { ContactForm, MOCK_FORM_DATA } from '../constants';

export default function FormsTable() {
  const [selectedForm, setSelectedForm] = useState<ContactForm | null>(null);

  const columns: ColumnDef<ContactForm>[] = [
    {
      key: 'id',
      label: 'ID',
      align: 'left',
      width: '80px',
    },
    {
      key: 'email',
      label: 'NGƯỜI DÙNG',
      align: 'left',
    },
    {
      key: 'modelName',
      label: 'BỘ HÌNH',
      align: 'left',
    },
    {
      key: 'parameters',
      label: 'PARAMETERS',
      align: 'left',
    },
    {
      key: 'status',
      label: 'TRẠNG THÁI',
      align: 'left',
      render: (value) => {
        let dotColor = 'bg-orange-500';
        if (value.includes('Chờ Supporter')) {
          dotColor = 'bg-orange-500';
        } else if (value.includes('đang đánh giá')) {
          dotColor = 'bg-blue-500';
        } else if (value.includes('upload')) {
          dotColor = 'bg-accent';
        }
        return (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
            <span className="text-foreground">{value}</span>
          </div>
        );
      },
    },
    {
      key: 'date',
      label: 'NGÀY GỞI',
      align: 'left',
      hidden: { mobile: true },
    },
    {
      key: 'id',
      label: 'HÀNH ĐỘNG',
      align: 'left',
      render: (_, row) => (
        <Button
          size="sm"
          variant="ghost"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedForm(row);
          }}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  if (selectedForm) {
    return <FormDetail form={selectedForm} onClose={() => setSelectedForm(null)} />;
  }

  return <DataTable<ContactForm> columns={columns} data={MOCK_FORM_DATA} rowId="id" />;
}
