import { ExpandedContext } from "../../Context/ExpandedContext"
import { useContext } from "react"

const PerformanceAdd = () => {
  const context = useContext(ExpandedContext);
  if (!context) throw new Error('PerformanceAdd must be used within a DataProvider');
  const { isExpanded } = context;
  
  return (
    <div
      className={`bg-white rounded-xl mt-24 mb-4 flex flex-col grow space-y-4 
          p-8 font-inter w-full min-h-screen ${isExpanded ? 'ml-60' : 'ml-32'}
        `}
    >
      
    </div>
  )
}

export default PerformanceAdd
