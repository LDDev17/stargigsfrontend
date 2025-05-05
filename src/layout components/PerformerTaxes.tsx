import { useState } from "react";

import TaxesButton from "../design components/buttons/TaxesButton";
import PayoutsRow from "../design components/PayoutsRow";
import SamplePayoutsData from "../SampleData/PayoutsData";
import PayoutProps from "../types/PayoutsType";

const taxButtonIds: string[] = [
  'taxpayer',
  'documents',
];

const taxButtonLabels: Record<string, string> = {
  taxpayer: 'Taxpayer',
  documents: 'Tax Documents',
};

const PerformerTaxes = () => {
  const [taxesData, setTaxesData] = useState<PayoutProps[]>(SamplePayoutsData);
  const [activeTaxTab, setActiveTaxTab] = useState<string>('taxpayer');

  return (
    <div className="space-y-4">
      <header className="flex justify-start space-x-8 border-b-1 border-neutral-400">
        {taxButtonIds.map((id, index) => (
          <TaxesButton 
            key={index}
            id={id}
            buttonLabels={taxButtonLabels}
            activeTaxTab={activeTaxTab}
            setActiveTaxTab={setActiveTaxTab}
          />
        ))}
      </header>
      {activeTaxTab === 'taxpayer' ?
        (
          <main className="flex flex-col space-y-8">
            <div>
              <p className="font-bold text-xl">Taxpayer Information</p>
              <p>Tax info is required for most countries/regions.
                <button className="underline cursor-pointer font-semibold">Learn more</button>
              </p>
            </div>
            <div className="flex flex-col space-y-2 w-3/4">
              {taxesData.map((tax, index) => (
                <PayoutsRow props={tax} key={index}/>
              ))}
            </div>
          </main>
        ) : (
          <main>
            <div>
              <p className="font-bold text-xl">Tax Document Information</p>
            </div>
          </main>
        )
      }
      
    </div>
  )
}

export default PerformerTaxes
