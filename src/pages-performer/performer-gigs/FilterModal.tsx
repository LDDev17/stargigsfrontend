import FilterForm from "./FilterForm";
import FilterModalProps from "../../types/FilterModalType";

const FilterModal = (props: FilterModalProps) => {

  const onClose = () => props.setIsOpen(false);

  const { id, isOpen, setIsOpen, ...filterFormProps } = props;

  return (
    <>
    {props.isOpen && 
      <div
        onClick={onClose}
        className="fixed z-50 top-1/6 left-1/2 max-w-[462px]
          rounded-xl shadow-[0px_4px_32px_0px_rgba(61,70,112,0.08)]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="max-w-600px w-full relative flex overflow-auto z-1 bg-white
            shadow-xl rounded h-full"
        >
          <div className="w-full h-full flex flex-col bg-opacity-0 border-2 border-black rounded-md">
            <div className="flex flex-col items-center text-center p-2">
              <FilterForm 
                {...filterFormProps}
              />
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default FilterModal;
