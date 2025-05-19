import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import PerformerSidebar from "../layout components/PerformerSidebar";
import PerformerNavbar from "../layout components/PerformerNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ExpandedProvider from "../Context/ExpandedProvider";

const PerformerDashboardPages = () => {
  const [clientView, setClientView] = useState(false);
  const [textColor, setTextColor] = useState<string>('primary');
  const [textHoverFrom, setTextHoverFrom] = useState<string>('light_orange');
  const [textHoverTo, setTextHoverTo] = useState<string>('primary');
  const [bgColor, setBgColor] = useState<string>('bg-[#feefe5]');
  const [notificationColor, setNotificationColor] = useState<string>('bg-primary');
    
    useEffect(() => {
      if (clientView) {
        setTextColor('text-[#5533ff]');
        setTextHoverFrom('from-purple-200');
        setTextHoverTo('to-[#5533ff]');
        setBgColor('bg-purple-200');
        setNotificationColor('bg-[#5533ff]');
      } else {
        setTextColor('text-primary');
        setTextHoverFrom('from-light_orange');
        setTextHoverTo('to-primary');
        setBgColor('bg-[#feefe5]');
        setNotificationColor('bg-primary');
      }
    }, [clientView]);

  const handleClientView = () => {
    setClientView(!clientView)
  }

  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-scroll bg-bottom -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${DashboardBg})` }}
      />
      <div className="relative z-10 overflow-auto w-full">
        <PerformerNavbar 
          viewClient={clientView} 
          handleViewClient={handleClientView}
          textColor={textColor}
          bgColor={bgColor}
          notificationColor={notificationColor}
        />
        {/* <div className="flex"> */}
        <ExpandedProvider>
          <div className="flex space-x-2 w-full">
            <PerformerSidebar
              viewClient={clientView}
              handleViewClient={handleClientView}
              textColor={textColor}
              textHoverFrom={textHoverFrom}
              textHoverTo={textHoverTo}
              bgColor={bgColor}
              notificationColor={notificationColor}
            />
            <div className="flex-1 flex justify-end mr-2 w-full">
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
