import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../design components/SearchBar';
import NotificationsButton from '../design components/buttons/NotificationsButton';

import NotificationBell from '../assets/icons/bell.svg';
import Avatar from '../assets/icons/Avatar.png';
import Caret from '../assets/svgs/caret.svg?react';
import SampleNotificationData from '../SampleData/NotificationData';
import NotificationProps from '../types/NotificationType';

interface performerProps {
  id: number,
  first_name: string,
  last_name: string,
  user_name: string,
  email: string,
  phone: number,
  city: string,
}

interface ClientViewProps {
  viewClient: boolean,
  handleViewClient: () => void,
}

interface MenuItemProps {
  id: string,
  text: string,
  onClick: () => void,
}

const PerformerNavbar = ({viewClient, handleViewClient}: ClientViewProps) => {
  const [performerNotifications, setPerformerNotifications] = useState<NotificationProps[]>(SampleNotificationData);
  const [totalNotifications, setTotalNotifications] = useState<number>(0);
  const [performer, setPerformer] = useState<performerProps>({
    id: 1,
    first_name: 'Andrew',
    last_name: 'Smith',
    user_name: 'andrew_smith',
    email: 'andrew@smith.com',
    phone: 5555555555,
    city: 'Portland',
  });
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  const menuItems: MenuItemProps[] = [
    {
      id: 'dashboard',
      text: 'Dashboard',
      onClick: () => {
        console.log('Dashboard clicked')
        handleMenuOpen();
        navigate('/performerDashboard/main');
      },
    },
    viewClient
    ? {
        id: 'switch-performer',
        text: 'Switch to Performer',
        onClick: () => {
          console.log('Switch to Performer clicked')
          handleMenuOpen();
          handleViewClient();
        },
      }
    : {
        id: 'switch-client',
        text: 'Switch to Client',
        onClick: () => {
          console.log('Switch to Client clicked')
          handleMenuOpen();
          handleViewClient();
        },
      },
    {
      id: 'logout',
      text: 'Logout',
      onClick: () => {
        console.log('Logout clicked')
        handleMenuOpen();
      },
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // on load of page, make async API call to retrieve any notifications for that perfomer
  }, []);

  useEffect(() => {
    // when performerNotifications changes, get a sum of all notifications in the object
    let result: number = performerNotifications.length;
    setTotalNotifications(result)
  }, [performerNotifications]);

  

  return (
    <div className='font-inter z-20 flex justify-end px-20 py-2 fixed bg-white 
      top-0 right-0 w-full border-b-2 border-gray-200'
    >
      {/* If performer is in clientView, SearchBar will be visible */}
      {viewClient? (
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
          <div className='flex flex-col relative'>
            <p className='text-xs'>Hello!</p>
            <button
            // caret opens dropdown with some menu options
            onClick={handleMenuOpen}
            className='flex items-center h-10 cursor-pointer space-x-2 border border-black/10
              hover:bg-[#f5f4fb] rounded-lg px-2 py-1 z-20'
            >
              <p>{performer.first_name} {performer.last_name}</p>
              <Caret 
                className={`transition-transform duration-300 ease-in-out 
                  ${menuOpen ? 'rotate-180' : 'rotate-0'}
              `}
              />
              </button>
              {menuOpen && (
                <div 
                  className='absolute bg-white border border-black/10 rounded-lg 
                    z-40 mt-16'
                >
                  <ul className='p-2'>
                    {menuItems.map((item) => (
                      <li 
                        key={item.id} 
                        onClick={item.onClick}
                        className='hover:text-primary cursor-pointer text-md'
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default PerformerNavbar;
