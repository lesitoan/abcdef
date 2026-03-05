'use client';

import DataTable from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@/lib/types/table';
import { Check, X } from 'lucide-react';
import { LeaderboardEntry, MOCK_LEADERBOARD_DATA } from '../constants';

export default function LeaderboardTable() {
  const columns: ColumnDef<LeaderboardEntry>[] = [
    {
      key: 'id',
      label: 'ID',
      align: 'left',
      width: '80px',
    },
    {
      key: 'leaderboard',
      label: 'LEADERBOARD',
      align: 'left',
      render: (value) => (
        <span
          className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${
            value === 'Public'
              ? 'bg-accent/20 text-accent border border-accent/30'
              : 'bg-blue-100 text-blue-700 border border-blue-300'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'modelName',
      label: 'BỘ HÌNH',
      align: 'left',
    },
    {
      key: 'score',
      label: 'ĐIỂM',
      align: 'left',
      render: (value) => <span className="font-semibold text-orange-600">{value}</span>,
    },
    {
      key: 'status',
      label: 'TRẠNG THÁI HIỆU THỊ',
      align: 'left',
      render: (value) => {
        let dotColor = 'bg-orange-500';
        if (value.includes('Đang hiển thị')) {
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
      key: 'id',
      label: 'HÀNH ĐỘNG',
      align: 'left',
      render: (value, row) => {
        if (row.status === 'Chờ xác nhận') {
          return (
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1"
              >
                <Check className="w-3 h-3" />
                Xác nhận
              </Button>
              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                <X className="w-3 h-3" />
              </Button>
            </div>
          );
        }
        return (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
              Tắt chế độ
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <DataTable<LeaderboardEntry>
      columns={columns}
      data={MOCK_LEADERBOARD_DATA}
      rowId="id"
    />
  );
}
