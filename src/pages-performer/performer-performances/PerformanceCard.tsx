import Calendar from '../../assets/svgs/calendar.svg?react';
import PerformanceCardType from '../../types/PerformanceCardType';
import GigTypeIcon from '../../design components/gigTypeIcon';


// Reusable Gig Ad Card component for the performances section

const PerformanceCard = (
  {
    adId,
    title,
    description,
    gigType,
    location,
    hourlyRate,
    thumbnailUrl,
  }: PerformanceCardType
) => {

  return (
    <button 
      className="bg-white rounded-2xl border border-black/2 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)] 
       h-[400px] w-full max-w-[285px] mr-4 pb-4 cursor-pointer"
      onClick={() => console.log('Clicked on performance card with ID:', adId)}
      // TODO: Add onClick function to navigate to the performance preview page
      // or if client, navigate to the performance booking page
    >
      {/* Top half is thumbnail */}
      <section className="h-1/2 rounded-t-2xl overflow-hidden">
        <img src={thumbnailUrl} alt="image selected by the performer" 
          className='w-full h-full object-cover object-center'
        />
      </section>
      
      {/* Bottom half is information */}
      <section className="flex flex-col justify-around px-4 pt-2 space-y-4">
        <header className="flex justify-between items-center">
          {/* Left Side with gigType icons */}
          <div className='flex justify-start items-center space-x-2'>
            {gigType.map((type) => (
              <GigTypeIcon
                key={adId}
                gigType={type}
              />
            ))}
          </div>
          <p className="font-lato text-sm text-black">{location}</p>
        </header>
        
        {/* Performance Name */}
        <p className="font-semibold text-md font-inter text-left">{title}</p>

        {/* Name and Rate */}
        <div className="flex justify-between">
          {/* TODO: Get name from Cognito ID */}
          <p className="text-sm font-inter font-medium">Andrew Smith</p>
          <div className='flex items-center space-x-2'>
            <p className="font-lato text-sm">${hourlyRate}/HR</p>
            <Calendar className='bg-[#d2ffc2]/57 rounded-full p-1' />
          </div>
        </div>

        {/* Description */}
        <p className='text-text_secondary text-sm font-lato text-left'>{description}</p>
      </section>
    </button>
  )
}

export default PerformanceCard
