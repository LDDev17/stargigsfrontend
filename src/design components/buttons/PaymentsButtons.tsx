interface PaymentButonProps {
  activeTab: string;
  seActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const PaymentsButtons = ({ activeTab, setActiveTab }: PaymentButonProps) => {
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
            cursor-pointer px-2 ${isActive ? 'text-white bg-primary font-bold' : 'bg-white'} ${roundedClass}`;
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

export default PaymentsButtons
