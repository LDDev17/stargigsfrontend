import BookingProps from "../types/BookingType"

import JennyWilson from '../assets/photos/jenny_wilson.png';
import DevonLane from '../assets/photos/devon_lane.png';
import JaneCooper from '../assets/photos/jane_cooper.png';

const sampleBookingData: BookingProps[] = [
  {
    image: JennyWilson,
    first_name: 'Jenny',
    last_name: 'Wilson',
    amount: 1234,
    date: 'May 08, 2025',
    location: 'Austin, TX',
  },
  {
    image: DevonLane,
    first_name: 'Devon',
    last_name: 'Lane',
    amount: 759,
    date: 'June 01, 2025',
    location: 'New York, NY',
  },
  {
    image: JaneCooper,
    first_name: 'Jane',
    last_name: 'Cooper',
    amount: 1083,
    date: 'May 20, 2025',
    location: 'Toledo, OH',
  }
];

export default sampleBookingData;