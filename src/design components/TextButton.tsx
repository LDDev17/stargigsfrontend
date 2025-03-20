interface TextButtonType {
  buttonText: string
}

const TextButton = (props: TextButtonType) => {
  return (
    <button className="w-[128px] h-[49px] py-1 px-[34px] text-primary 
      hover:bg-gradient-to-r from-[#F6BD97] to-primary hover:bg-clip-text 
      hover:text-transparent"
    >
      <p>{props.buttonText}</p>
    </button>
  )
}

export default TextButton;
