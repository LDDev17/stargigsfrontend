"use client";

import { TalentCard } from "./TalentCard3";
import './talentCard.css';

const talentData = [
  {
    image: "singer1.png",
    name: "Jane Doe",
    category: "Music",
    distance: "2 Miles away",
    location: "New York, NY",
    rating: 4.8,
    reviews: 194,
    hourlyRate: 47,
    description: "A talented singer with beautiful vocal",
  },
  {
    image: "singer2.png",
    name: "Salina Smith",
    category: "Music",
    distance: "2 Miles away",
    location: "New York, NY",
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: "A talented singer with beautiful vocal",
  },
  {
    image: "singer3.png",
    name: "Gorge Micheal",
    category: "Music",
    distance: "2 Miles away",
    location: "New York, NY",
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: "A talented singer with beautiful vocal",
  },
  {
    image: "singer4.png",
    name: "Jenny .K",
    category: "Music",
    distance: "2 Miles away",
    location: "New York, NY",
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: "A talented singer with beautiful vocal",
  },
  {
    image: "singer5.png",
    name: "Smith Doe",
    category: "Music",
    distance: "2 Miles away",
    location: "New York, NY",
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: "A talented singer with beautiful vocal",
  },
];

export const FeaturedTalent = () => {
  return (
    <section className="featured-talent">
      <h1>Featured Talent</h1>
      <div className="talent-cards-container">
        {talentData.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTalent;
