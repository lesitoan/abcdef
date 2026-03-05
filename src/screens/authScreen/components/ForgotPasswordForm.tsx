'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Implement actual forgot password logic
      console.log('Forgot password request:', { email });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setSubmitted(true);
    } catch (err) {
      setError('Không thể gửi yêu cầu. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-sm">
        <div className="bg-card border border-border rounded-lg shadow-lg p-6 sm:p-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
              V
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-accent text-center">V-BENCH</h1>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Kiểm tra email của bạn
            </h2>
            <p className="text-sm text-muted-foreground">
              Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến <span className="font-medium text-foreground">{email}</span>
            </p>
          </div>

          {/* Back to Login */}
          <div className="mt-8 pt-8 border-t border-border">
            <Link
              href="/(auth)/login"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Quay lại đăng nhập
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-card border border-border rounded-lg shadow-lg p-6 sm:p-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
            V
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-accent text-center">V-BENCH</h1>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
            Quên mật khẩu?
          </h2>
          <p className="text-sm text-muted-foreground">
            Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input/50 border-border hover:border-border/70 focus:border-accent"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 bg-accent text-accent-foreground hover:bg-accent/90 font-medium mt-6"
          >
            {isLoading ? 'Đang gửi...' : 'Gửi hướng dẫn'}
          </Button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link href="/(auth)/login" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
