/// <reference types="vite-plugin-svgr/client" />
import { NavLink } from 'react-router';
import { JSX, useState } from 'react';
import { set } from 'date-fns';

import TextButton from '../design components/buttons/TextButton';
import NotificationsButton from '../design components/buttons/NotificationsButton';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/orange_white_circle_only.png';
import ClientIcon from '../design components/ClientIcon';
// import home_icon from '../assets/icons/home_icon.png';
// import HomeOrange from '../assets/icons/HomeOrange.png';
// import lightbulb from '../assets/icons/Tips_updates.png';
// import GigsOrange from '../assets/icons/GigsOrange.png';
// import messages from '../assets/icons/messages.png';
// import MessagesOrange from '../assets/icons/MessagesOrange.png';
// import calendar from '../assets/icons/calendar.png';
// import CalendarOrange from '../assets/icons/CalendarOrange.png';
// import dollar_sign from '../assets/icons/money.png';
// import DollarOrange from '../assets/icons/MoneyOrange.png';
// import profile from '../assets/icons/profile.png';
// import ProfileOrange from '../assets/icons/ProfileOrange.png';
// import gear from '../assets/icons/settings.png';
// import GearOrange from '../assets/icons/GearOrange.png';
import arrow from '../assets/icons/arrow-left.png';
// import question_mark from '../assets/icons/question_mark.png';

import Calendar from '../assets/svgs/calendar.svg?react';
import DollarSign from '../assets/svgs/dollarSign.svg?react';
import Gear from '../assets/svgs/gear.svg?react';
import Home from '../assets/svgs/home.svg?react';
import LightBulb from '../assets/svgs/lightBulb.svg?react';
import Message from '../assets/svgs/message.svg?react';
import Person from '../assets/svgs/person.svg?react';
import QuestionMark from '../assets/svgs/questionMark.svg?react';
import Star from '../assets/svgs/star.svg?react';

interface NotificationProps {
  gigNotifications: number;
  messageNotifications: number;
  calendarNotifications: number;
  paymentNotifications: number;
  profileNotifications: number;
}

interface SideBarProps {
  expanded: boolean,
  handleExpand: () => void,
}

