import { useState, useEffect } from 'react';
import empty_star from '../../assets/icons/star-empty.png';
import filled_star from '../../assets/icons/star-filled.png';

const ReviewsTile = () => {
  const [rating, setRating] = useState(0);

  const numOfStars = Math.floor (rating / 1);

  const emptyStarArr = [...Array(5 - numOfStars)].map(() => empty_star);
  const filledStarArr = [...Array(numOfStars)].map(() => filled_star);

  useEffect(() => {
    setRating(4.2)
  }, []);

  return (
    <article className="flex flex-col justify-between my-8 mx-4 p-2 rounded-xl shadow-[4px_4px_7px_7px]">
      <div>
        <img src="null" alt="picture of the user" />
        <p className="text-lg">Username</p>
      </div>
      <p className="text-md">
        "A true artist! The dance performance was mesmerizing,
        and the choreography was flawless. Highly recommend!""
      </p>
      <div className='flex '>
        {filledStarArr.map((item: string, i) => (
          <span key={i}>
            <img key={i} src={item} alt="gold star" />
          </span>
        ))}
        {emptyStarArr.map((item: string, j) => (
          <span>
            <img key={j} src={item} alt="empty star" />
          </span>
        ))}
      </div>
    </article>
  )
}

export default ReviewsTile
