import { useState } from "react";
import { Outlet } from "react-router-dom";

import PerformerSidebar from "../layout components/PerformerSidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ExpandedProvider from "../Context/ExpandedProvider";

const PerformerDashboardPages = () => {
  const [clientView, setClientView] = useState(false);

  const handleClientView = () => {
    setClientView(!clientView)
  }

  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-scroll bg-bottom -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${DashboardBg})` }}
      />
      <div className="relative z-10 overflow-auto">
        <PerformerNavbar 
          viewClient={clientView} 
          handleViewClient={handleClientView}
        />
        {/* <div className="flex"> */}
        <ExpandedProvider>
          <div className="flex  space-x-2 w-full">
            <PerformerSidebar
              viewClient={clientView}
              handleViewClient={handleClientView}
            />
            <div className="flex-1 flex justify-end mr-2">
              <Outlet />
            </div>
          </div>
        </ExpandedProvider>
        {/* </div> */}
      </div>
    </div>
  )
}

export default PerformerDashboardPages;
