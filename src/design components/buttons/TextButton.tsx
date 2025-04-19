
interface TextButtonType {
  buttonText: string;
  textSize?: string;
  textColor: string;
  onClick?: () => void;
}

const TextButton = (props: TextButtonType) => {
  return (
    <button 
      onClick={props.onClick}
      className={`flex h-[49px] py-1 text-center text-${props.textColor} ${props.textSize}
      hover:bg-gradient-to-r from-light_orange to-primary hover:bg-clip-text 
      hover:text-transparent cursor-pointer items-center`}
    >
      <p>{props.buttonText}</p>
    </button>
  )
}

export default TextButton;
