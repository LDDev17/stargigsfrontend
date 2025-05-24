import { Link } from "react-router-dom";

interface OrangeButtonProps {
  LinkText: string;
  pageUrl: string;
  onClick?: () => void;
}

const OrangeButton = ({ LinkText, pageUrl, onClick }: OrangeButtonProps) => {
  return (
    <Link 
      className="flex justify-center items-center rounded-md cursor-pointer 
        bg-primary hover:bg-gradient-to-r from-light_orange to-primary 
        text-tertiary hover:text-text_primary py-1 px-[34px] w-[115px] h-[49px]"
      to={pageUrl}
      onClick={onClick}
    >
      <p>{LinkText}</p>
    </Link>
  )
}

export default OrangeButton;
