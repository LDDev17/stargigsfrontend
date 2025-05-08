import NotificationProps from '../types/NotificationType';

import Message from '../assets/svgs/message.svg?react';
import Lightbulb from '../assets/svgs/lightBulb.svg?react';
import Bell from '../assets/svgs/bell_important.svg?react';
import Clock from '../assets/svgs/alarm_clock_checked.svg?react';
import Money from '../assets/svgs/dollarSign.svg?react';



const NotificationCard = ({ type, text, date }: NotificationProps) => {

  return (
    <button 
      className='flex items-start justify-start space-x-2'
    >
      {/* Left Side Icon */}
      
        {type === 'gigs'? (
          <div className='p-1 rounded-full bg-[#beffd0]'>
            <Clock className='size-4'/>
          </div>
        ) : type === 'profile' ? (
          <div className='p-1 rounded-full bg-[#ffdcdc]'>
            <Bell className='size-4'/>
          </div>
        ) : type === 'message' ? (
          <div className='p-1 rounded-full bg-[#e3edff]'>
            <Message className='size-4'/>
          </div>
        ) : type === 'calendar' ? (
          <div className='p-1 rounded-full bg-[#ffece0]'>
            <Lightbulb className='size-4'/>
          </div>
        ) : (
          <div>
            <Money />
          </div>
        )}

      
      {/* Right Side */}
      <div className='flex flex-col justify-around items-start'>
        <p>{text}</p>
        <p className='text-xs text-black opacity-40'>{date}</p>
      </div>
      
    </button>
  )
}

export default NotificationCard
