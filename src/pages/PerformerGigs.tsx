import { useContext, useState, useEffect, use } from "react";

import GigsButtons from "../design components/buttons/GigsButtons";
import { ExpandedContext } from "../Context/ExpandedContext";
import TableSearchbar from "../design components/TableSearchbar";
import PerformerGigsTable from "../layout components/PerformerGigsTable";
import FilterModal from "../layout components/FilterModal";
import sampleTableData from "../SampleData/TableData";
import GigsTableType from "../types/GigsTableType";
import SelectOptionType from "../types/SelectedOptionType";
import FilterModalProps from "../types/FilterModalType";
import FilterDataType from "../types/FilterDataType";
import sampleGigHistoryData from "../SampleData/GigHistoryData";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const context = useContext(ExpandedContext);

  const [filterData, setFilterData] = useState<FilterDataType>();
  const [filteredData, setFilteredData] = useState<GigsTableType[]>([]);
  const [formData, setFormData] = useState<GigsTableType[]>(sampleTableData);
  const [gigTypeData, setGigTypeData] = useState<SelectOptionType[]>([]);
  const [selectedGigType, setSelectedGigType] = useState<SelectOptionType[]>([]);
  const [managerData, setManagerData] = useState<SelectOptionType[]>([]);
  const [selectedManager, setSelectedManager] = useState<SelectOptionType>();
  const [locationData, setLocationData] = useState<SelectOptionType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<SelectOptionType>();
  const [statusData, setStatusData] = useState<SelectOptionType[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<SelectOptionType>();
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountTo, setAmountTo] = useState<number>(0);

  if (!context) throw new Error('PerformerGigs must be used within a DataProvider.');

  const { isExpanded } = context;

  let handleModalOpen = () => setIsOpen(true);

  const filterModalProps: FilterModalProps = {
    activeGigTab,
    isOpen: isOpen,
    setIsOpen,
    gigTypeData,
    selectedGigType,
    setSelectedGigType,
    managerData,
    selectedManager,
    setSelectedManager,
    locationData,
    selectedLocation,
    setSelectedLocation,
    statusData,
    selectedStatus,
    setSelectedStatus,
    amountFrom,
    setAmountFrom,
    amountTo,
    setAmountTo,
  }

  useEffect(() => {
    // Setting Select values for Event Managers
    // Filtering out empty strings and setting unique values
    // to a Set to remove duplicates
    const uniqueEventManagers: string[] = Array.from(
      new Set(
        formData?.map(gig => gig.EventManager)
        .filter((manager): manager is string => Boolean(manager))
      )
    )
    // Setting incoming strings to objects appropriate for react-select
    // and prepending 'All' to unique managers found
    const updatedManagers: {value: string; label: string}[] = [
      { value: 'All', label: 'All' },
      ...uniqueEventManagers.map(manager => ({ value: manager, label: manager }))
    ];
    setManagerData(updatedManagers);

    // Setting Select values for Gig Types
    const uniqueGigTypes: string[] = Array.from(
      new Set(
        formData?.map(gig => gig.GigType)
        .filter((type): type is string => Boolean(type))
      )
    )
    const updatedGigTypes: {value: string; label: string}[] = [
      { value: 'All', label: 'All' },
      ...uniqueGigTypes.map(type => ({ value: type, label: type }))
    ];
    setGigTypeData(updatedGigTypes);

    // Setting Select values for locations found
    const uniqueLocations: string[] = Array.from(
      new Set(
        formData?.map(gig => gig.Location)
        .filter((location): location is string => Boolean(location))
      )
    )
    const updatedLocations: {value: string; label: string}[] = [
      { value: 'All', label: 'All' }, 
      ...uniqueLocations.map(location => ({ value: location, label: location }))
    ];
    setLocationData(updatedLocations);

  }, [formData]);


  // Setting Select values for different tables
  useEffect(() => {
    let statuses: SelectOptionType[] = [];
    if (activeGigTab === 'upcoming') {
      statuses = [
        { value: 'Confirmed', label: 'Confirmed' },
        { value: 'Pending', label: 'Pending' }
      ];
    } else if (activeGigTab === 'history') {
      statuses = [
        { value: 'Completed', label: 'Completed' },
        { value: 'Cancelled', label: 'Cancelled' }
      ];
    } else {
      statuses = [];
    }
    setStatusData(statuses);
  }, [activeGigTab]);

  // Reset filter data when active tab changes
  useEffect(() => {
    setFilterData({
      gigType: [],
      manager: '',
      location: '',
      status: '',
      amountFrom: 0,
      amountTo: 0
    });
  }, [activeGigTab]);

  // Set formData if the active tab changes
  useEffect(() => {
    if (activeGigTab === 'booking') {
      // make an API call to get booking data
      setFormData(sampleTableData)
    } else if (activeGigTab === 'upcoming') {
      // make an API call to get upcoming gigs data
      setFormData(sampleTableData)
    } else if (activeGigTab === 'history') {
      // make an API call to get history gigs data
      setFormData(sampleGigHistoryData)
    }
  }, [activeGigTab]);

  // Set filteredData when formData or filterData changes
  useEffect(() => {
    const FilteredData = formData.filter((gig) => {
      const gigTypeMatch = filterData?.gigType.length ? filterData.gigType.includes(gig.GigType) : true;
      const managerMatch = filterData?.manager ? gig.EventManager === filterData.manager : true;
      const locationMatch = filterData?.location ? gig.Location === filterData.location : true;
      const statusMatch = filterData?.status ? gig.Status === filterData.status : true;
      const amountFromMatch = filterData?.amountFrom ? gig.Amount >= filterData.amountFrom : true;
      const amountToMatch = filterData?.amountTo ? gig.Amount <= filterData.amountTo : true;

      return (
        gigTypeMatch &&
        managerMatch &&
        locationMatch &&
        statusMatch &&
        amountFromMatch &&
        amountToMatch
      );
    });

    setFilteredData(FilteredData);
  }, [formData, filterData]);

  return (
    <div className={`bg-white rounded-xl mt-24 mb-4 flex flex-col flex-grow space-y-4 p-4
        ${isExpanded ? 'ml-60' : 'ml-32'}
      `}
    >
      <header className="flex justify-start space-x-2 items-center font-inter">
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
          items-center justify-between w-20 hover:bg-[#ffece0] font-inter"
          onClick={handleModalOpen}
        >
          Filter <Sort />
        </button>
      </div>
      <PerformerGigsTable activeTab={activeGigTab} filteredData={filteredData} />
      <FilterModal 
        {...filterModalProps}
      />
    </div>
  )
}

export default PerformerGigs
