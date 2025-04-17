import { useState } from "react";

import Sidebar from "../layout components/Sidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ClientMainDashboard from "../layout components/ClientMainDashboard";

const ClientDashboardPages = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="overflow-auto relative">
      <PerformerNavbar />
      <div 
        className="justify-center bg-cover bg-fixed bg-bottom h-screen"
        style={{ backgroundImage: `url(${DashboardBg})`}}
      >
      <div className="flex">
        <Sidebar 
          expanded={isExpanded} 
          handleExpand={handleExpandClick}
        />
        <ClientMainDashboard expanded={isExpanded}/>
      </div>
        {/* width to be based on redux state or useContext of SideBar isExpanded */}
        {/* <div className="fixed flex justify-center items-center top-24 right-4 w-full h-9/10"> */}
          {/* <div className="flex grow justify-center items-center border-2 border-gray-200  */}
            {/* inset-2 h-full w-full ml-58 rounded-xl z-10 bg-white" */}
          {/* > */}
            {/* Page content will go here */}
          {/* </div>
        </div> */}
      </div>
    </div>
  )
}

export default ClientDashboardPages;
