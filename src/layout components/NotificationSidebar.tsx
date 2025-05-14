import { useState } from "react";

import NotificationCard from "../design components/NotificationCard";
import SampleNotificationData from "../SampleData/NotificationData";
import NotificationProps from "../types/NotificationType";

const NotificationSidebar = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>(SampleNotificationData);

  return (
    <div className="flex flex-col justify-start items-start p-2 space-y-2 h-56 overflow-y-auto">
      { notifications.map((notification, index) => (
        <NotificationCard
          key={index}
          type={notification.type}
          text={notification.text}
          date={notification.date}
        />
      ))
      }
    </div>
  )
}

export default NotificationSidebar
