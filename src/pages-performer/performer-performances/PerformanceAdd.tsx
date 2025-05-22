import { ExpandedContext } from "../../Context/ExpandedContext"
import { useContext, useState, useRef } from "react"
import Select from 'react-select';
import { useForm } from "react-hook-form";
import { DateTime } from "luxon";

import PerformanceAddType from "../../types/PerformanceAddType";
import OrangeButton from "../../design components/buttons/OrangeButton";
import SampleGigTypeData from "../../SampleData/GigTypedata";
import SelectOptionType from "../../types/SelectedOptionType";
import locationData from "./locationData";

const PerformanceAdd = () => {
  const { register, handleSubmit } = useForm<PerformanceAddType>();
  const context = useContext(ExpandedContext);
  if (!context) throw new Error('PerformanceAdd must be used within a DataProvider');
  const { isExpanded } = context;

  const [gigType, setGigType] = useState<SelectOptionType[]>([]);
  const [location, setLocation] = useState<SelectOptionType>();
  const rateRef = useRef<HTMLInputElement>(null);
  const [availability, setAvailability] = useState<DateTime[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);


  const handlePerformanceSubmit = (data: PerformanceAddType) => {
    // Capture hourlyRate at the time of submission if something is entered, 
    // otherwise, record zero
    // Record all other data as registered
    const currentRate = rateRef.current?.value;
    const currentTitle = titleRef.current?.value;
    const currentDescription = descriptionRef.current?.value;
    console.log(`Submitted Performance Data:`, {
      ...data,
      hourlyRate: currentRate ? parseFloat(currentRate) : 0,
      title: currentTitle ? currentTitle : '',
      description: currentDescription ? currentDescription : '',
    });
    // TODO: add create gig_ad route
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#d8dadc',
      borderRadius: '10px',
      boxShadow: 'none',
      minHeight: '48px',
      height: '48px',
      width: '100%',
      fontSize: '16px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#f6bd97'
        : 'white',
      color: 'black',
      cursor: 'pointer',
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#f6bd97',
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: '0 4px',
      textAlign: 'left',
    })
  }

  return (
    <div
      className={`bg-white rounded-xl mt-24 mb-4 flex flex-col grow space-y-4 
          p-8 font-inter text-black w-full min-h-screen ${isExpanded ? 'ml-60' : 'ml-32'}
        `}
    >
      <header className="flex justify-between items-center">
        {/* Left Side-Text */}
        <div className="flex items-center">
          <h5 className="text-2xl font-bold">Add New Performance</h5>
          <p className="font-lato text-sm">
            -To showcase your talent and start getting booked for gigs.
          </p>
        </div>

        {/* Right Side-Buttons */}
        <div className="flex justify-end items-center">
          <button
            className="text-primary hover:text-tertiary hover:bg-text_secondary 
              border border-primary rounded-lg py-4 px-6 hover:border-none cursor-pointer"
          >
            Cancel
          </button>
          <OrangeButton
            LinkText="Save Performance"
            pageUrl=''
            // TODO: add onClick to save Performance as is
          />
        </div>
      </header>
      <form 
        className="grid grid-rows-6 grid-cols-2"
        onSubmit={handleSubmit(handlePerformanceSubmit)}
      >
        {/* gigType Select */}
        <div>
          <label htmlFor="gigType" className="font-lato text-sm">Gig Type</label>
          <Select
            isMulti
            id="gigType"
            {...register('gigType')}
            options={SampleGigTypeData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            value={gigType}
            placeholder='Select the gig type'
            onChange={(selectedOptions) => {
              if (Array.isArray(selectedOptions)) {
                const isAllSelected = selectedOptions.some(option => option.value === 'All');
                if (isAllSelected && selectedOptions.length > 1 && selectedOptions[0].value === 'All') {
                  // If 'All' was chosen first, remove 'All' from the selection
                  setGigType(selectedOptions.filter(option => option.value !== 'All'));
                } else if (isAllSelected && selectedOptions.length > 1 && selectedOptions[0].value !== 'All') {
                  // If 'All' was chosen second, remove other options from the selection
                  setGigType(selectedOptions.filter(option => option.value === 'All'));
                } else if (selectedOptions.length > 2) {
                  // If more than 2 options are selected, remove the first one
                  setGigType(selectedOptions.slice(1));
                } else {
                  // Otherwise, set the selected options
                  setGigType(selectedOptions);
                }
              }
            }}
          />
        </div>

        {/* Location Select */}
        <div>
          <label htmlFor="location" className="font-lato text-sm">Location</label>
          <Select 
            id="location"
            {...register('location')}
            styles={customStyles}
            options={locationData}
            components={{ IndicatorSeparator: () => null }}
            value={location}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setLocation(selectedOption);
              }
            }}
          />
        </div>

        {/* Rate Input */}
        <div>
          <label htmlFor="hourlyRate">Rate per Hour</label>
          <div>
            <p>$</p>
            <input
              type="number"
              id="hourlyRate"
              defaultValue={0.00}
              ref={rateRef}
              min={0}
              step='0.01'
            />
            <p>USD</p>
          </div>
        </div>

        {/* Availability Calendar */}
        <div></div>

        {/* Title Input */}
        <div>
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title"
            defaultValue='Enter performance title'
            ref={titleRef}
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea 
            name="description" 
            id="description"
            defaultValue='Tell us about your performance'
            ref={descriptionRef}
          ></textarea>
        </div>
      </form>
    </div>
  )
}

export default PerformanceAdd
