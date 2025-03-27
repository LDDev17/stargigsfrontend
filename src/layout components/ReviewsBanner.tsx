import rock_band from '../assets/photos/reviews_rock_band.jpg';
// flex object-center bg-cover bg-local  w-full h-96 bg-no-repeat opacity-85
const ReviewsBanner = () => {
  return (
    <div className='mt-[86px]'>
      <div
        style={{ backgroundImage: `url(${ rock_band })`}}
        className=' object-center'
      >
        <div className='flex w-full justify-center items-center'>
          <div className='flex flex-col justify-around'>
            <h2 className='text-4xl text-tertiary font-bold text-center'>Success Stories</h2>
            <p className='text-tertiary text-lg text-center'>Insert cute text here.</p>
            <button className='text-tertiary border-tertiary border-1 rounded-3xl'>SHARE YOUR STORY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsBanner
