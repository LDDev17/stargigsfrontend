import React, { useState, useEffect } from "react";

interface ClientMainDashboardProps {
  expanded: boolean
}

const ClientMainDashboard: React.FC<ClientMainDashboardProps> = ({expanded}) => {
  return (
    <>
    
      <div className={`absolute right-4 bg-white rounded-xl h-screen mt-24 mb-4 
        ${expanded ? 'w-3/5 md:w-7/10 lg:w-3/4 xl:w-4/5 2xl:w-17/20' : 'w-7/10 sm:w-4/5 md:w-17/20 xl:w-9/10'}`}
      >

      </div>
    
      
    </>
  );
}
 
export default ClientMainDashboard;
