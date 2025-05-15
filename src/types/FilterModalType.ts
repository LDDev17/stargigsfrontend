import SelectOptionType from "./SelectedOptionType";

interface FilterModalProps {
  activeGigTab: string;
  id? : string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  gigTypeData: SelectOptionType[];
  selectedGigType: SelectOptionType[];
  setSelectedGigType: React.Dispatch<React.SetStateAction<SelectOptionType[]>>;
  managerData: SelectOptionType[];
  selectedManager: SelectOptionType | undefined;
  setSelectedManager: React.Dispatch<React.SetStateAction<SelectOptionType | undefined>>;
  locationData: SelectOptionType[];
  selectedLocation: SelectOptionType | undefined;
  setSelectedLocation: React.Dispatch<React.SetStateAction<SelectOptionType | undefined>>;
  statusData: SelectOptionType[];
  selectedStatus: SelectOptionType | undefined;
  setSelectedStatus: React.Dispatch<React.SetStateAction<SelectOptionType | undefined>>;
  amountFrom: number;
  setAmountFrom: React.Dispatch<React.SetStateAction<number>>;
  amountTo: number;
  setAmountTo: React.Dispatch<React.SetStateAction<number>>;
}

export default FilterModalProps;