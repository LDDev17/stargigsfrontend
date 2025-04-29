import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../layout components/Sidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import PerformerMainDashboard from "../layout components/PerformerMainDashboard";
import ExpandedProvider from "../Context/ExpandedProvider";

const PerformerDashboardPages = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [clientView, setClientView] = useState(true);
  
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleClientView = () => {
    setClientView(!clientView)
  }

  return (
    <div className="overflow-auto relative">
      <PerformerNavbar 
        viewClient={clientView}
      />
      <div 
        className="justify-center bg-cover bg-scroll bg-bottom h-screen"
        style={{ backgroundImage: `url(${DashboardBg})`}}
      >
        <div className="flex ">
          <ExpandedProvider>
            <Sidebar
              expanded={isExpanded}
              handleExpand={handleExpandClick}
              viewClient={clientView}
              handleViewClient={handleClientView}
            />
            <Outlet />
          </ExpandedProvider>
        </div>
      </div>
    </div>
  )
}

export default PerformerDashboardPages;
