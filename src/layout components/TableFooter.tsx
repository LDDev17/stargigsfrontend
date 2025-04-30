
import GigsTableType from "../types/GigsTableType";

import Caret from '../assets/svgs/caret.svg?react';

interface FooterProps {
  items_per_page: number;
  tableData: GigsTableType[];
  displayData: GigsTableType[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TableFooter = ({ items_per_page, tableData, displayData, currentPage, setCurrentPage }: FooterProps) => {


  const goPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1)
  }

  const goNextPage = () => {
    if (currentPage >= Math.ceil(tableData.length / items_per_page)) return;
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className="flex justify-between">
      {/* Left Side */}
      <div className="flex justify-around space-x-8">
        <button
          className="whitespace-pre text-gray-600 flex justify-start items-center text-md cursor-pointer"
          onClick={goPrevPage}
        >
          <Caret className="rotate-90"/>  Previous
        </button>
        
        {Array.from({ length: Math.ceil(tableData.length / items_per_page) })
        .map((e, i) => i + 1)
        .map((val) => {
          return (
            <button 
              key={val} 
              onClick={() => setCurrentPage(val)}
              className={`${val === currentPage && 'bg-[#ffece0] text-primary rounded-full disabled'} px-2 cursor-pointer`}
            >
              {val}
            </button>
          )
        })}
        <button
          className="whitespace-pre text-gray-600 flex justify-start items-center text-md cursor-pointer"
          onClick={goNextPage}
        >
          Next  <Caret className="rotate-270"/>  
        </button>

      </div>

      {/* Right Side */}
      <div>
        <p>Showing {displayData.length} of {tableData.length} results</p>
      </div>
    </div>
  )
}

export default TableFooter
