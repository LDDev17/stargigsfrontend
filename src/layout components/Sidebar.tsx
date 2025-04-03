import { NavLink } from 'react-router';

import routes from '../config/routes';
import TextButton from '../design components/buttons/TextButton';

import full_logo from '../assets/logos/logo_md_orange.png';
import star_logo from '../assets/logos/logo_md_orange.png';
import PerformerIcon from '../design components/PerformerIcon';
import home_icon from '../assets/icons/home_icon.png';
import lightbulb from '../assets/icons/Tips_updates.png';
import messages from '../assets/icons/messages.png';
import calendar from '../assets/icons/calendar.png';
import dollar_sign from '../assets/icons/money.png';
import profile from '../assets/icons/profile.png';
import gear from '../assets/icons/settings.png';
import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded)
  }

  const navStyle = 'text-text_primary text-xs';

  return (

    <nav className='flex flex-col fixed left-0'>
      {isExpanded ? (
      <div>
        <div>
          <img src={full_logo} alt="Star Gigs logo" />
        </div>
        <PerformerIcon />
        <TextButton buttonText='Switch to Client View' />
        <div>
          <p className='text-text_primary'>Main</p>
          <div className='flex flex-col justify-evenly text-text_primary'>
            <NavLink
              to='/Dashboard'
              className={navStyle}
            >
              <img src={home_icon} alt="home icon" />
              <p>Dashboard</p>
            </NavLink>
            <NavLink
              to='/Gigs'
              className={navStyle}
            >
              <img src={lightbulb} alt="lightbulb icon" />
              <p>Gigs</p>
            </NavLink>
            <NavLink
              to='/Messages'
              className={navStyle}
            >
              <img src={messages} alt="messages icon" />
              <p>Messages</p>
            </NavLink>
            <NavLink
              to='/Calendar'
              className={navStyle}
            >
              <img src={calendar} alt="calendar icon" />
              <p>Calendar</p>
            </NavLink>
            <NavLink
              to='/Payments'
              className={navStyle}
            >
              <img src={dollar_sign} alt="dollar sign icon" />
              <p>Payments</p>
            </NavLink>
            <NavLink
              to='/Profile'
              className={navStyle}
            >
              <img src={profile} alt="person icon" />
              <p>Profile</p>
            </NavLink>
          </div>
        </div>
        <div>
          <p className='text-text_primary'>Settings</p>
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
      </div> ) : (
      <div>
        <div><img src={star_logo} alt="Star logo" /></div>
        <PerformerIcon />
        <TextButton
          buttonText='Switch'
        />
        <p className='text-text_primary'>Main</p>
        <div className='flex flex-col justify-evenly text-text_primary'>
          <NavLink
            to='/Dashboard'
            className={navStyle}
          >
            <img src={home_icon} alt="home icon" />

          </NavLink>
          <NavLink
            to='/Gigs'
            className={navStyle}
          >
            <img src={lightbulb} alt="lightbulb icon" />

          </NavLink>
          <NavLink
            to='/Messages'
            className={navStyle}
          >
            <img src={messages} alt="messages icon" />

          </NavLink>
          <NavLink
            to='/Calendar'
            className={navStyle}
          >
            <img src={calendar} alt="calendar icon" />

          </NavLink>
          <NavLink
            to='/Payments'
            className={navStyle}
          >
            <img src={dollar_sign} alt="dollar sign icon" />

          </NavLink>
          <NavLink
            to='/Profile'
            className={navStyle}
          >
            <img src={profile} alt="person icon" />

          </NavLink>
        </div>
        <div>
          <p className='text-text_primary'>Settings</p>
          <div>
            <NavLink
              to='/Settings'
              className={navStyle}
            >
              <img src={gear} alt="gear icon" />
              
            </NavLink>
          </div>
        </div>
      </div>
      )}
    </nav>
  )
}

export default Sidebar
