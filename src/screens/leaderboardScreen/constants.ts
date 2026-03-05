import { FilterOption } from "@/components/ui/filter-dropdown";

export const LEADERBOARD_OPTIONS: FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

export const STATUS_OPTIONS: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Chờ xác nhận', value: 'pending' },
  { label: 'Đang hiển thị', value: 'active' },
  { label: 'Ẩn khỏi LB', value: 'hidden' },
];

export interface LeaderboardEntry {
  id: string;
  leaderboard: 'Public' | 'Private';
  modelName: string;
  score: string;
  status: string;
}

export const MOCK_LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    id: '#PT-046',
    leaderboard: 'Private',
    modelName: 'HUST-LLM-7B',
    score: '74.8',
    status: 'Chờ xác nhận',
  },
  {
    id: '#PT-045',
    leaderboard: 'Private',
    modelName: 'VinLLaMA-13B-v1',
    score: '82.5',
    status: 'Đang hiển thị',
  },
  {
    id: '#PU-299',
    leaderboard: 'Public',
    modelName: 'GPT-4o-mini',
    score: '91.2',
    status: 'Đang hiển thị',
  },
];