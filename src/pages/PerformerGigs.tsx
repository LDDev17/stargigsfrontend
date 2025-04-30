import { useContext, useState } from "react";

import GigsButtons from "../design components/buttons/GigsButtons";
import { ExpandedContext } from "../Context/ExpandedContext";
import TableSearchbar from "../design components/TableSearchbar";
import PerformerGigsTable from "../layout components/PerformerGigsTable";
import FilterModal from "../layout components/FilterModal";

import Sort from '../assets/svgs/sort.svg?react';

const buttonIds: string[] = [
  'booking',
  'upcoming',
  'history'
];

const buttonLabels: Record<string, string> = {
  booking: 'GIG BOOKING REQUESTS',
  upcoming: 'UPCOMING GIGS',
  history: 'GIG HISTORY'
}

const PerformerGigs = () => {
  const [activeGigTab, setActiveGigTab] = useState<string>('booking');
  const context = useContext(ExpandedContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!context) throw new Error('PerformerGigs must be used within a DataProvider.');

  const { isExpanded } = context;

  const handleModalOpen = () => setIsOpen(true);
  const handleModalClose = () => setIsOpen(false);

  return (
    <div className={`absolute right-4 bg-white rounded-xl h-screen mt-24 mb-4 flex flex-col justify-start space-y-4 p-4
      ${isExpanded ? 'w-3/5 md:w-7/10 lg:w-3/4 xl:w-4/5 2xl:w-17/20' : 'w-7/10 sm:w-4/5 md:w-17/20 xl:w-9/10'}`}>
      <header className="flex justify-start space-x-2 items-center">
        <h4 className="font-bold text-2xl">GIGS</h4>
        <p>- Manage your gigs effortlessly!</p>
      </header>
      <GigsButtons 
        activeTab={activeGigTab} 
        setActiveTab={setActiveGigTab}
        buttonIds={buttonIds}
        buttonLabels={buttonLabels}  
      />
      <div className="flex justify-start space-x-4">
        <TableSearchbar />
        <button
          className="cursor-pointer border-2 border-primary rounded-xl p-2 flex 
          items-center justify-between w-20 hover:bg-[#ffece0]"
          onClick={handleModalOpen}
        >
          Filter <Sort />
        </button>
      </div>
      <PerformerGigsTable activeTab={activeGigTab} />
      <FilterModal isOpen={isOpen} onClose={handleModalClose}/>
    </div>
  )
}

export default PerformerGigs
