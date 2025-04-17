import { NavLink } from 'react-router-dom';

import logo_light from '../assets/logos/logo2-sm-light-navbar.png';
import LoginButton from '../design components/buttons/LoginButton';
import TextButton from '../design components/buttons/TextButton';
import SearchBar from '../design components/SearchBar';

const Navbar = () => {
  return (
    <nav className="flex fixed top-0 justify-around items-center bg-text_primary w-full h-[86px] z-100">
      {/* tightly wrapped inner nav box */}
      {/* <div className='flex justify-around items-center bg-text_primary w-full h-[86px] m-[20px] '> */}
        <NavLink 
          to='/'
          className='flex shrink-0 justify-start items-center logo_frame h-[54px] mx-2'>
          <img src={logo_light} alt="Star Gigs logo in light theme" />
        </NavLink>
        
        <div className='w-2/5'>
          <SearchBar />
        </div>

        {/* Navigation Links */}
        <div className='flex justify-around w-1/3'>
          <NavLink
            to='/Reviews'
            className='text-tertiary'
          >
              <TextButton
                buttonText='Reviews'
                textColor='white'
              />
          </NavLink>
          <NavLink
            to='/About'
            className='text-tertiary'
          >
              <TextButton
                buttonText='About'
                textColor='white'
              />
          </NavLink>
          {/* conditional rendering section */}
          {/* Show Sign Up & LoginButton if user is unauthenticated */}
          <NavLink
            to='/role-selection-page'
            className='text-tertiary'
          >
            <TextButton 
              buttonText='Sign Up'
              textColor='white'
            />
          </NavLink>
          <LoginButton />
          {/* Show Profile picture and notification bell if authenticated */}
          {/* TODO: Need Logout button or is that included in dropdown from profile picture?*/}
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar;
