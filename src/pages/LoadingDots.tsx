import './LoadingDots.css';

export function LoadingDots() {
  return (
    <div className="flex gap-2.5 mt-8">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="w-3 h-3 bg-orange-500 rounded-full opacity-30 animate-wave"
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
