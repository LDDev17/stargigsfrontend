
interface TextButtonType {
  buttonText: string;
  textSize?: string;
  textColor: string;
}

const TextButton = (props: TextButtonType) => {
  return (
    <button className={`flex h-[49px] py-1 text-${props.textColor} ${props.textSize}
      hover:bg-gradient-to-r from-light_orange to-primary hover:bg-clip-text 
      hover:text-transparent`}
    >
      <p>{props.buttonText}</p>
    </button>
  )
}

export default TextButton;
