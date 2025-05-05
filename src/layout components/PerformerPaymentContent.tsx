import { useState, useEffect, useRef } from "react"

import PaymentProps from "../types/PaymentsType";
import samplePaymentData from "../SampleData/PaymentData";
import TableFooter from "./TableFooter";
import PaymentTableRow from "../design components/PaymentTableRow";
import EarningReportTile from "../design components/EarningReportTile";
import EarningTileProps from "../types/EarningsTileProps";
import SampleEarningsData from "../SampleData/EarningsData";
import PerformerPayouts from "./PerformerPayouts";
import PerformerTaxes from "./PerformerTaxes";

import Caret from '../assets/svgs/caret.svg?react';
import Sort from '../assets/svgs/sort.svg?react';

interface PerformerPaymentContentProps {
  activeTab: string;
};

const timePeriodOptions = [
  'This Month',
  'Next Month', 
  'Next 3 Months'
];

const PerformerPaymentContent = ({ activeTab }: PerformerPaymentContentProps) => {
  const [tableData, setTableData] = useState<PaymentProps[]>(samplePaymentData);
  const [displayData, setDisplayData] = useState<PaymentProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [timePeriod, setTimePeriod] = useState<string>('This Month');
  const [buttonIsActive, setButtonIsActive] = useState<boolean>(false);
  const [tableCaption, setTableCaption] = useState<string>('Payment History');
  const [earningsData, setEarningsData] = useState<EarningTileProps[]>(SampleEarningsData);

  const items_per_page: number = 7;
  
  const handleTimeSelection = (value: string) => (e: React.MouseEvent<HTMLLIElement>) => {
    setTimePeriod(value)
    setButtonIsActive(false)
  }

  const handleTimeButton = () => {
    setButtonIsActive(!buttonIsActive)
  }

  useEffect(() => {
    const start = (currentPage - 1) * items_per_page;
    const end = currentPage * items_per_page;
    setDisplayData(tableData.slice(start, end));
  }, [currentPage, tableData]);

  useEffect(() => {
    if (activeTab === 'history') {
      setTableCaption('Payment History')
    } else if (activeTab === 'reports') {
      setTableCaption('Earning Reports')
    } else if (activeTab === 'payouts') {
      setTableCaption('Payouts')
    } else setTableCaption('Taxes')
  }, [activeTab]);

  let dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setButtonIsActive(false);
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return() => {
      document.removeEventListener("mousedown", clickHandler)
    }
  });

  const thStyling: string = 'font-normal text-left whitespace-nowrap  gap-1';

  return (
    <div className="flex flex-col justify-around bg-[#fbfbfb] p-2">
      <header className="flex justify-between py-4">
        <p className="text-sm font-semibold">{tableCaption}</p>
        <div className="relative">
          <button
            className="flex items-center whitespace-pre font-semibold text-xs cursor-pointer"
            onClick={handleTimeButton}
          >
            {timePeriod} <Caret />
          </button>
          {buttonIsActive &&
            <ul className="absolute w-24">
              {timePeriodOptions.map((value, index) => (
                <li
                  key={index}
                  value={value}
                  onClick={handleTimeSelection(value)}
                  className="cursor-pointer text-sm hover:text-primary"
                >
                    {value}
                </li>
              ))}
            </ul>}
        </div>
      </header>
      {activeTab === 'history' ? 
        (
          <>
            <table className="bg-[#fbfbfb] border-separate border-spacing-y-1 border-spacing-x-2">
              <thead>
                <tr>
                  <th className={thStyling}>
                    Status  <button className="cursor-pointer"><Sort /></button>
                  </th>
                  <th className={thStyling}>Amount</th>
                  <th className={thStyling}>Event</th>
                  <th className={thStyling}>Event Manager</th>
                  <th className={thStyling}>
                    Date & Time  <button className="cursor-pointer"><Sort /></button>
                  </th>
                  <th className={thStyling}>
                    Gig Type  <button className="cursor-pointer"><Sort /></button>
                  </th>
                  <th className={thStyling}>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((Row, index) => (
                  <PaymentTableRow key={index} props={Row} />
                ))}
              </tbody>
            </table>
            <footer>
              <TableFooter 
                items_per_page={items_per_page}
                tableData={tableData}
                displayData={displayData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </footer>
          </>
        ) : activeTab === 'reports' ? (
          <div className="flex justify-start space-x-4">
            {earningsData.map((tile, index) => (
              <EarningReportTile 
                key={index}
                props={tile}
              />
            ))}
            
          </div>
        ) : activeTab === 'payouts' ? (
          <PerformerPayouts />
        ) : (
          <PerformerTaxes />
        )
      }
    </div>
  )
}

export default PerformerPaymentContent
