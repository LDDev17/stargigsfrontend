import { ExpandedContext } from "../../Context/ExpandedContext";
import { useContext, useState, useEffect } from "react";

import PerformanceCard from "./PerformanceCard";
import PerformanceDataType from "../../types/PerformanceDataType";
import samplePerformanceData from '../../SampleData/PerformanceData';

const PerformerPerformance = () => {
  // context is an object of isExpanded and setIsExpanded that control the width 
  // of the sidebar and the main content of the page
  const context = useContext(ExpandedContext);
  if (!context) throw new Error('PerformerPerformance must be used within a DataProvider');
  // isExpanded is part of the context object and is a boolean that determines 
  // if the sidebar and main content are expanded or not
  const { isExpanded } = context;

  // performanceData is an array of objects that contain the data for the performance cards
  const [performanceData, setPerformanceData] = useState<PerformanceDataType[]>([]);

  useEffect(() => {
    // Fetch the performance data from the API or use sample data
    // For now, we are using sample data
    setPerformanceData(samplePerformanceData);
  }, [performanceData]);

  const handleAddPerformance = () => {
    // navigate the user to the Add a Performance Page
  };

  return (
    <>
      <div
        className={`bg-white rounded-xl mt-24 mb-4 flex flex-col grow space-y-4 
          p-8 font-inter w-full min-h-screen ${isExpanded ? 'ml-60' : 'ml-32'}
        `}
      >
        <header className="flex justify-between items-center font-inter w-full">
          <div className="flex justify-start items-center space-x-2">
            <h4 className="text-2xl font-bold text-black">Performances</h4>
            <p
              className="font-lato text-sm"
            >
              - Highlight your talent with performances that get you gig bookings!
            </p>
          </div>
          
          {/* Performance Button */}
          <button
            type="button"
            className="text-tertiary bg-primary text-base rounded-xl py-3 px-6
              cursor-pointer"
            onClick={handleAddPerformance}
          >
            Add Performance
          </button>
        </header>
        
        {/* Performance Card Section */}
        <section className="flex">
          {performanceData.map((performance) => (
            <PerformanceCard
              key={performance.adId}
              adId={performance.adId}
              title={performance.title}
              description={performance.description}
              gigType={performance.gigType}
              location={performance.location}
              hourlyRate={performance.hourlyRate}
              thumbnailUrl={performance.thumbnailUrl}
            />
          ))}
        </section>
      </div>
    </>
  )
}

export default PerformerPerformance
