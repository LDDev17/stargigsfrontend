import { useState, useEffect } from 'react';

import star_filled from '../assets/icons/star-filled.png';
import star_empty from '../assets/icons/star-empty.png';
import gold_star from '../assets/icons/gold_star.png';


const AverageRating = () => {
  const [avgRating, setAvgRating] = useState(3.5);

  useEffect(() => {
    // use custom hook to retrieve ratings and set data to avgRating
    // setAvgRating(data);
  })

  // use this to determine number of gold stars
  const numOfStars = Math.floor ( avgRating / 1)

  // using array constructor to make an array of undefined values of the length of numOfStars
  
  const emptyStarArr = [...Array(5 - numOfStars)].map(() => star_empty);
  const filledStarArr = [...Array(numOfStars)].map(() => star_filled);
  

  return (
    <div className="flex bg-gradient-to-r from-black to-[#565656] h-[200px]">
      {/* left side of vertical line */}
      <div className="flex flex-col mx-12 justify-center space-y-2 text-tertiary">
        <h4 className="text-xl">Average rating</h4>
        <div className="flex text-4xl inline">
          <div>{avgRating}</div> 
          <div className='flex'>
            {filledStarArr.map((item: string, i) => (<span><img key={i} src={item} /></span>))}
            {emptyStarArr.map(j => <img key={j} src={star_empty} />)}
          </div>
        </div>
        {/* TODO: insert props that are state to make this dynamic */}
        <p>over 20,000+ ratings are 4 star plus</p>
      </div>
      {/* vertical line */}
      <div className='my-6 w-1/8 border-r-1 border-tertiary'></div>
      {/* right side of vertical line */}
      <div className='flex flex-col justify-around my-4 text-tertiary'>
        <div className='flex justify-around w-8'>
          <img src={gold_star} alt="golden star" /> 
          <p>5</p>
          {/* bar graph */}
        </div>
        <div className='flex justify-around w-8'>
          <img src={gold_star} alt="golden star" /> 
          <p>4</p>
          {/* bar graph */}
        </div>
        <div className='flex justify-around w-8'>
          <img src={gold_star} alt="golden star" /> 
          <p>3</p>
          {/* bar graph */}
        </div>
        <div className='flex justify-around w-8'>
          <img src={gold_star} alt="golden star" /> 
          <p>2</p>
          {/* bar graph */}
        </div>
        <div className='flex justify-around w-8'>
          <img src={gold_star} alt="golden star" /> 
          <p>1</p>
          {/* bar graph */}
        </div>
      </div>
    </div>
  )
}

export default AverageRating
