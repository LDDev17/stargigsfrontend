interface NotificationButtonProps {
  notificationNumber: number;
}

const NotificationsButton = (props: NotificationButtonProps) => {

  return (
    <>
    {props.notificationNumber > 0?
    (
      <div className="w-[16px] h-[16px] rounded-full
        bg-primary text-white font-bold text-xs flex justify-center items-center">
        {props.notificationNumber}
      </div>
    ) : (
      <></>
    )
    }
    </>
  )
}

export default NotificationsButton
