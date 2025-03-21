import { Link, NavLink } from 'react-router';

import logo_light from '../assets/logo2-sm-light-navbar.png';
import LoginButton from '../design components/LoginButton';
import SearchBar from '../design components/SearchBar';

const Navbar = () => {
  return (
    <nav className="flex items-center  bg-text_primary w-[1440px] h-[86px] m-[20px] px-[120px] py-[18px]">
      {/* tightly wrapped inner nav box */}
      <div className='flex justify-between items-center w-full border-red-600 border-2'>
        <div className='flex place-items-center logo_frame w-[183px] h-[54px]'>
          <img src={logo_light} alt="Star Gigs logo in light theme" />
        </div>
        {/* search bar & links */}
        <div className='flex justify-around items-center border-red-600 border-2 w-2/3'>
          <SearchBar />
          <NavLink 
            to='#'
            className='text-tertiary'
            >Reviews</NavLink>
          <NavLink 
            to='#'
            className='text-tertiary'
            >About</NavLink>
          {/* conditional rendering section */}
          {/* Show Sign Up if user is unauthenticated */}
          <NavLink 
            to='#'
            className='text-tertiary'
          >Sign Up</NavLink>
          {/* Show Profile picture and notification bell if authenticated */}
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
