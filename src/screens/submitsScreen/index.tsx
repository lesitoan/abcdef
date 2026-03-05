import AppLayout from '@/components/layout/AppLayout';
import PageHeader from './components/PageHeader';
import StatsCards from './components/StatsCards';
import FilterSection from './components/FilterSection';
import SubmissionsTable from './components/SubmissionsTable';

export const metadata = {
  title: 'V-BENCH - Quản lý Submissions',
  description: 'Dashboard quản lý submissions cho V-BENCH',
};

export default function SubmitsScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 p-3 sm:p-6 w-full">
      <PageHeader />
      <StatsCards />
      <FilterSection />
      <SubmissionsTable />
    </div>
  );
}
