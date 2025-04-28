import { useState } from "react";

import SidebarPerformer from "../layout components/Sidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ArtistMainDashAdd from "../layout components/ArtistMainDashAdd"; // Import ArtistMainDashAdd

const DashboardPerformersPage = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [clientView, setClientView] = useState(true);
  
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }

  const handleClientView = () => {
    setClientView(!clientView);
  }

  return (
    <div className="overflow-auto relative">
      <PerformerNavbar 
        viewClient={clientView}
      />
      <div 
        className="justify-center bg-cover bg-scroll bg-bottom h-screen"
        style={{ backgroundImage: `url(${DashboardBg})` }} // Corrected style property
      >
        <div className="flex">
          <SidebarPerformer
            expanded={isExpanded} 
            handleExpand={handleExpandClick}
            viewClient={clientView}
            handleViewClient={handleClientView}
          />
          <ArtistMainDashAdd expanded={isExpanded}/> {/* Use ArtistMainDashAdd */}
        </div>
      </div>
    </div>
  )
}

export default DashboardPerformersPage;
