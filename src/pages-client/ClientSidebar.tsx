/// <reference types="vite-plugin-svgr/client" />
import { NavLink, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import NotificationsButton from '../design-components/buttons/NotificationsButton';
import { ExpandedContext } from '../Context/ExpandedContext';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/orange_white_circle_only.png';
import ClientIcon from '../design-components/ClientIcon';
import arrow from '../assets/icons/arrow-left.png';

import Calendar from '../assets/svgs/calendar.svg?react';
import DollarSign from '../assets/svgs/dollarSign.svg?react';
import Gear from '../assets/svgs/gear.svg?react';
import Home from '../assets/svgs/home.svg?react';
import LightBulb from '../assets/svgs/lightBulb.svg?react';
import Message from '../assets/svgs/message.svg?react';
import Person from '../assets/svgs/person.svg?react';
import QuestionMark from '../assets/svgs/questionMark.svg?react';
// import Star from '../assets/svgs/star.svg?react';

interface ClientNotificationProps {
  eventNotifications: number;
  messageNotifications: number;
  calendarNotifications: number;
  paymentNotifications: number;
  profileNotifications: number;
}

const ClientSidebar = () => {
  const context = useContext(ExpandedContext);

  if (!context) throw new Error('isExpanded must be used within a DataProvider');

  const { setIsExpanded } = context;

  const [clientNotifications, setClientNotifications] = useState<ClientNotificationProps | undefined>();

  useEffect(() => {
    setClientNotifications({
      eventNotifications: 1,
      messageNotifications: 0,
      calendarNotifications: 0,
      paymentNotifications: 2,
      profileNotifications: 0,
    })
  })

  if (!clientNotifications) {
    return;
  }

  const navStyle = 'flex justify-between items-center hover:text-primary text-xs py-2 -mx-4 pl-4';
  const leftDivStyle = 'flex justify-start items-center space-x-2'

  return (

    <nav className={` ${context.isExpanded ? 'w-50' : 'w-24'} bg-white h-screen z-30 py-4 
      fixed flex flex-col justify-between px-4 border-r-2 border-gray-200 font-inter`}
    >
      <div className='flex justify-start pb-4 flex-col'>
        <Link to='/' className={`flex justify-center border-b-2 border-gray-200 ${context.isExpanded ? 'pb-5' : 'pb-3'}`}>
          <img src={` ${context.isExpanded ? `${full_logo}` : `${star_logo}`}`} alt="Star Gigs logo" />
        </Link>

        <ClientIcon />

        {/* Expand Button */}
        <div className='flex justify-end -mr-7 max-h-8'>
          <button
            className={`${!context.isExpanded && "rotate-180"} size-6 -mt-2 cursor-pointer border-transparent border-0 rounded-md`}
            onClick={() => setIsExpanded(!context.isExpanded)}
          >
            <img src={arrow} alt="" />
          </button>
        </div>

        <main className={`flex flex-col space-y-1 -mt-2 ${!context.isExpanded ? 'justify-center' : ''}`}>
          <p className={`text-text_primary text-xs ${!context.isExpanded ? 'text-center' : ''}`}>Main</p>

          {/* Main Dashboard Links */}
          <div className='flex flex-col justify-around text-text_primary'>

            {/* Dashboard */}
            <NavLink
              to='/clientDashboard/main'
              className={({ isActive }) =>
                `flex ${context.isExpanded ? 'justify-start' : 'justify-center'} items-center space-x-2 -mx-4 pl-4 py-2 text-text_primary text-xs hover:text-clientPurple ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <Home />
              <span className={`${!context.isExpanded && 'hidden'}`}>Dashboard</span>
            </NavLink>

            {/* Events */}
            <NavLink
              to='/clientDashboard/events'
              className={({ isActive }) =>
                `${navStyle} ${context.isExpanded ? 'justify-between pr-2' : clientNotifications.eventNotifications ? 'justify-end pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <LightBulb />
                <span className={`${!context.isExpanded && 'hidden'}`}>Gigs</span>
              </div>
              <NotificationsButton
                notificationColor='bg-clientPurple'
                notificationNumber={clientNotifications.eventNotifications}
              />
            </NavLink>

            {/* Messages */}
            <NavLink
              to='/clientDashboard/messages'
              className={({ isActive }) =>
                `${navStyle} ${context.isExpanded ? 'justify-between pr-2' : clientNotifications.messageNotifications ? 'justify-end pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Message />
                <span className={`${!context.isExpanded && 'hidden'}`}>Messages</span>
              </div>
              <NotificationsButton
                notificationColor='bg-clientPurple'
                notificationNumber={clientNotifications.messageNotifications}
              />
            </NavLink>

            {/* Calendar */}
            <NavLink
              to='/clientDashboard/calendar'
              className={({ isActive }) =>
                `${navStyle} ${context.isExpanded ? 'justify-between pr-2' : clientNotifications.calendarNotifications ? 'justify-end pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Calendar />
                <span className={`${!context.isExpanded && 'hidden'}`}>Calendar</span>
              </div>
              <NotificationsButton
                notificationColor='bg-clientPurple'
                notificationNumber={clientNotifications.calendarNotifications}
              />
            </NavLink>

            {/* Payments */}
            <NavLink
              to='/clientDashboard/payment'
              className={({ isActive }) =>
                `${navStyle} ${context.isExpanded ? 'justify-between pr-2' : clientNotifications.paymentNotifications ? 'justify-end space-x-2 pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <DollarSign />
                <span className={`${!context.isExpanded && 'hidden'} whitespace-pre`}>  Payments</span>
              </div>
              <NotificationsButton
                notificationColor='bg-clientPurple'
                notificationNumber={clientNotifications.paymentNotifications}
              />
            </NavLink>

            {/* Profile */}
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                `${navStyle} ${context.isExpanded ? 'justify-between pr-2' : clientNotifications.profileNotifications ? 'justify-end pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Person />
                <span className={`${!context.isExpanded && 'hidden'}`}>Profile</span>
              </div>
              <NotificationsButton
                notificationColor='bg-clientPurple'
                notificationNumber={clientNotifications.profileNotifications}
              />
            </NavLink>
          </div>
        </main>

        {/* Settings Div */}
        <div className='flex flex-col space-y-2 mt-2 pt-2 border-t-2 border-gray-200'>
          <p className={`text-text_primary text-xs text-center ${context.isExpanded ? 'text-start' : 'text-center'}`}
          >
            Settings
          </p>
          <div className='flex flex-col space-y-2'>
            <NavLink
              to='/Settings'
              className={({ isActive }) =>
                `flex items-center space-x-2 text-text_primary text-xs hover:text-clientPurple 
                ${context.isExpanded ? 'justify-start pr-2' : 'justify-center'} ${isActive ? 'bg-clientBg' : 'bg-white'
                }`
              }
            >
              <Gear />
              <span className={`${!context && 'hidden'}`}>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
      <footer>
        <NavLink
          to='/help'
          className={({ isActive }) =>
            `flex ${context ? 'justify-start' : 'justify-center'} items-center space-x-2 text-text_primary text-xs hover:text-clientPurple ${isActive ? 'bg-clientBg' : 'bg-white'
            }`
          }
        >
          <QuestionMark />
          <span className={`${!context && 'hidden'}`}>Help</span>
        </NavLink>
      </footer>
    </nav>
  )
}

export default ClientSidebar;
