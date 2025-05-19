/// <reference types="vite-plugin-svgr/client" />
import { NavLink, Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import TextButton from '../design components/buttons/TextButton';
import NotificationsButton from '../design components/buttons/NotificationsButton';
import { ExpandedContext } from '../Context/ExpandedContext';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/orange_white_circle_only.png';
import ClientIcon from '../design components/ClientIcon';
import PerformerIcon from '../design components/PerformerIcon';

import Calendar from '../assets/svgs/calendar.svg?react';
import DollarSign from '../assets/svgs/dollarSign.svg?react';
import Gear from '../assets/svgs/gear.svg?react';
import Home from '../assets/svgs/home.svg?react';
import LightBulb from '../assets/svgs/lightBulb.svg?react';
import Message from '../assets/svgs/message.svg?react';
import Person from '../assets/svgs/person.svg?react';
import QuestionMark from '../assets/svgs/questionMark.svg?react';
import Star from '../assets/svgs/star.svg?react';
import Caret from '../assets/svgs/caret.svg?react';

interface NotificationProps {
  performanceNotifications: number;
  gigNotifications: number;
  messageNotifications: number;
  calendarNotifications: number;
  paymentNotifications: number;
  profileNotifications: number;
}

interface sidebarProps {
  viewClient: boolean,
  handleViewClient: () => void,
  textColor: string,
  textHoverFrom: string,
  textHoverTo: string,
  bgColor: string,
  notificationColor: string,
}

const PerformerSidebar = (
  {
    viewClient, 
    handleViewClient, 
    textColor, 
    textHoverFrom, 
    textHoverTo, 
    bgColor,
    notificationColor,
  }: sidebarProps) => {
  const context = useContext(ExpandedContext);

  if (!context) throw new Error('isExpanded must be used within a DataProvider');
  // isExpanded is part of the context object and is a boolean that determines
  // if the sidebar and main content are expanded or not
  // setIsExpanded is a function that sets the isExpanded state
  const { isExpanded, setIsExpanded } = context;

  // Set the color of the text based on whether the performer is in client view or not
  
  const [performerNotifications, setPerformerNotifications] = useState<NotificationProps>({
    performanceNotifications: 1,
    gigNotifications: 1,
    messageNotifications: 0,
    calendarNotifications: 0,
    paymentNotifications: 2,
    profileNotifications: 0,
  })

  // useEffect that will count the number of notifications of each gig type and 
  // create an object with those totals.
  // TODO: come back and fix this to use the actual data from the API
  useEffect(() => {
    setPerformerNotifications({
      performanceNotifications: 1,
      gigNotifications: 1,
      messageNotifications: 0,
      calendarNotifications: 0,
      paymentNotifications: 2,
      profileNotifications: 0,
    })
  }, []);
  
 
  const navStyle = `flex justify-between items-center hover:${textColor} text-xs py-2 -mx-4 pl-4`;
  const leftDivStyle = 'flex justify-start items-center space-x-2'

  return (

    <nav className={` ${isExpanded ? 'w-50': 'w-24'} bg-white h-screen z-30 py-4 
      fixed flex flex-col justify-between px-4 border-r-2 border-gray-200 font-inter`}
    >
      <div className='flex justify-start pb-4 flex-col'>
        <Link to='/' className={`flex justify-center border-b-2 border-gray-200 ${isExpanded? 'pb-5' : 'pb-3'}`}>
          <img src={` ${isExpanded ? `${full_logo}` : `${star_logo}`}`} alt="Star Gigs logo" />
        </Link>
        
        {/* Renders Client Icon if Performer is in ClientView and PerformerIcon if not */}
        {viewClient ? (
          <ClientIcon />
        ) : (
          <PerformerIcon />
        )}

        {/* Expand Button */}
        <div className='flex justify-end -mr-7 max-h-8'>
          <button
            className={`${!isExpanded && "rotate-180"} size-6 -mt-2 cursor-pointer 
              border-transparent border-0 rounded-md ${textColor} ${bgColor} flex 
              justify-center items-center`
            }
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Caret className='rotate-90'/>
          </button>
        </div>
        
        <main className={`flex flex-col space-y-1 -mt-2 ${!isExpanded ? 'justify-center' : ''}`}>
          <p className={`text-text_primary text-xs ${!isExpanded ? 'text-center' : ''}`}>Main</p>
          
          {/* Main Dashboard Links */}
          <div className='flex flex-col justify-around text-text_primary'>
            
            {/* Dashboard */}
            <NavLink
              to='/performerDashboard/main'
              className={({isActive}) =>
                `flex ${isExpanded ? 'justify-start' : 'justify-center'} 
                items-center space-x-2 -mx-4 pl-4 py-2 text-text_primary text-xs 
                hover:${textColor} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
                <Home />
                <span className={`${!isExpanded && 'hidden'}`}>Dashboard</span>
            </NavLink>

            {/* Performances */}
            {!viewClient && 
            <NavLink
              to='/performerDashboard/performances'
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : performerNotifications.performanceNotifications ? 
                  'justify-end pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Star />
                <span className={`${!isExpanded && 'hidden'}`}>Performances</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.performanceNotifications}
              />
            </NavLink>
            }

            {/* Gigs */}
            <NavLink
              to='/performerDashboard/gigs' 
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : performerNotifications.gigNotifications ? 
                  'justify-end pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <LightBulb />
                <span className={`${!isExpanded && 'hidden'}`}>Gigs</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.gigNotifications}
              />
            </NavLink>

            {/* Messages */}
            <NavLink
              to='/messages'
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : performerNotifications.messageNotifications ? 
                  'justify-end pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Message />
                <span className={`${!isExpanded && 'hidden'}`}>Messages</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.messageNotifications}
              />
            </NavLink>

            {/* Calendar */}
            <NavLink
              to='/calendar'
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : performerNotifications.calendarNotifications ? 'justify-end pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Calendar />
                <span className={`${!isExpanded && 'hidden'}`}>Calendar</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.calendarNotifications}
              />
            </NavLink>

            {/* Payouts */}
            <NavLink
              to='/performerDashboard/payouts'
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : 
                  performerNotifications.paymentNotifications ? 'justify-end space-x-2 pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <DollarSign />
                <span className={`${!isExpanded && 'hidden'} whitespace-pre`}>  Payouts</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.paymentNotifications}
              />
            </NavLink>

            {/* Profile */}
            <NavLink
              to='/profile'
              className={({isActive}) =>
                `${navStyle} ${isExpanded ? 'justify-between pr-2' : performerNotifications.profileNotifications ? 'justify-end pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <div className={leftDivStyle}>
                <Person />
                <span className={`${!isExpanded && 'hidden'}`}>Profile</span>
              </div>
              <NotificationsButton
                notificationColor={notificationColor}
                notificationNumber={performerNotifications.profileNotifications}
              />
            </NavLink>
          </div>
        </main>

        {/* Settings Div */}
        <div className='flex flex-col space-y-2 mt-2 pt-2 border-t-2 border-gray-200'>
          <p className={`text-text_primary text-xs text-center ${isExpanded ? 'text-start' : 'text-center'}`}>Settings</p>
          <div className='flex flex-col space-y-2'>
            <NavLink
              to='/Settings'
              className={({isActive}) =>
                `flex items-center space-x-2 text-text_primary text-xs hover:${textColor} ${isExpanded ? 'justify-start pr-2' : 'justify-center'} ${
                  isActive ? bgColor : 'bg-white'
                }`
              }
            >
              <Gear />
              <span className={`${!isExpanded && 'hidden'}`}>Settings</span>
            </NavLink>
            {isExpanded ? (
              <TextButton
                buttonText={` ${viewClient ? 'Switch to Performer View' : 'Switch to Client View'}`}
                viewClient={viewClient}
                textSize='text-xs'
                textColor={textColor}
                textHoverFrom={textHoverFrom}
                textHoverTo={textHoverTo}
                onClick={handleViewClient}
              />
            ) : (
              <div className='flex justify-center'>
                <TextButton
                  buttonText='Switch'
                  viewClient={viewClient}
                  textSize='text-xs'
                  textColor={textColor}
                  textHoverFrom={textHoverFrom}
                  textHoverTo={textHoverTo}
                  onClick={handleViewClient}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>
        <NavLink
          to='/help'
          className={({isActive}) => 
            `flex ${context ? 'justify-start' : 'justify-center'} items-center space-x-2 text-text_primary text-xs hover:text-primary ${
              isActive ? bgColor : 'bg-white'
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

export default PerformerSidebar;
