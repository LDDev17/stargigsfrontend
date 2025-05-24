import thumbnails from '../../assets/photos/PerformerThumbnails.png';
import dots from '../../assets/icons/orange_dots.png';

const LandingMain = () => {
  return (
    <main className="max-w-[1080px] m-auto grid grid-cols-4 my-24 font-inter">
          {/* Left Side of Main */}
          <div className="col-span-1 flex flex-col">
            <div className="flex flex-start items-end">
              <img src={thumbnails} alt="thumbnail images of performers" />
              <img className='h-[10px]' src={dots} alt="orange elipse" />
            </div>
            
            <div>
              <h1 className="text-[40px] font-bold">Empowering Talent to Shine.</h1>
            </div>
          </div>
          <div className="col-span-1"></div>
          {/* Rigth Side of Main */}
          <div className="col-span-2">
            <h2 className="text-4xl font-bold">A POWERFUL NETWORK</h2>
            <p>
              <span className="bg-gradient-to-r from-light_orange to-primary text-transparent bg-clip-text pr-1">
              STAR GIGS
              </span>
              is a vibrant community of passionate artists, 
              industry professionals, and talent seekers. We connect rising stars 
              with the right opportunities, helping them build meaningful and lasting
              careers. Our dynamic platform, inclusive culture, and cutting-edge resources 
              empower creatives to showcase their skills, collaborate, and thrive. 
              Whether you're looking for talent or ready to be discovered, Star 
              Gigs is where careers take flight.
              </p>
          </div>
        </main>
  )
}

export default LandingMain;
