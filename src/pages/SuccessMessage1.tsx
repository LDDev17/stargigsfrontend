import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import './SuccessMessage.css';
// import { LoadingDots } from "../pages/LoadingDots";

export function SuccessMessage1() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/performerDashboard/main');
    }, 3000); // Redirect after 3 seconds
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <section className="relative px-20 py-10 w-full">
      <div className="mx-auto mt-52 mb-0 max-w-[388px] ">
        <section className="flex flex-1 justify-center items-center py-5 ">
          <div className="flex flex-col gap-5 items-start text-center max-w-[388px]">
            <h2 className="text-4xl font-bold text-gray-900 leading-[52.2px] ">
              You're All Set!
            </h2>
            <p className="text-xl leading-8 text-left text-slate-700 ">
              Verification complete. Redirecting to your dashboard...
            </p>
            <div className="flex gap-2 justify-center w-full mt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </section>
      </div>
    </section>


  );
}
