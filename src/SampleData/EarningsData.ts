import EarningTileProps from "../types/EarningsTileProps";

import Picture1 from '../assets/photos/earnings1left.jpg';
import Picture2 from '../assets/photos/earnings1center.jpg';
import Picture3 from '../assets/photos/earnings1right.jpg';
import Picture4 from '../assets/photos/earnings2left.jpg';
import Picture5 from '../assets/photos/earnings2center.jpg';
import Picture6 from '../assets/photos/earnings2right.jpg';

const SampleEarningsData: EarningTileProps[] = [
  {
    month: 'Mar',
    year: 2025,
    picture1: Picture1,
    picture2: Picture2,
    picture3: Picture3,
    earnings: 2500,
  },
  {
    month: 'Feb',
    year: 2025,
    picture1: Picture4,
    picture2: Picture5,
    picture3: Picture6,
    earnings: 5500,
  },
];

export default SampleEarningsData;