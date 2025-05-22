import Navbar from "../general-components/Navbar";
import ReviewsBanner from "./ReviewsBanner";
import AverageRating from "./AverageRating";
import ReviewsTile from "./ReviewsTile";
import Footer2 from "../general-components/Footer2";

import Squiggle from '../../assets/icons/Squiggle.png';

const Reviews = () => {
  return (
    <div>
      <Navbar />
      <ReviewsBanner />
      <div className="flex flex-col items-center justify-center my-12">
        <h3>Hear it from the customers</h3>
        <img src={Squiggle} alt="orange squiggle underline" />
      </div>
      <AverageRating />
      <ReviewsTile />
      <Footer2 />
    </div>
  )
}

export default Reviews;
