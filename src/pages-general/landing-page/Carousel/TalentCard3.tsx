"use client";

import { CalendarIcon } from "../Carousel/Icons1";
import { RatingBadge } from "../Carousel/RatingBadge";
import { TalentCardProps } from "../../../types/TalentCardProps";
import './talentCard.css';

export const TalentCard: React.FC<TalentCardProps> = ({
  image,
  name,
  category,
  distance,
  location,
  rating,
  reviews,
  hourlyRate,
  description,
}) => {
  return (
    <article className="talent-card">
      <div className="relative">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-[227px] rounded-[20px_20px_0px_0px] object-cover"
        />
      </div>
      <div className="name-badge">
        {name}
      </div>
      <div className="content">
        <div className="header">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="category-badge">
                {category}
              </div>
              <CalendarIcon />
            </div>
            <div className="location">
              {distance} {location}
            </div>
          </div>
          <div className="rating">
            <RatingBadge rating={rating} reviews={reviews} />
            <div className="hourly-rate">${hourlyRate}/HR</div>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="actions">
          <button className="hire-button">
            Hire Now
          </button>
          <button className="favorite-button">
            <img src="/buttonheart.png" alt="Heart Icon" />
          </button>
        </div>
      </div>
    </article>
  );
};
