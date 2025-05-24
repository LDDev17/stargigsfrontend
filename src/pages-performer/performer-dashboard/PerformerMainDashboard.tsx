import { useState, useContext, useEffect } from "react";
import { ExpandedContext } from "../../Context/ExpandedContext";
import { DateTime } from "luxon";

import DashboardTile from "./DashboardTile";
import DashTileType from "../../types/TileType";
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

  // useEffect to set data for the dashboard tiles
  // Starting with sample data
  // Later will make a series of calls to bookings, performances?, payouts, and ratings
  useEffect(() => {
    // Make API call to get the dashboard data
    setTileData(tileSampleData);
  }, []);

  return (
    <>
    
      <div className={`bg-[#f3f3f3] rounded-xl mt-24 mb-4 flex flex-col grow space-y-4 p-8 font-inter 
          ${isExpanded ? 'ml-60' : 'ml-32'}
        `}
      >
        {/* Greeting Header */}
        <div className="flex justify-start items-center space-x-2 pb-4">
          <h4 className="font-bold text-2xl">Hi, Andrew the Magician!</h4>
          <p className="font-lato text-sm">-Here's a quick look at your upcoming gigs, bookings, and new opportunities!</p>
        </div>
          
        <main className="grid grid-rows-[500px_350px] grid-cols-3 gap-4 h-full auto-rows-fr">

          {/* Tile & Upcoming Dash Table */}
          <div className="col-span-2 flex flex-col space-y-4">
            
            {/* Tile Container */}
            <div className="flex w-full space-x-4">
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
            {/* Upcoming Gigs Table */}
            <section className="bg-[#fbfbfb] p-6 rounded-md w-full">
              <PerformerDashUpcomingTable />
            </section>
          </div>

          {/* Notifications */}
          <div className="bg-[#fbfbfb]">
            <p className="py-4 px-2">Notifications</p>
            <NotificationSidebar />
          </div>
          
          {/* Booking Table */}
          <div>
            <DashBookingTable />
          </div>

          {/* Applied To Table */}
          <div className="bg-[#fbfbfb]">
            <p>Applied to Events</p>
          </div>
          
          {/* Dash Calendar */}
          <div>
            <DashCalendar calendarDate={today} />
          </div>
        </main>
      </div>
    </>
  );
}
 
export default PerformerMainDashboard;
