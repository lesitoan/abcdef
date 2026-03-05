import CleanAuthLayout from '@/components/layout/CleanAuthLayout';

export default function AuthGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CleanAuthLayout>{children}</CleanAuthLayout>;
}
