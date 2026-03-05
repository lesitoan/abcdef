import PageHeader from './components/PageHeader';
import FormsTable from './components/FormsTable';
import FilterSection from './components/FilterSection';

export const metadata = {
  title: 'V-BENCH - Private Test Contact Forms',
  description: 'Quản lý Private Test Contact Forms',
};

export default function FormsScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 p-3 sm:p-6 w-full">
      <PageHeader />
      <FilterSection />
      <FormsTable />
    </div>
  );
}
