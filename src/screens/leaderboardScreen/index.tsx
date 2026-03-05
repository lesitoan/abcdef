import PageHeader from './components/PageHeader';
import LeaderboardTable from './components/LeaderboardTable';
import FilterSection from './components/FilterSection';

export const metadata = {
  title: 'V-BENCH - Duyệt Leaderboard',
  description: 'Duyệt và xác nhận Leaderboard entries',
};

export default function LeaderboardScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 p-3 sm:p-6 w-full">
      <PageHeader />
      <FilterSection />
      <LeaderboardTable />
    </div>
  );
}
