import NotificationProps from "../types/NotificationType";

const SampleNotificationData: NotificationProps[] = [
  {
    type: 'gigs',
    text: 'Confirm event with Jane',
    date: 'Today, 11:59 AM',
  }, 
  {
    type: 'profile',
    text: 'Update your profile',
    date: 'Today, 12:00 PM',
  },
  {
    type: 'message',
    text: 'New message from Kunle',
    date: 'Yesterday, 11:50 PM',
  },
  {
    type: 'calendar',
    text: 'Upcoming event for Jonathan',
    date: '2 days ago, 4:30 PM',
  },
  {
    type: 'message',
    text: 'New message from Jane',
    date: '3 days ago, 8:05 AM',
  },
  {
    type: 'calendar',
    text: 'Upcoming event for Kwik Kar',
    date: 'Fri, Apr 10, 4:30 PM'
  },
];

export default SampleNotificationData;