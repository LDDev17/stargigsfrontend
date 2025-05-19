import PerformanceCardType from "../types/PerformanceCardType";
import performance1 from '../assets/photos/performance1.jpg';
import performance2 from '../assets/photos/performance2.jpg';

const samplePerformanceData: PerformanceCardType[] = [
  {
    adId: 1,
    title: 'Electric Sunset Show',
    description: 'Live band performances and unique acts that go beyond the usual - ideal for unforgettable events and custom shows.',
    gigType: ['BAND', 'MISC'],
    location: 'New York, NY',
    hourlyRate: 1500,
    thumbnailUrl: performance1,
  },
  {
    adId: 2,
    title: 'Acoustic Dream Sessions',
    description: 'Solo and unique performances perfect for private events, intimate settings, or one-of-a-kind experiences.',
    gigType: ['SOLO', 'MISC'],
    location: 'Los Angeles, CA',
    hourlyRate: 2000,
    thumbnailUrl: performance2,
  },
];

export default samplePerformanceData;
// This file contains sample data for performance cards.