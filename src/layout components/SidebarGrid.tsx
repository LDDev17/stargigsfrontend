import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';

import TextButton from '../design components/buttons/TextButton';
import NotificationsButton from '../design components/buttons/NotificationsButton';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/orange_white_circle_only.png';
import ClientIcon from '../design components/ClientIcon';
import home_icon from '../assets/icons/home_icon.png';
import HomeOrange from '../assets/icons/HomeOrange.png';
import lightbulb from '../assets/icons/Tips_updates.png';
import GigsOrange from '../assets/icons/GigsOrange.png';
import messages from '../assets/icons/messages.png';
import MessagesOrange from '../assets/icons/MessagesOrange.png';
import calendar from '../assets/icons/calendar.png';
import CalendarOrange from '../assets/icons/CalendarOrange.png';
import dollar_sign from '../assets/icons/money.png';
import DollarOrange from '../assets/icons/MoneyOrange.png';
import profile from '../assets/icons/profile.png';
import ProfileOrange from '../assets/icons/ProfileOrange.png';
import gear from '../assets/icons/settings.png';
import GearOrange from '../assets/icons/GearOrange.png';
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
  const [dashboardHover, setDashboardHover] = useState(false);
  const [gigsHover, setGigsHover] = useState(false);
  const [messagesHover, setMessagesHover] = useState(false);
  const [calendarHover, setCalendarHover] = useState(false);
  const [paymentsHover, setPaymentsHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  const [settingsHover, setSettingsHover] = useState(false);
  const [bgColor, setBgColor] = useState<string>('white');

  // will handle small arrow button on right
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const changeBg = () => {
    setBgColor('[#FEEFE5]')
    setTimeout(() => {
      setBgColor('white');
    }, 500)
  }

  const navStyle = `flex space-x-2 items-center text-text_primary text-xs hover:text-primary bg-${bgColor}`;

  return (
    <>
      {isExpanded ? (
    <nav className='fixed left-0 w-[200px] py-4 h-screen ml-4'>
      <div className='grid grid-cols-5 w-full h-full gap-2 border-r-2 border-gray-200'>
        <div className='col-span-5 pl-2 mr-2 h-12 border-b-2 border-[#F6F6F6]'>
          <img src={full_logo} alt="Star Gigs logo" className='hover: -primary'/>
        </div>
        <div className='row-start-2 max-h-8'>
          <ClientIcon />
        </div>
        <button 
          className='relative -right-36 top-8 size-6'
          onClick={handleExpandClick}
        >
          <img src={arrow} alt="arrow for expanding menu" />
        </button>
        
        <div className='row-start-3 col-span-full grid grid-cols-1 gap-2'>
          <p className='text-text_primary text-xs'>Main</p>
          <div className='text-text_primary grid grid-rows-6 grid-columns-5 gap-4'>
            <div className='row-start-1 col-span-3'>
              <NavLink
                to='/Dashboard'
                className={navStyle}
                onMouseOver={() => setDashboardHover(true)}
                onMouseOut={() => setDashboardHover(false)}
                onClick={() => changeBg}
              >
                {dashboardHover? (
                  <img src={HomeOrange} alt='orange home icon' />
                ) : (
                  <img src={home_icon} alt="home icon" />
                )}
                
                <p>Dashboard</p>
              </NavLink>
            </div>
            <div className='row-start-2 col-span-3'>
              <NavLink
                to='/Gigs'
                className={navStyle}
                onMouseOver={() => setGigsHover(true)}
                onMouseOut={() => setGigsHover(false)}
                onClick={() => changeBg}
              >
                {gigsHover?
                  (
                    <img src={GigsOrange} alt='orange lightbulb icon' />
                  ) : (
                    <img src={lightbulb} alt="lightbulb icon" />
                  )
                }
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
                onMouseOver={() => setMessagesHover(true)}
                onMouseOut={() => setMessagesHover(false)}
                onClick={() => changeBg}
              >
                {messagesHover? (
                  <img src={MessagesOrange} alt="orange messages icon" />
                ) : (
                  <img src={messages} alt="messages icon" />
                )}
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
                onMouseOver={() => setCalendarHover(true)}
                onMouseOut={() => setCalendarHover(false)}
                onClick={() => changeBg}
              >
                {calendarHover? (
                  <img src={CalendarOrange} alt="orange calendar icon" />
                ) : (
                  <img src={calendar} alt="calendar icon" />
                )}
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
                onMouseOver={() => setPaymentsHover(true)}
                onMouseOut={() => setPaymentsHover(false)}
                onClick={() => changeBg}
              >
                {paymentsHover? (
                  <img src={DollarOrange} alt="orange dollar icon" />
                ) : (
                  <img src={dollar_sign} alt="dollar sign icon" />
                )}
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
                onMouseOver={() => setProfileHover(true)}
                onMouseOut={() => setProfileHover(false)}
                onClick={() => changeBg}
              >
                {profileHover?
                (
                  <img src={ProfileOrange} alt="orange profile icon" />
                ) : (
                  <img src={profile} alt="profile icon" />
                )
                }
                
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
        <div className='row-start-4 row-end-10 col-span-full flex flex-col justify-start mr-2 border-t-2 border-[#F6F6F6]'>
          <p className='text-text_primary text-xs my-4'>Settings</p>
          <div className='flex flex-col w-full space-y-2'>
            <div>
              <NavLink
                to='/Settings'
                className={navStyle}
                onMouseOver={() => setSettingsHover(true)}
                onMouseOut={() => setSettingsHover(false)}
                onClick={() => changeBg}
              >
                {settingsHover? (
                  <img src={GearOrange} alt="orange gear icon" />
                ) : (
                  <img src={gear} alt="gear icon" />
                )}
                <p>Settings</p>
              </NavLink>
            </div>
            {/* only appears if logged in as a Performer */}
            <NavLink to='/' className='row-start-3 col-span-full'>
              <TextButton
                buttonText='Switch to Performer View'
                textSize='text-xs'
                textColor='primary'
                />
            </NavLink>
          </div>
        </div> 
        <div className='row-start-11 col-start-1 col-span-3'>
          <NavLink
            to='/Help'
            className={navStyle}
            onClick={() => changeBg}
          >
            <img src={question_mark} alt="question mark icon" />
            <p>Help</p>
          </NavLink>
        </div>
      </div> 
      </nav>
      ) : (
        // collapsed sidebar
      <nav className='fixed left-0 w-[80px] -mt-4 h-screen'>
        {/* collapse/expand button */}
        <button 
          className='relative -right-17 top-34 size-6 rotate-180'
          onClick={handleExpandClick}
        >
          <img src={arrow} alt="arrow for expanding menu"/>
        </button>
        {/* grid for whole sidebar */}
        <div className='grid grid-cols-3 grid-rows-auto h-full gap-2 px-2 border-r-2 border-gray-200'>
          <div className='col-span-full flex justify-center items-center h-10  mt-2 border-b-2 border-[#F6F6F6]'>
            <img src={star_logo} alt="Star logo" className='h-8'/>
          </div>
          <div className='row-start-2 col-span-full h-6'>
            <ClientIcon />
          </div>
          <div className='row-start-3 col-span-full grid grid-cols-1'>
            <p className='text-text_primary text-center text-xs flex justify-center'>Main</p>
            <div className='col-span-full grid grid-cols-3 grid-rows-auto gap-y-4 gap-x-2 text-text_primary'>
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
          <div className='row-start-4 col-span-full border-b-2 border-[#F6F6F6] w-full h-2'></div>
          <div className='row-start-5 col-span-full space-y-2'>
            <p className='text-text_primary text-center text-xs flex justify-center'>Settings</p>
            <div className='flex flex-col space-y-4'>
              <NavLink
                to='/Settings'
                className={`${navStyle} justify-center`}
              >
                <img src={gear} alt="gear icon" />
                
              </NavLink>
              {/* only appears if logged in as a Performer */}
              <NavLink to='/' className='row-start-3 col-span-full px-4 h-8 flex items-center'>
                <TextButton
                  buttonText='Switch'
                  textSize='text-xs'
                  textColor='primary'
                />
              </NavLink>
            </div>
          </div>
          <div className='row-start-9 col-span-full flex justify-center'>
            <NavLink
              to='/Help'
              className={`${navStyle} justify-center`}
            >
              <img src={question_mark} alt="question mark icon" />
              
            </NavLink>
          </div>
        </div>
    </nav>
)}
    </>
  )
}

export default Sidebar;
