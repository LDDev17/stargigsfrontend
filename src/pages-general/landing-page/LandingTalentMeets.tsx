import JoinButton from "../../design components/buttons/JoinButton";
import EllipsePhoto from "../../assets/photos/Ellipse_RockBand.png";

const LandingTalentMeets = () => {
  return (
    <div className="flex justify-center space-x-48 font-inter my-8">
      {/* Text Side */}
      <div className="flex flex-col space-y-4 justify-center items-start">
        <h2 className="text-4xl font-bold">WHERE TALENT MEETS <br/>OPPORTUNITY</h2>
        <p>Find top-rated talent for your events with ease. <br />Join now and start hiring...</p>
        <JoinButton />
      </div>
      <div>
        <img src={EllipsePhoto} alt="photo of a rock band on stage" />
      </div>
    </div>
  )
}

export default LandingTalentMeets;
