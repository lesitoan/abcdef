import { FilterOption } from "@/components/ui/filter-dropdown";

export const TYPE_OPTIONS: FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Hoàn thành', value: 'completed' },
  { label: 'Đang chờ', value: 'pending' },
];

export const STATUS_OPTIONS: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Chờ upload điểm', value: 'waiting' },
  { label: 'Đã công bố', value: 'published' },
  { label: 'Đang đánh giá', value: 'evaluating' },
];

export const MOCK_STATS = [
  { value: '89', label: 'Public hoàn thành', color: 'text-accent' },
  { value: '12', label: 'Private chờ xử lý', color: 'text-orange-500' },
  { value: '5', label: 'Chờ upload điểm', color: 'text-blue-500' },
  { value: '24', label: 'Private hoàn thành', color: 'text-foreground' },
];