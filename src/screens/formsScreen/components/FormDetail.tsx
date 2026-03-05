'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface ContactForm {
  id: string;
  email: string;
  modelName: string;
  parameters: string;
  status: string;
  date: string;
}

interface FormDetailProps {
  form: ContactForm;
  onClose: () => void;
}

export default function FormDetail({ form, onClose }: FormDetailProps) {
  return (
    <div className="space-y-4">
      <button
        onClick={onClose}
        className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-4"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Quay lại</span>
      </button>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">CHI TIẾT FORM — {form.id}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
              NGƯỜI DÙNG
            </label>
            <div className="text-sm text-foreground">{form.email}</div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
              BỘ HÌNH
            </label>
            <div className="text-sm text-foreground">{form.modelName}</div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
              PARAMETERS
            </label>
            <div className="text-sm text-foreground">{form.parameters}</div>
          </div>

          <div>
            <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
              NGÀY GỞI
            </label>
            <div className="text-sm text-foreground">{form.date}</div>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
            YÊU CẦU PHẦN CỨNG
          </label>
          <div className="bg-background border border-border rounded p-3 text-sm text-foreground">
            4x A100 80GB, CUDA 11.8
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
            LINK MODEL
          </label>
          <div className="text-sm text-accent hover:underline cursor-pointer">
            hf.co/vinuni/vinllama-13b
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-xs text-muted-foreground font-semibold mb-2 uppercase">
            GHI CHÚ
          </label>
          <div className="bg-background border border-border rounded p-3 text-sm text-foreground">
            Sử dụng 4-bit quantization để giảm VRAM. Cần flash attention 2.
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            Gửi email liên hệ
          </Button>
          <Button variant="outline">Đánh dấu hoàn thành</Button>
        </div>
      </div>
    </div>
  );
}
