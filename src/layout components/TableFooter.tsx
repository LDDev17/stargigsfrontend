import { useState } from "react";

const TableFooter = () => {
  const [footerData, setFooterData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayData, setDisplayData] = useState([]);
  const items_per_page = 10;

  const goPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1)
  }

  const goNextPage = () => {
    if (currentPage === footerData.length / items_per_page) return;
    setCurrentPage((prev) => prev + 1)
  }

  const handlePageChange = (e) => {
    setCurrentPage(e.target.value)
  }

  return (
    <div>
      
    </div>
  )
}

export default TableFooter
