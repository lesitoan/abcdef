interface StatusBadgeProps {
  type: 'Public' | 'Private';
}

export default function StatusBadge({ type }: StatusBadgeProps) {
  const colors =
    type === 'Public'
      ? 'bg-accent/20 text-accent border border-accent/30'
      : 'bg-blue-100 text-blue-700 border border-blue-300';

  return (
    <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${colors}`}>
      {type}
    </span>
  );
}
