import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingDots.css';

export function LoadingDots() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard'); // Redirect to the client's dashboard
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

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
