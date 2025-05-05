import FilterForm from "./FilterForm";

interface FilterModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
};

const FilterModal = (props: FilterModalProps) => {



  return (
    <>
    {props.isOpen && 
      <div
        onClick={props.onClose}
        className="fixed z-50 top-1/3 left-1/2 w-1/2  transform -translate-x-1/2 
          rounded-xl shadow-[0px_4px_32px_0px_rgba(61,70,112,0.08)]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="max-w-600px w-2/5 relative flex overflow-auto z-1 bg-slate-50
            shadow-xl rounded"
        >
          <div className="w-full h-full flex flex-col bg-opacity-0 border-2 border-black rounded-md">
            <div className="flex flex-col items-center text-center p-2">
              <FilterForm />
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default FilterModal;
