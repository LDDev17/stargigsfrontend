import React, { useState, useEffect, useContext } from "react";
import { ExpandedContext } from "../Context/ExpandedContext";
import { DateTime } from "luxon";

import DashboardTile from "../design components/DashboardTile";
import DashTileType from "../types/TileType";
import PerformerDashUpcomingTable from "./PerformerDashUpcomingTable";
import DashBookingTable from "./DashBookingTable";
import NotificationSidebar from "./NotificationSidebar";
import DashCalendar from "./DashCalendar";

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
  const today = DateTime.now();
  const context = useContext(ExpandedContext);
  const [tileData, setTileData] = useState<DashTileType[]>(tileSampleData);

  if (!context) throw new Error('PerformerMainDashboard must be used within a DataProvider');

  const { isExpanded } = context;

  return (
    <>
    
      <div className={`bg-white rounded-xl mt-24 mb-4 flex flex-col space-y-4 p-8 font-inter 
          ${isExpanded ? 'ml-60' : 'ml-32'}
        `}
      >
        {/* Main or everything but Footer */}
        <main className="flex">
          {/* Left Side */}
          <section className="flex flex-col space-y-4 grow pr-4">
            <header>
              {/* row 1 */}
              <div className="flex justify-start items-center space-x-2 pb-4">
                <h4 className="font-bold text-2xl">Morning Andrew</h4>
                <p>weather icon</p>
                <p className="font-lato text-sm">-Here's a quick look at your upcoming gigs, bookings, and new opportunities!</p>
              </div>
              {/* row 2 */}
              <div className="flex justify-between space-x-6">
                <div className={`bg-[#ffece0] rounded-xl grow`}>
                  <DashboardTile
                    title={tileData[0].title}
                    amount={tileData[0].amount}
                    percentage={tileData[0].percentage}
                  />
                </div>
                <div className={`bg-[#e6f1fd] rounded-xl grow`}>
                  <DashboardTile
                    title={tileData[1].title}
                    amount={tileData[1].amount}
                    percentage={tileData[1].percentage}
                  />
                </div>
                <div className={`bg-[#edeefc] rounded-xl grow`}>
                  <DashboardTile
                    title={tileData[2].title}
                    amount={tileData[2].amount}
                    percentage={tileData[2].percentage}
                  />
                </div>
                <div className={`bg-[#fff9e7] rounded-xl grow`}>
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

            
          </section>

          {/* Right Side */}
          <section className="pl-4 flex flex-col justify-start space-y-8">
            <div>
              <p>Notifications</p>
              <NotificationSidebar />
            </div>
          </section>
        </main>

        {/* Booking Table */}
        <footer className="flex gap-8 h-84">
          <div className="h-full grow-2">
            <DashBookingTable />
          </div>
          <div className="h-full grow-1">
            <DashCalendar calendarDate={today} />
          </div>
        </footer>
      </div>
    
      
    </>
  );
}
 
export default PerformerMainDashboard;
