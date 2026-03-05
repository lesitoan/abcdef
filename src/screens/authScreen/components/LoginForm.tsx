'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        setError('Vui lòng nhập email và mật khẩu.');
        setIsLoading(false);
        return;
      }

      // TODO: Implement actual login API call
      // For now, simulate successful login with any valid email/password
      await new Promise(resolve => setTimeout(resolve, 800));

      // Store auth token (replace with actual token from API)
      localStorage.setItem('auth_token', `token_${Date.now()}`);
      
      // Redirect to dashboard
      router.push('/submits');
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

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
            Đăng nhập
          </h2>
          <p className="text-sm text-muted-foreground">
            Chào mừng trở lại!
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

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-xs font-semibold text-foreground uppercase tracking-wider">
                Mật khẩu
              </label>
              <Link
                href="/(auth)/forgot-password"
                className="text-xs text-accent hover:text-accent/80 transition-colors font-medium"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Chưa có tài khoản?{' '}
          <Link href="/(auth)/signup" className="text-accent hover:text-accent/80 transition-colors font-medium">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
