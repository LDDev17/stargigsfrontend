import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import Select  from 'react-select';

import SampleGigTypeData from "../SampleData/GigTypedata";
import GigSelectType from "../types/GigSelectType";

const FilterForm = () => {
  const [selectedGigType, setSelectedGigType] = useState<string[]>([]);
  const [gigTypeData, setGigTypeData] = useState<GigSelectType[]>(SampleGigTypeData);

  const [managerArray, setManagerArray] = useState<string[]>([]);
  const [locationArray, setLocationArray] = useState<string[]>([]);

  const filteredGigType = () => {
    let results: string[] = gigTypeData.filter(
      (option: string) => option.includes(selectedGigType[0])
    )
    setGigTypeData(results)
  };

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGigType(prevState => prevState.concat(event.target.value))
  }

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#ccc',
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
      padding: '0 4px'
    })
  }

  return (
    <div className="rounded-xl">
      <form action="" className="flex flex-col justify-between p-4">
        <p className="font-medium text-xl">Filter</p>
        <div>
          <label htmlFor="gigType">Gig Type</label>
          <Select 
            isMulti
            options={gigTypeData}
            styles={customStyles}
          />
        </div>
      </form>
    </div>
  )
}

export default FilterForm
