import Navbar from "../layout components/Navbar";
import ReviewsBanner from "../layout components/ReviewsBanner";
import AverageRating from "../layout components/AverageRating";
import Squiggle from '../assets/icons/Squiggle.png';
import ReviewsTile from "../design components/ReviewsTile";
import Footer2 from "../layout components/Footer2";

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
