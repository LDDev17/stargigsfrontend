import { useState, useEffect } from 'react';

import SearchBar from '../design components/SearchBar';
import NotificationsButton from '../design components/buttons/NotificationsButton';

import NotificationBell from '../assets/icons/bell.svg';
import Avatar from '../assets/icons/Avatar.png';
import CaretDown from '../assets/icons/caret-down.svg';

interface performerProps {
  id: number,
  first_name: string,
  last_name: string,
  user_name: string,
  email: string,
  phone: number,
  city: string,
}

const PerformerNavbar = () => {
  const [performerNotifications, setPerformerNotifications] = useState({});
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [performer, setPerformer] = useState<performerProps>({
    id: 1,
    first_name: 'Andrew',
    last_name: 'Smith',
    user_name: 'andrew_smith',
    email: 'andrew@smith.com',
    phone: 5555555555,
    city: 'Portland',
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientView, setClientView] = useState(true);

  useEffect(() => {
    // on load of page, make async API call to retrieve any notifications for that perfomer
  }, []);

  useEffect(() => {
    // when performerNotifications changes, get a sum of all notifications in the object
    let result: number = 1 + 1;
    setTotalNotifications(result)
  }, [performerNotifications]);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='z-20 flex justify-end px-20 py-2 fixed bg-white top-0 right-0 w-full'>
      {/* If performers is in clientView, SearchBar will be visible */}
      {clientView? (
        <div className='w-3/5 pr-20'>
          <SearchBar />
        </div>
      ) : (
        <></>
      )}
      
      {/* Right Cluster */}
      <div className='flex space-x-6'>
        {/* notification div */}
        <button className='flex justify-center items-center'>
          {/* will probably include onClick here to display small dropdown with notifications listed */}
          <img 
            src={NotificationBell} 
            alt="notification bell" 
            className='size-6'
          />
          <div className='relative -top-2 right-2'>
            <NotificationsButton
              notificationNumber={totalNotifications}
            />
          </div>
        </button>
        <div>
          <img src={Avatar} alt="profile picture" />
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col'>
            <p className='text-xs'>Hello!</p>
            <p>{performer.first_name} {performer.last_name}</p>
          </div>
          <button
          // caret opens dropdown with some menu options
            onClick={() => handleMenuOpen}
            className='flex items-end h-10'
          >
            <img src={CaretDown} alt="down facing caret" className='size-6'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PerformerNavbar;
