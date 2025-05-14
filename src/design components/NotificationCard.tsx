import NotificationProps from '../types/NotificationType';

import Message from '../assets/svgs/message.svg?react';
import Calendar from '../assets/svgs/calendar.svg?react';
import Bell from '../assets/svgs/bell_important.svg?react';
import Money from '../assets/svgs/dollarSign.svg?react';
import LightBulb from '../assets/svgs/lightBulb.svg?react';



const NotificationCard = ({ type, text, date }: NotificationProps) => {

  return (
    <button 
      className='flex items-start justify-start space-x-2 font-lato'
    >
      {/* Left Side Icon */}
      
        {type === 'gigs'? (
          <div className='p-1 rounded-full bg-[#00c7be]/50'>
            <LightBulb className='size-4'/>
          </div>
        ) : type === 'profile' ? (
          <div className='p-1 rounded-full bg-[#ffdcdc]'>
            <Bell className='size-4'/>
          </div>
        ) : type === 'message' ? (
          <div className='p-1 rounded-full bg-[#007aff]/50'>
            <Message className='size-4'/>
          </div>
        ) : type === 'calendar' ? (
          <div className='p-1 rounded-full bg-primary/50'>
            <Calendar className='size-4'/>
          </div>
        ) : (
          <div className='p-1 rounded-full bg-[#b352de]/50'>
            <Money />
          </div>
        )}

      
      {/* Right Side */}
      <div className='flex flex-col justify-around items-start text-sm'>
        <p>{text}</p>
        <p className='text-xs text-black opacity-40'>{date}</p>
      </div>
      
    </button>
  )
}

export default NotificationCard
