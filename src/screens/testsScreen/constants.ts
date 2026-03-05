import { FilterOption } from "@/components/ui/filter-dropdown";

export const TYPE_OPTIONS : FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Public Test', value: 'public' },
  { label: 'Private Test', value: 'private' },
];

export const STATUS_OPTIONS: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Hoàn thành', value: 'completed' },
  { label: 'Đang chờ', value: 'pending' },
  { label: 'Đang đánh giá', value: 'evaluating' },
];

export const MOCK_TEST_DATA = [
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