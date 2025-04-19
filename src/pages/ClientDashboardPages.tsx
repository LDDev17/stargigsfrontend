import { useState } from "react";

import Sidebar from "../layout components/Sidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ClientMainDashboard from "../layout components/ClientMainDashboard";

const ClientDashboardPages = () => {
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
          <Sidebar 
            expanded={isExpanded} 
            handleExpand={handleExpandClick}
            viewClient={clientView}
            handleViewClient={handleClientView}
          />
          <ClientMainDashboard expanded={isExpanded}/>
        </div>
      </div>
    </div>
  )
}

export default ClientDashboardPages;