const Sidebar: React.FC<SideBarProps> = ({expanded, handleExpand}) => {

  const [clientNotifications, setClientNotifications] = useState<NotificationProps>({
    gigNotifications: 1,
    messageNotifications: 0,
    calendarNotifications: 0,
    paymentNotifications: 2,
    profileNotifications: 0,
  })

  // const [dashboardHover, setDashboardHover] = useState(false);
  // const [gigsHover, setGigsHover] = useState(false);
  // const [messagesHover, setMessagesHover] = useState(false);
  // const [calendarHover, setCalendarHover] = useState(false);
  // const [paymentsHover, setPaymentsHover] = useState(false);
  // const [profileHover, setProfileHover] = useState(false);
  // const [settingsHover, setSettingsHover] = useState(false);
  const [bgColor, setBgColor] = useState<string>('white');

  
  const navStyle = 'flex justify-between items-center hover:text-primary text-xs';
  const leftDivStyle = 'flex justify-start space-x-2'

  return (

    <nav className={` ${expanded ? 'w-50': 'w-24'} bg-white h-screen z-30 py-4 relative flex flex-col justify-between px-4`}>
     
        <div>
          <img src={` ${expanded ? `${full_logo}` : `${star_logo}`}`} alt="Star Gigs logo" />
        </div>
        <ClientIcon />
        <button 
          className={`absolute -right-4 top-22 ${!expanded && "rotate-180"}`}
          onClick={handleExpand}
        >
          <img src={arrow} alt="" />
        </button>
        
        <div className={`flex flex-col space-y-2 ${!expanded ? 'justify-center' : ''}`}>
          <p className={`text-text_primary text-xs ${!expanded ? 'text-center' : ''}`}>Main</p>
          <div className='flex flex-col justify-around space-y-4 text-text_primary'>
              {/* Dashboard */}
              <NavLink
                to='/Dashboard'
                className={({isActive}) => 
                  `flex ${expanded ? 'justify-start' : 'justify-center'} items-center space-x-2 text-text_primary text-xs hover:text-primary ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                  <Home />
                  <span className={`${!expanded && 'hidden'}`}>Dashboard</span>
              </NavLink>
              {/* Gigs */}
              <NavLink
                to='/gigs'
                className={({isActive}) =>
                  `${navStyle} ${expanded ? 'justify-between' : 'justify-end'} ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                <div className={leftDivStyle}>
                  <LightBulb />
                  <span className={`${!expanded && 'hidden'}`}>Gigs</span>
                </div>
                <NotificationsButton
                  notificationNumber={clientNotifications.gigNotifications}
                />
              </NavLink>
              {/* Messages */}
              <NavLink
                to='/messages'
                className={({isActive}) =>
                  `${navStyle} ${expanded ? 'justify-between' : clientNotifications.messageNotifications ? 'justify-end' : 'justify-center'} ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                <div className={leftDivStyle}>
                  <Message />
                  <span className={`${!expanded && 'hidden'}`}>Messages</span>
                </div>
                <NotificationsButton
                  notificationNumber={clientNotifications.messageNotifications}
                />
              </NavLink>
              {/* Calendar */}
              <NavLink
                to='/calendar'
                className={({isActive}) =>
                  `${navStyle} ${expanded ? 'justify-between' : clientNotifications.calendarNotifications ? 'justify-end' : 'justify-center'} ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                <div className={leftDivStyle}>
                  <Calendar />
                  <span className={`${!expanded && 'hidden'}`}>Calendar</span>
                </div>
                <NotificationsButton
                  notificationNumber={clientNotifications.calendarNotifications}
                />
              </NavLink>
              {/* Payments */}
              <NavLink
                to='/payments'
                className={({isActive}) =>
                  `${navStyle} ${expanded ? 'justify-between' : clientNotifications.paymentNotifications ? 'justify-end space-x-2' : 'justify-center'} ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                <div className={leftDivStyle}>
                  <DollarSign />
                  <span className={`${!expanded && 'hidden'}`}>Payments</span>
                </div>
                <NotificationsButton
                  notificationNumber={clientNotifications.paymentNotifications}
                />
              </NavLink>
              {/* Profile */}
              <NavLink
                to='/profile'
                className={({isActive}) =>
                  `${navStyle} ${expanded ? 'justify-between' : clientNotifications.profileNotifications ? 'justify-end' : 'justify-center'} ${
                    isActive ? 'bg-[#feefe5]' : 'bg-white'
                  }`
                }
              >
                <div className={leftDivStyle}>
                  <Person />
                  <span className={`${!expanded && 'hidden'}`}>Profile</span>
                </div>
                <NotificationsButton
                  notificationNumber={clientNotifications.profileNotifications}
                />
              </NavLink>
          </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <p className={`text-text_primary text-xs text-center ${expanded ? 'text-start' : 'text-center'}`}>Settings</p>
          <div>
            <NavLink
              to='/Settings'
              className={({isActive}) => 
                `flex items-center space-x-2 text-text_primary text-xs hover:text-primary ${expanded ? 'justify-start' : 'justify-center'} ${
                  isActive ? 'bg-[#feefe5]' : 'bg-white'
                }`
              }
            >
              <Gear />
              <span className={`${!expanded && 'hidden'}`}>Settings</span>
            </NavLink>
            {expanded ? (
              <TextButton
                buttonText='Switch to Client View'
                textColor='primary'
                textSize='xs'
              />
            ) : (
              <div className='flex justify-center'>
                <TextButton
                  buttonText='Switch'
                  textColor='primary'
                  textSize='xs'
                />
              </div>
            )}           
          </div>
        </div>
        <div>
          <NavLink
            to='/help'
            className={({isActive}) => 
              `flex ${expanded ? 'justify-start' : 'justify-center'} items-center space-x-2 text-text_primary text-xs hover:text-primary ${
                isActive ? 'bg-[#feefe5]' : 'bg-white'
              }`
            }
          >
            <QuestionMark />
            <span className={`${!expanded && 'hidden'}`}>Help</span>
          </NavLink>
        </div>       
    </nav>
  )
}

export default Sidebar;
