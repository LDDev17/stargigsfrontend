import { useForm } from "react-hook-form";
import { ChangeEvent, useState, useEffect } from "react";
import Select  from 'react-select';

import SampleGigTypeData from "../SampleData/GigTypedata";
import GigSelectType from "../types/GigSelectType";
import SampleManagerData from "../SampleData/EventManagerData";

const FilterForm = () => {
  const [selectedGigType, setSelectedGigType] = useState<GigSelectType[]>([]);
  const [gigTypeData, setGigTypeData] = useState<GigSelectType[]>(SampleGigTypeData);
  const [managerData, setManagerData] = useState<string[]>(['All']);

  const [managerArray, setManagerArray] = useState<string[]>([]);
  const [locationArray, setLocationArray] = useState<string[]>([]);

  const filteredGigType = () => {
    let results: string = gigTypeData.filter(
      (option: string) => option.includes(selectedGigType[0])
    )
    setGigTypeData(results)
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGigType(prevState => prevState.concat(event.target.value))
  }

  useEffect(() => {
    async function fetchManagers() {
      try {
        // const response = await fetch('');
        // const data: string[] = await response.json();

        // Prepend the new value to the fetching array
        const updatedManagers = ['All', ...SampleManagerData];

        // Update the state with the new array
        setManagerData(updatedManagers);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }

    fetchManagers();
  }, []);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#ccc',
      borderRadius: '10px',
      boxShadow: 'none',
      minHeight: '48px',
      height: '48px',
      width: '240px',
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
    })
  }

  return (
    <div className="rounded-xl">
      <form action="" className="flex flex-col justify-between items-start p-4">
        <p className="font-medium text-xl font-inter">Filter</p>
        <div className="font-lato">
          <label 
            htmlFor="gigType"
          >
            Gig Type
          </label>
          <Select 
            isMulti
            options={gigTypeData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            onChange={(selected) => {
              const selectedValues = selected.map((opt) => opt.value);
              setSelectedGigType(selectedValues)

              // Filter out selected options
              const updatedOptions = SampleGigTypeData.filter(
                (opt) => !selectedValues.includes(opt.value)
              );
              setGigTypeData(updatedOptions);
            }}
          />
        </div>
        <div>
          <label htmlFor="manager">
            Event Manager
          </label>
          <Select 
            options={managerData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
          />
        </div>
      </form>
    </div>
  )
}

export default FilterForm;
