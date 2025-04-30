import React, { useState, useEffect, useContext } from "react";
import { ExpandedContext } from "../Context/ExpandedContext";

import DashboardTile from "../design components/DashboardTile";
import DashTileType from "../types/TileType";
import PerformerDashUpcomingTable from "./PerformerDashUpcomingTable";
import DashBookingTable from "./DashBookingTable";

const tileSampleData: DashTileType[] = [
  {
    title: 'GIG BOOKING REQUESTS',
    amount: 12,
    percentage: 36
  },
  {
    title: 'PROFILE VIEWS',
    amount: 143,
    percentage: -16
  },
  {
    title: 'EARNINGS',
    amount: 2456,
    percentage: 25
  },
  {
    title: 'RATING',
    amount: 4.5,
    percentage: -0.2
  }
]

const PerformerMainDashboard = () => {
  const context = useContext(ExpandedContext);
  const [tileData, setTileData] = useState<DashTileType[]>(tileSampleData);

  if (!context) throw new Error('PerformerMainDashboard must be used within a DataProvider');

  const { isExpanded } = context;

  return (
    <>
    
      <div className={`absolute right-4 bg-white rounded-xl h-screen mt-24 mb-4 flex p-4
        ${isExpanded ? 'w-3/5 md:w-7/10 lg:w-3/4 xl:w-4/5 2xl:w-17/20' : 'w-7/10 sm:w-4/5 md:w-17/20 xl:w-9/10'}`}
      >

        {/* Left Side */}
        <section className="border-r-1 border-gray-200 flex flex-col grow pr-4">
          <header>
            {/* row 1 */}
            <div className="flex justify-start items-center space-x-2 pb-4">
              <h4 className="font-bold text-2xl">Morning Andrew</h4>
              <p>weather icon</p>
              <p>-Here's a quick look at your upcoming gigs, bookings, and new opportunities!</p>
            </div>
            {/* row 2 */}
            <div className="flex justify-between">
              <div className={`bg-[#ffece0] rounded-xl`}>
                <DashboardTile
                  title={tileData[0].title}
                  amount={tileData[0].amount}
                  percentage={tileData[0].percentage}
                />
              </div>
              <div className={`bg-[#e6f1fd] rounded-xl`}>
                <DashboardTile
                  title={tileData[1].title}
                  amount={tileData[1].amount}
                  percentage={tileData[1].percentage}
                />
              </div>
              <div className={`bg-[#edeefc] rounded-xl`}>
                <DashboardTile
                  title={tileData[2].title}
                  amount={tileData[2].amount}
                  percentage={tileData[2].percentage}
                />
              </div>
              <div className={`bg-[#fff9e7] rounded-xl`}>
                <DashboardTile
                  title={tileData[3].title}
                  amount={tileData[3].amount}
                  percentage={tileData[3].percentage}
                />
              </div>
            </div>
          </header>

          {/* Upcoming Gigs Table */}
          <section className="bg-[#fbfbfb] p-6 rounded-md">
            <PerformerDashUpcomingTable />
          </section>

          {/* Booking Table */}
          <footer>
            <DashBookingTable />
          </footer>
        </section>

        {/* Right Side */}
        <section className="pl-4">
          <p>Notifications</p>
        </section>
      </div>
    
      
    </>
  );
}
 
export default PerformerMainDashboard;
