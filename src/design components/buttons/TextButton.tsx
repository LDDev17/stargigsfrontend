interface TextButtonType {
  buttonText: string
}

const TextButton = (props: TextButtonType) => {
  return (
    <button className="h-[49px] py-1 text-tertiary 
      hover:bg-gradient-to-r from-light_orange to-primary hover:bg-clip-text 
      hover:text-transparent"
    >
      <p>{props.buttonText}</p>
    </button>
  )
}

export default TextButton;
