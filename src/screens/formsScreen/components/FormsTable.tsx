'use client';

import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@/lib/types/table';
import { useState } from 'react';
import FormDetail from './FormDetail';

interface ContactForm {
  id: string;
  email: string;
  modelName: string;
  parameters: string;
  status: string;
  date: string;
}

const formsData: ContactForm[] = [
  {
    id: '#PT-048',
    email: 'nguyen.b@vinuni.edu.vn',
    modelName: 'VinLLaMA-13B-Instruct',
    parameters: '13B',
    status: 'Chờ Supporter liên hệ',
    date: '04/03/2026',
  },
  {
    id: '#PT-047',
    email: 'lab@vinai.io',
    modelName: 'Vintern-3B-VIQA',
    parameters: '3B',
    status: 'VinUni đang đánh giá',
    date: '02/03/2026',
  },
  {
    id: '#PT-046',
    email: 'nmt@hust.edu.vn',
    modelName: 'HUST-LLM-7B',
    parameters: '7B',
    status: 'Điểm đã upload',
    date: '28/02/2026',
  },
];

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

  return <DataTable<ContactForm> columns={columns} data={formsData} rowId="id" />;
}
