'use client';

import { Button } from '@/components/ui/button';
import StatusBadge from './StatusBadge';
import { Eye, Check } from 'lucide-react';

const submissions = [
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
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                ID
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Loại
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Email
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Mô hình
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Điểm
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Ngày
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr
                key={index}
                className="border-b border-border hover:bg-muted/50 transition-colors"
              >
                <td className="px-3 sm:px-6 py-4 text-sm font-medium text-accent">
                  {submission.id}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm">
                  <StatusBadge type={submission.type as 'Public' | 'Private'} />
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-foreground">
                  {submission.email}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-foreground">
                  {submission.model}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm font-medium text-orange-600">
                  {submission.score || '—'}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    {submission.status.includes('Hoàn thành') ||
                      submission.status.includes('Đã công bố') ? (
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                    ) : submission.status.includes('đang đánh giá') ? (
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    )}
                    <span className="text-foreground">{submission.status}</span>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm text-muted-foreground">
                  {submission.date}
                </td>
                <td className="px-3 sm:px-6 py-4 text-sm">
                  {submission.action === 'Upload điểm' ? (
                    <Button
                      size="sm"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {submission.action}
                    </Button>
                  ) : submission.action === 'Duyệt LB' ? (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1"
                      >
                        <Check className="w-3 h-3" />
                        {submission.action}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                      >
                        ✕
                      </Button>
                    </div>
                  ) : (
                    <Button variant="ghost" size="sm">
                      {submission.action}
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3 p-3 sm:p-4">
        {submissions.map((submission, index) => (
          <div key={index} className="border border-border rounded-lg p-3 sm:p-4 bg-background hover:bg-muted/50 transition-colors">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <div className="text-sm font-bold text-accent mb-1">{submission.id}</div>
                <div className="text-xs text-muted-foreground">{submission.date}</div>
              </div>
              <StatusBadge type={submission.type as 'Public' | 'Private'} />
            </div>

            <div className="space-y-2 mb-3 text-sm">
              <div>
                <span className="text-xs text-muted-foreground font-semibold">Email:</span>
                <div className="text-xs break-all text-foreground">{submission.email}</div>
              </div>
              <div>
                <span className="text-xs text-muted-foreground font-semibold">Mô hình:</span>
                <div className="text-xs text-foreground">{submission.model}</div>
              </div>
              <div className="flex gap-4">
                <div>
                  <span className="text-xs text-muted-foreground font-semibold">Điểm:</span>
                  <div className="text-xs font-medium text-orange-600">{submission.score || '��'}</div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold">Trạng thái:</span>
                  <div className="flex items-center gap-1 mt-1">
                    {submission.status.includes('Hoàn thành') ||
                      submission.status.includes('Đã công bố') ? (
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                    ) : submission.status.includes('đang đánh giá') ? (
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    )}
                    <span className="text-xs text-foreground">{submission.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {submission.action === 'Upload điểm' ? (
                <Button
                  size="sm"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {submission.action}
                </Button>
              ) : submission.action === 'Duyệt LB' ? (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 gap-1"
                  >
                    <Check className="w-3 h-3" />
                    {submission.action}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="sm" className="w-full">
                  {submission.action}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
