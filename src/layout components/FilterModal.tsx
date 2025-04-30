interface FilterModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
};

const FilterModal = (props: FilterModalProps) => {

  if (!props.isOpen) return (<></>);

  return (
    <div
      onClick={props.onClose}
      className="w-full flex z-1 pb-4 justify-center align-middle bg-gray-100 
        bg-opacity-0 overflow-y-auto max-h-full"
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
            form
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal;
