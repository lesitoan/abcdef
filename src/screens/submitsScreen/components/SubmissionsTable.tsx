'use client';

import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import StatusBadge from './StatusBadge';
import { Check } from 'lucide-react';
import { ColumnDef } from '@/lib/types/table';

interface Submission {
  id: string;
  type: 'Public' | 'Private';
  email: string;
  model: string;
  score: string | undefined;
  status: string;
  date: string;
  action: string;
}

const submissions: Submission[] = [
  {
    id: '#PT-048',
    type: 'Private',
    email: 'nguyen.b@vinuni.edu.vn',
    model: 'VinLLaMA-13B',
    score: undefined,
    status: 'Chờ liên hệ',
    date: '04/03/2026',
    action: 'Xem form',
  },
  {
    id: '#PU-301',
    type: 'Public',
    email: 'user123@gmail.com',
    model: 'Vistral-7B',
    score: '71.9',
    status: 'Hoàn thành',
    date: '04/03/2026',
    action: 'Chi tiết',
  },
  {
    id: '#PT-047',
    type: 'Private',
    email: 'lab@vinai.io',
    model: 'Vintern-38',
    score: undefined,
    status: 'VinUni đang đánh giá',
    date: '02/03/2026',
    action: 'Upload điểm',
  },
  {
    id: '#PU-300',
    type: 'Public',
    email: 'research@vbi.com',
    model: 'VinLLaMA-7B-v2',
    score: '78.4',
    status: 'Đã công bố',
    date: '03/03/2026',
    action: 'Chi tiết',
  },
  {
    id: '#PT-046',
    type: 'Private',
    email: 'nmt@hust.edu.vn',
    model: 'HUST-LLM-7B',
    score: '74.8',
    status: 'Chờ xác nhận LB',
    date: '28/02/2026',
    action: 'Duyệt LB',
  },
];

export default function SubmissionsTable() {
  const columns: ColumnDef<Submission>[] = [
    {
      key: 'id',
      label: 'ID',
      align: 'left',
      width: '80px',
      render: (value) => <span className="font-medium text-accent">{value}</span>,
    },
    {
      key: 'type',
      label: 'LOẠI',
      align: 'left',
      render: (value) => <StatusBadge type={value as 'Public' | 'Private'} />,
    },
    {
      key: 'email',
      label: 'EMAIL',
      align: 'left',
    },
    {
      key: 'model',
      label: 'MÔ HÌNH',
      align: 'left',
    },
    {
      key: 'score',
      label: 'ĐIỂM',
      align: 'left',
      render: (value) => <span className="font-medium text-orange-600">{value || '—'}</span>,
    },
    {
      key: 'status',
      label: 'TRẠNG THÁI',
      align: 'left',
      render: (value) => {
        let dotColor = 'bg-orange-500';
        if (value.includes('Hoàn thành') || value.includes('Đã công bố')) {
          dotColor = 'bg-accent';
        } else if (value.includes('đang đánh giá')) {
          dotColor = 'bg-blue-500';
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
      label: 'NGÀY',
      align: 'left',
      hidden: { mobile: true },
    },
    {
      key: 'action',
      label: 'HÀNH ĐỘNG',
      align: 'left',
      render: (value) => {
        if (value === 'Upload điểm') {
          return (
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {value}
            </Button>
          );
        } else if (value === 'Duyệt LB') {
          return (
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1"
              >
                <Check className="w-3 h-3" />
                {value}
              </Button>
              <Button size="sm" variant="outline">
                ✕
              </Button>
            </div>
          );
        }
        return (
          <Button variant="ghost" size="sm">
            {value}
          </Button>
        );
      },
    },
  ];

  return <DataTable<Submission> columns={columns} data={submissions} rowId="id" />;
}
