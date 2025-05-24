import Select  from 'react-select';
import { useForm } from 'react-hook-form';

import FilterFormProps from '../../types/FilterFormType';
import FilterDataType from '../../types/FilterDataType';

const FilterForm = (
  {
    activeGigTab,
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
  }: FilterFormProps) => {
  const { register, handleSubmit } = useForm<FilterDataType>({});
  
  const onFilterSubmit = (data: FilterDataType) => {
    console.log(`Submitted Filter Form:`, data)
    // TODO: add filtering logic
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#ccc',
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
    <div className="rounded-xl">
      <form onSubmit={handleSubmit(onFilterSubmit)} className="flex flex-col justify-between items-start p-4 space-y-2">
        <p className="font-medium text-xl font-inter">Filter</p>
        
        {/* Gig Type Select */}
        <div className="font-lato w-full flex flex-col space-y-2">
          <p className='text-left'>Gig Type</p>
          <Select 
            id="gigType"
            {...register('gigType')}
            options={gigTypeData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            value={selectedGigType}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setSelectedGigType(selectedOption);
              }
            }}
          />
        </div>

        {/* Event Manager Select */}
        <div className='w-full flex flex-col space-y-2'>
          <p className='text-left'>
            Event Manager
          </p>
          <Select 
            id="manager"
            {...register('manager')}
            options={managerData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            value={selectedManager}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setSelectedManager(selectedOption);
              }
            }}
          />
        </div>

        {/* Location Select */}
        <div className='w-full flex flex-col space-y-2'>
          <p className='text-left'>
            Location
          </p>
          <Select
            id="location"
            {...register('location')}
            options={locationData}
            styles={customStyles}
            components={{ IndicatorSeparator: () => null }}
            value={selectedLocation}
            onChange={(selectedOption) => {
              if (selectedOption) {
                setSelectedLocation(selectedOption);
              }
            }}
          />
        </div>

        {/* Status Select */}
        {/* If activeGigTab = 'booking' there is no data, otherwise there is */}
        {activeGigTab !== 'booking' &&
          <div className='w-full flex flex-col space-y-2'>
            <p className='text-left'>Status</p>
            <Select
              id="status"
              {...register('status')}
              options={statusData}
              styles={customStyles}
              components={{ IndicatorSeparator: () => null }}
              value={selectedStatus}
              onChange={(selectedOption) => {
                if (selectedOption) {
                  setSelectedStatus(selectedOption);
                }
              }}
            />
          </div>
        }

        {/* Amount Inputs */}
        <div className='flex flex-col space-y-2'>
          <p className='text-left'>Amount</p>
          <div className="flex space-x-2">
            <label className='text-[10px] text-black-100 flex flex-col text-left'>
              From
              <input
                id="amountFrom"
                {...register('amountFrom')}
                type="number"
                className="text-text_primary text-md bg-white border border-[#e1e2e9] 
                  rounded-xl p-2 grow gap-4"
                value={amountFrom}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setAmountFrom(value);
                  }
                }}
              />
            </label>
            <label className='text-[10px] text-[#1c1d22] flex flex-col text-left'>
              To
              <input
                id="amountTo"
                {...register('amountTo')}
                type="number"
                className="text-text_primary text-md bg-white border border-[#e1e2e9] 
                  rounded-xl p-2 grow"
                value={amountTo}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setAmountTo(value);
                  }
                }}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FilterForm;
