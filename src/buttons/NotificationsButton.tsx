interface NotificationButtonProps {
  notificationNumber: number;
}

const NotificationsButton = (props: NotificationButtonProps) => {

  return (
    <>
    {props.notificationNumber > 0?
    (
      <button className="w-[16px] h-[16px] rounded-full
        bg-primary text-white font-bold text-xs">
        {props.notificationNumber}
      </button>
    ) : (
      <></>
    )
    }
    </>
  )
}

export default NotificationsButton
