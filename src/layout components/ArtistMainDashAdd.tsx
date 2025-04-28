import React from "react";
import {PerformanceSection} from "../PerformersView/PerformanceSection"; // Import PerformanceSection

interface ArtistMainDashAddProps {
  expanded: boolean;
}

const ArtistMainDashAdd: React.FC<ArtistMainDashAddProps> = ({ expanded }) => {
  return (
    <>
      <div className={`absolute right-4 bg-white rounded-xl h-screen mt-24 mb-4 
        ${expanded ? 'w-3/5 md:w-7/10 lg:w-3/4 xl:w-4/5 2xl:w-17/20' : 'w-7/10 sm:w-4/5 md:w-17/20 xl:w-9/10'}`}
      >
        <div className="p-4">
          <PerformanceSection /> {/* Include PerformanceSection */}
        </div>
      </div>
    </>
  );
}

export default ArtistMainDashAdd;
