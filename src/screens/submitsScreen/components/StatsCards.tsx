import { MOCK_STATS } from "../constants";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {MOCK_STATS.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-3 sm:p-6 hover:border-accent/50 transition-colors"
        >
          <div className={`text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 ${stat.color}`}>
            {stat.value}
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
