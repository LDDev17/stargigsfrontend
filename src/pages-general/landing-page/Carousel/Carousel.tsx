import React, { useState } from 'react';
import { TalentCard } from './TalentCard3'; // Updated path for TalentCard
import './carousel.module.css';
import './talentcard.css'; // Import the talent card styles

const talentData = [
  {
    image: 'singer1.png',
    name: 'Jane Doe',
    category: 'Music',
    distance: '2 Miles away',
    location: 'New York, NY',
    rating: 4.8,
    reviews: 194,
    hourlyRate: 47,
    description: 'A talented singer with beautiful vocal',
  },
  {
    image: 'singer2.png',
    name: 'Salina Smith',
    category: 'Music',
    distance: '2 Miles away',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: 'A talented singer with beautiful vocal',
  },
  {
    image: 'singer3.png',
    name: 'Gorge Micheal',
    category: 'Music',
    distance: '2 Miles away',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: 'A talented singer with beautiful vocal',
  },
  {
    image: 'singer4.png',
    name: 'Jenny .K',
    category: 'Music',
    distance: '2 Miles away',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: 'A talented singer with beautiful vocal',
  },
  {
    image: 'singer5.png',
    name: 'Smith Doe',
    category: 'Music',
    distance: '2 Miles away',
    location: 'New York, NY',
    rating: 4.9,
    reviews: 204,
    hourlyRate: 50,
    description: 'A talented singer with beautiful vocal',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % talentData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + talentData.length) % talentData.length);
  };

  return (
    <div className="slideshow-container">
      <h1 className="carousel-heading">FEATURED TALENT</h1>
      <div className="talent-cards-container">
        {talentData.map((talent, index) => (
          <div key={index} className={`mySlides fade ${index === currentIndex ? 'active' : ''}`}>
            <TalentCard {...talent} />
          </div>
        ))}
      </div>

      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>

      <div className="dots-container">
        {talentData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

