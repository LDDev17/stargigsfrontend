import { useNavigate } from "react-router-dom"

const CPayPerformerDetails = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/clientDashboard/payment/complete')
  };

  return (
    <div className="flex flex-col justify-around space-y-4">
      <header>
        <p className="font-jakarta font-bold text-md">
          Performer's Details
        </p>
      </header>
      <main className="font-inter text-sm">
        <table className="border-separate border-spacing-y-2 border-spacing-x-4 
          border-[#f2f4f7] border-1">
          <tbody>
            <tr>
              <td
                className="font-semibold text-[#111927]"
              >
                Performer Name
              </td>
              <td
                className="text-[#6c737f]"
              >
                John Doe
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer>
        <button
          className="bg-[#030325] rounded-[10px] cursor-pointer text-white 
            text-sm font-extrabold flex justify-center items-center py-2 px-12"
          onClick={handleButtonClick}
        >
          Next
        </button>
      </footer>
    </div>
  )
}

export default CPayPerformerDetails
