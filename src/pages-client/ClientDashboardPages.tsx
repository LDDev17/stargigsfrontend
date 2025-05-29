import { Outlet } from "react-router-dom";

import ClientSidebar from "./ClientSidebar";
import ClientNavbar from "./ClientNavbar";
import DashboardBg from '../assets/photos/dashboard_bg.jpg';
import ExpandedProvider from "../Context/ExpandedProvider";

const ClientDashboardPages = () => {

  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-scroll bg-bottom -z-10 pointer-events-none"
        style={{ backgroundImage: `url(${DashboardBg})` }}
      />
      <div className="relative z-10 overflow-auto">
        <ClientNavbar />
        {/* <div className="flex"> */}
        <ExpandedProvider>
          <div className="flex  space-x-2 w-full">
            <ClientSidebar />
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

export default ClientDashboardPages;
