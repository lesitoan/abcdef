import { FilterOption } from "@/components/ui/filter-dropdown";

export const TYPE_OPTIONS: FilterOption[] = [
  { label: 'Tất cả loại', value: 'all' },
  { label: 'Public Test', value: 'public' },
  { label: 'Private Test', value: 'private' },
];

export const STATUS_OPTIONS: FilterOption[] = [
  { label: 'Tất cả trạng thái', value: 'all' },
  { label: 'Chờ liên hệ', value: 'pending' },
  { label: 'Hoàn thành', value: 'completed' },
  { label: 'Đã công bố', value: 'published' },
];

export interface ContactForm {
  id: string;
  email: string;
  modelName: string;
  parameters: string;
  status: string;
  date: string;
}

export const MOCK_FORM_DATA: ContactForm[] = [
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
