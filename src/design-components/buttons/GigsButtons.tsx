
interface GigButtonProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  buttonIds: string[];
  buttonLabels: Record<string, string>;
}

const GigsButtons = ({ activeTab, setActiveTab, buttonIds, buttonLabels }: GigButtonProps) => {

  return (
    <div className="flex">
      {buttonIds.map((id, index) => {
        const isActive = activeTab === id;
        const roundedClass = 
          index === 0 ?
          'rounded-l-lg'
          : index === buttonIds.length - 1 ?
          'rounded-r-lg'
          : '';

          const buttonStyle = `border-2 border-primary h-[50px] hover:bg-[#ffece0] 
            font-inter hover:text-text_primary cursor-pointer px-2 ${
              isActive ? 'text-white bg-primary font-bold' : 'bg-white'
            } ${roundedClass}`;
          return (
            <button
              key={id}
              id={id}
              onClick={() => setActiveTab(id)}
              className={buttonStyle}
            >
              {buttonLabels[id]}
            </button>
          )
      })} 
    </div>
  )
}

export default GigsButtons;
