<<<<<<< HEAD
interface TextButtonType {
  buttonText: string
}

const TextButton = (props: TextButtonType) => {
  return (
    <button className="h-[49px] py-1 text-tertiary 
      hover:bg-gradient-to-r from-light_orange to-primary hover:bg-clip-text 
      hover:text-transparent"
=======
import { useState, useEffect } from "react";

interface TextButtonType {
  buttonText: string;
  textSize?: string;
  textColor: string;
  textHoverFrom: string;
  textHoverTo: string;
  viewClient?: boolean;
  onClick?: () => void;
}

const TextButton = (props: TextButtonType) => {
  const [textColor, setTextColor] = useState<string>('primary');
  const [textHoverFrom, setTextHoverFrom] = useState<string>('light_orange');
  const [textHoverTo, setTextHoverTo] = useState<string>('primary');
  
  useEffect(() => {
    if (props.viewClient) {
      setTextColor('text-[#5533ff]');
      setTextHoverFrom('from-purple-200')
      setTextHoverTo('to-[#5533ff]')
    } else {
      setTextColor('text-primary');
      setTextHoverFrom('from-light_orange');
      setTextHoverTo('to-primary');
    }
  }, [props.viewClient]);

  return (
    <button 
      onClick={props.onClick}
      className={`flex h-[49px] py-1 text-center ${textColor} ${props.textSize}
      hover:bg-gradient-to-r ${textHoverFrom} ${textHoverTo} 
      hover:bg-clip-text hover:text-transparent cursor-pointer items-center`}
>>>>>>> 7a216819bc5559359aee0bf228a887b2ace267a0
    >
      <p>{props.buttonText}</p>
    </button>
  )
}

export default TextButton;
