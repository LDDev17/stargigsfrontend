import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchBar from '../../pages-general/general-components/searchbar/SearchBar';
import NotificationsButton from '../../design-components/buttons/NotificationsButton';

import NotificationBell from '../../assets/icons/bell.svg';
import Avatar from '../../assets/icons/Avatar.png';
import Caret from '../../assets/svgs/caret.svg?react';
import SampleNotificationData from '../../SampleData/NotificationData';
import NotificationProps from '../../types/NotificationType';

interface performerProps {
  id: number,
  first_name: string,
  last_name: string,
  user_name: string,
  email: string,
  phone: number,
  city: string,
  state: string,
  profile_pic?: string,
}

interface ClientViewProps {
  viewClient: boolean,
  handleViewClient: () => void,
  textColor: string,
  bgColor: string,
  notificationColor: string,
}

interface MenuItemProps {
  id: string,
  text: string,
  onClick: () => void,
}

const PerformerNavbar = (
  {
    viewClient,
    handleViewClient,
    textColor,
    bgColor,
    notificationColor,
  }: ClientViewProps) => {
  const [performerNotifications, setPerformerNotifications] = useState<NotificationProps[]>(SampleNotificationData);
  const [totalNotifications, setTotalNotifications] = useState<number>(0);
  const [performer, setPerformer] = useState<performerProps | undefined>();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  let dropDownRef = useRef<HTMLDivElement | null>(null);

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
      id: 'profile',
      text: 'Profile',
      onClick: () => {
        console.log('Profile clicked')
        // TODO: navigate to profile page
        handleMenuOpen();
      },
    },
    {
      id: 'settings',
      text: 'Settings',
      onClick: () => {
        console.log('Settings clicked')
        // TODO: navigate to settings page
        handleMenuOpen();
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
    // Fetch the performer data from the API or use sample data
    // For now, we are using sample data
    setPerformer(
      {
        id: 1,
        first_name: 'Andrew',
        last_name: 'Smith',
        user_name: 'andrew_smith',
        email: 'andrew@smith.com',
        phone: 5555555555,
        city: 'Portland',
        state: 'Oregon',
        profile_pic: Avatar,
      }
    );
  }, []);

  // useEffect to get the performerNotifications from the API or use sample data
  useEffect(() => {
    setPerformerNotifications(SampleNotificationData);
  }, []);

  useEffect(() => {
    // when performerNotifications changes, get a sum of all notifications in the object
    let result: number = performerNotifications.length;
    setTotalNotifications(result)
  }, [performerNotifications]);

  // useEffect to close the dropdown when clicking outside of it
  useEffect(() => {
    let dropDownHandler = (e: MouseEvent) => {
      if (dropDownRef && dropDownRef.current) {
        if (!dropDownRef.current?.contains(e.target as Node)) {
          setMenuOpen(false);
        }
      }
    }
    document.addEventListener('mousedown', dropDownHandler);

    return () => {
      document.removeEventListener('mousedown', dropDownHandler);
    }
  });

  return (
    <div className='font-inter z-20 flex justify-end pl-20 pr-10 py-2 fixed bg-white 
      top-0 right-0 w-full border-b-2 border-gray-200'
    >
      {/* If performer is in clientView, SearchBar will be visible */}
      {viewClient &&
        <div className='w-3/5 pr-20'>
          <SearchBar />
        </div>
      }

      {/* Right Cluster */}
      <div className='flex space-x-6'>
        {/* notification div */}
        <button className='flex justify-center items-center'>
          {/* TODO: include onClick here to display small dropdown with notifications listed */}
          <img
            src={NotificationBell}
            alt="notification bell"
            className='size-6'
          />
          {/* If there are notifications, display the number of notifications */}
          <div className='relative -top-2 right-2'>
            {totalNotifications > 0 && (
              <NotificationsButton
                notificationNumber={totalNotifications}
                notificationColor={notificationColor}
              />
            )}
          </div>
        </button>
        {/* If performer has data and has a profile_pic, render the image */}
        {/* TODO: setup default image */}
        <div>
          {performer?.profile_pic && (
            <img src={performer.profile_pic} alt="profile picture" />
          )}
        </div>
        <div className='flex items-center'>
          <div className='flex flex-col relative'>
            <p className='text-xs'>Hello!</p>

            {/* If performer is defined, render the following dropdown */}
            {performer && (
              <div ref={dropDownRef}>
                <button
                  // caret opens dropdown with some menu options
                  onClick={handleMenuOpen}
                  className={`flex items-center h-10 cursor-pointer space-x-2 border 
                  border-black/10 rounded-lg px-2 py-1 z-20 min-w-42
                  ${bgColor === 'bg-[#feefe5]' && 'hover:bg-[#feefe5]'}
                  ${bgColor === 'bg-purple-200' && 'hover:bg-purple-200'}
                  `}
                >
                  <p>{performer.first_name} {performer.last_name}</p>
                  <Caret
                    className={`transition-transform duration-300 ease-in-out 
                    ${menuOpen ? 'rotate-180' : 'rotate-0'}
                `}
                  />
                </button>

                {/* Actual Dropdown element */}
                {/* If menuOpen is true, menu comes into view. If false, it fades away */}
                <div
                  className={`absolute bg-white border border-black/10 rounded-lg 
                  z-40 mt-2 min-w-42 transition-all duration-100 ease-in-out
                  ${menuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
                `}
                >
                  <ul className='p-2'>
                    {menuItems.map((item) => (
                      <li
                        key={item.id}
                        onClick={item.onClick}
                        className={`
                        hover:${textColor} 
                        cursor-pointer text-md`
                        }
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformerNavbar;
