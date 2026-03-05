import PageHeader from './components/PageHeader';
import TestsTable from './components/TestsTable';
import FilterSection from './components/FilterSection';

export const metadata = {
  title: 'V-BENCH - Upload Điểm Private Test',
  description: 'Upload điểm cho Private Test Submissions',
};

export default function TestsScreen() {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-6 p-3 sm:p-6 w-full">
      <PageHeader />
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
        <p className="text-xs sm:text-sm text-blue-800">
          <span className="font-semibold">CHÚ Ý:</span> CHỈ upload điểm sau khi đã chạy và tính điểm xong trong màng nội bộ.
        </p>
      </div>
      <FilterSection />
      <TestsTable />
    </div>
  );
}
