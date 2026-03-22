export function Logo({ className = 'h-10' }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="NENI TECH LLC"
      className={className}
    />
  );
}
