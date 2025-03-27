import { useState, useEffect } from 'react';

import star_filled from '../assets/icons/star-filled.png';
import star_empty from '../assets/icons/star-empty.png';



const AverageRating = () => {
  const [avgRating, setAvgRating] = useState(4);

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
      <div className="flex flex-col m-4 text-tertiary">
        <h4 className="text-xl">Average rating</h4>
        <h5 className="text-4xl">
          {avgRating} {filledStarArr.map(i => <img key={i} src={star_filled} />)} 
          {emptyStarArr.map(j => <img key={j} src={star_empty} />)}
        </h5>
        {/* TODO: insert props that are state to make this dynamic */}
        <p>over 20,000+ ratings are 4 star plus</p>
      </div>
    </div>
  )
}

export default AverageRating
