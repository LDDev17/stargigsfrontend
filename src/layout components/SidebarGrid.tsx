import { NavLink } from 'react-router';
import { useState } from 'react';

import TextButton from '../design components/buttons/TextButton';
import NotificationsButton from '../design components/buttons/NotificationsButton';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/orange_white_circle_only.png';
import ClientIcon from '../design components/ClientIcon';
import home_icon from '../assets/icons/home_icon.png';
import lightbulb from '../assets/icons/Tips_updates.png';
import messages from '../assets/icons/messages.png';
import calendar from '../assets/icons/calendar.png';
import dollar_sign from '../assets/icons/money.png';
import profile from '../assets/icons/profile.png';
import gear from '../assets/icons/settings.png';
import arrow from '../assets/icons/arrow-left.png';
import question_mark from '../assets/icons/question_mark.png';

interface NotificationProps {
  gigNotifications: number;
  messageNotifications: number;
  calendarNotifications: number;
  paymentNotifications: number;
  profileNotifications: number;
}

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [clientNotifications, setClientNotifications] = useState<NotificationProps>({
    gigNotifications: 1,
    messageNotifications: 0,
    calendarNotifications: 0,
    paymentNotifications: 2,
    profileNotifications: 0,
  })

  // will handle small arrow button on right
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const navStyle = 'flex space-x-2 items-center text-text_primary text-xs';

  return (

    <nav className='fixed left-0 w-[160px] py-4 h-screen '>
      {isExpanded ? (
      <div className='grid grid-cols-5 w-full h-full gap-4 border-r-2 border-gray-200'>
        <div className='col-span-5 px-4'>
          <img src={full_logo} alt="Star Gigs logo" />
        </div>
        <div className='px-4 row-start-2'>
          <ClientIcon />
        </div>
        <button 
          className='absolute -right-4 top-22'
          onClick={handleExpandClick}
        >
          <img src={arrow} alt="arrow for expanding menu" />
        </button>
        {/* only appears if logged in as a Performer */}
        <NavLink to='/' className='row-start-3 col-span-full px-4'>
          <TextButton
            buttonText='Switch to Performer View'
            textSize='text-xs'
            textColor='primary'
          />
        </NavLink>
        <div className='row-start-4 col-span-full grid grid-cols-1 gap-4 px-4'>
          <p className='text-text_primary text-xs'>Main</p>
          <div className='text-text_primary grid grid-rows-6 grid-columns-5 gap-4'>
            <div className='row-start-1 col-span-3'>
              <NavLink
                to='/Dashboard'
                className={navStyle}
              >
                <img src={home_icon} alt="home icon" />
                <p>Dashboard</p>
              </NavLink>
            </div>
            <div className='row-start-2 col-span-3'>
              <NavLink
                to='/Gigs'
                className={navStyle}
              >
                <img src={lightbulb} alt="lightbulb icon" />
                <p>Gigs</p>
              </NavLink>
            </div>
            <div className='row-start-2 col-start-5'>
              <NotificationsButton
                notificationNumber={clientNotifications.gigNotifications}
              />
            </div>
            <div className='row-start-3 col-span-3'>
              <NavLink
                to='/Messages'
                className={navStyle}
              >
                <img src={messages} alt="messages icon" />
                <p>Messages</p>
              </NavLink>
            </div>
            <div className='row-start-3 col-start-5'>
              <NotificationsButton
                notificationNumber={clientNotifications.messageNotifications}
              />
            </div>
            <div className='row-start-4 col-span-3'>
              <NavLink
                to='/Calendar'
                className={navStyle}
              >
                <img src={calendar} alt="calendar icon" />
                <p>Calendar</p>
              </NavLink>
            </div>
            <div className='row-start-4 col-start-5'>
              <NotificationsButton
                notificationNumber={clientNotifications.calendarNotifications}
              />
            </div>
            <div className='row-start-5 col-span-3'>
              <NavLink
                to='/Payments'
                className={navStyle}
              >
                <img src={dollar_sign} alt="dollar sign icon" />
                <p>Payments</p>
              </NavLink>
            </div>
            <div className='row-start-5 col-start-5'>
              <NotificationsButton
                notificationNumber={clientNotifications.paymentNotifications}
              />
            </div>
            <div className='row-start-6 col-span-3'>
              <NavLink
                to='/Profile'
                className={navStyle}
              >
                <img src={profile} alt="person icon" />
                <p>Profile</p>
              </NavLink>
            </div>
            <div className='row-start-6 col-start-5'>
              <NotificationsButton
                notificationNumber={clientNotifications.profileNotifications}
              />
            </div>
          </div>
        </div>
        <div className='row-start-5 row-end-10 col-span-3 px-4 flex flex-col justify-start'>
          <p className='text-text_primary text-xs my-4'>Settings</p>
          <div className='flex flex-col '>
            <div>
              <NavLink
                to='/Settings'
                className={navStyle}
              >
                <img src={gear} alt="gear icon" />
                <p>Settings</p>
              </NavLink>
            </div>
          </div>
        </div> 
        <div className='row-start-11 col-start-1 col-span-3 px-4'>
          <NavLink
            to='/Help'
            className={navStyle}
          >
            <img src={question_mark} alt="question mark icon" />
            <p>Help</p>
          </NavLink>
        </div>
      </div> 
      ) : (
      <div className='grid grid-cols-3 grid-rows-auto w-1/2 h-full gap-4 px-2 border-r-2 border-gray-200'>
        <div className='col-span-full flex justify-center items-center max-h-4 mt-2'>
          <img src={star_logo} alt="Star logo" className='h-8'/>
        </div>
        <div className='col-span-full'>
          <ClientIcon />
        </div>
        <button 
          className='absolute right-16 top-22 rotate-180'
          onClick={handleExpandClick}
        >
          <img src={arrow} alt="arrow for expanding menu" />
        </button>
        {/* only appears if logged in as a Performer */}
        <NavLink to='/' className='row-start-3 col-span-full px-4 max-h-6 flex items-center'>
          <TextButton
            buttonText='Switch'
            textSize='text-xs'
            textColor='primary'
          />
        </NavLink>
        <div className='row-start-4 col-span-full grid grid-cols-1'>
          <p className='text-text_primary text-center text-xs flex justify-center'>Main</p>
          <div className='col-span-full grid grid-cols-3 grid-rows-auto gap-2 text-text_primary'>
            <div className='row-start-1 col-start-2'>
              <NavLink
                to='/Dashboard'
                className={navStyle}
              >
                <img src={home_icon} alt="home icon" />
              </NavLink>
            </div>
            <div className='row-start-2 col-start-2'>
              <NavLink
                to='/Gigs'
                className={navStyle}
              >
                <img src={lightbulb} alt="lightbulb icon" />
              </NavLink>
            </div>
            <div className='row-start-2 col-start-3 flex justify-center items-center'>
              <NotificationsButton
                notificationNumber={clientNotifications.gigNotifications}
              />
            </div>
            <div className='row-start-3 col-start-2'>
              <NavLink
                to='/Messages'
                className={navStyle}
              >
                <img src={messages} alt="messages icon" />
              </NavLink>
              <div className='row-start-3 col-start-3 flex justify-center items-center'>
                <NotificationsButton
                  notificationNumber={clientNotifications.messageNotifications}
                />
              </div>
            </div>
            <div className='row-start-4 col-start-2'>
              <NavLink
                to='/Calendar'
                className={navStyle}
              >
                <img src={calendar} alt="calendar icon" />
              </NavLink>
            </div>
            <div className='row-start-4 col-start-3 flex justify-center items-center'>
              <NotificationsButton
                notificationNumber={clientNotifications.calendarNotifications}
              />
            </div>
            <div className='row-start-5 col-start-2'>
              <NavLink
                to='/Payments'
                className={navStyle}
              >
                <img src={dollar_sign} alt="dollar sign icon" />
              </NavLink>
            </div>
            <div className='row-start-5 col-start-3 flex justify-center items-center'>
              <NotificationsButton
                notificationNumber={clientNotifications.paymentNotifications}
              />
            </div>
            <div className='row-start-6 col-start-2'>
              <NavLink
                to='/Profile'
                className={navStyle}
              >
                <img src={profile} alt="person icon" />
              </NavLink>
            </div>
            <div className='row-start-6 col-start-3 flex justify-center items-center'>
              <NotificationsButton
                notificationNumber={clientNotifications.profileNotifications}
              />
            </div>
          </div>
        </div>
        <div className='row-start-5 col-span-full space-y-2'>
          <p className='text-text_primary text-center text-xs flex justify-center'>Settings</p>
          <div>
            <NavLink
              to='/Settings'
              className={`${navStyle} justify-center`}
            >
              <img src={gear} alt="gear icon" />
              
            </NavLink>
          </div>
        </div>
        <div className='row-start-11 col-span-full flex justify-center'>
          <NavLink
            to='/Help'
            className={`${navStyle} justify-center`}
          >
            <img src={question_mark} alt="question mark icon" />
            
          </NavLink>
        </div>
      </div>
      )}
    </nav>
  )
}

export default Sidebar;
