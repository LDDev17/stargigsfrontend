import React, { useState } from 'react';
import { TalentCard } from '../Carousel/TalentCard3'; // Updated path for TalentCard
import { LoadingDots } from '../Carousel/LoadingDots'; // Updated path for LoadingDots
import './carousel.css';

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

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % talentData.length);
      setLoading(false);
    }, 500); // Simulate loading delay
  };

  const prevSlide = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + talentData.length) % talentData.length);
      setLoading(false);
    }, 500); // Simulate loading delay
  };

  return (
    <div className="carousel-container">
      <h1 className="carousel-heading">FEATURED TALENT</h1>
      <div className="display-area">
        <div className="cards-wrapper" style={{ transform: `translateX(-${currentIndex * 600}px)` }}>
          {loading ? (
            <LoadingDots />
          ) : (
            talentData.map((talent, index) => (
              <div key={index} className="card">
                <TalentCard {...talent} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="dots-container">
        {talentData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </div>
  );
};

export default Carousel;
