import BarGraph from '../../assets/svgs/bar_graph.svg?react';
interface TaxesButtonType {
  id: string;
  buttonLabels: Record<string, string>;
  activeTaxTab: string;
  setActiveTaxTab: React.Dispatch<React.SetStateAction<string>>;
}

const TaxesButton = (tax: TaxesButtonType) => {
  return (
    <button 
      className={`flex items-center space-x-2 cursor-pointer 
        ${tax.activeTaxTab === tax.id && 'border-b-1 border-primary'}
      `}
      key={tax.id}
      id={tax.id}
      onClick={() => tax.setActiveTaxTab((tax.id))}
    >
      <BarGraph /><span>{tax.buttonLabels[tax.id]}</span>
    </button>
  )
}

export default TaxesButton
