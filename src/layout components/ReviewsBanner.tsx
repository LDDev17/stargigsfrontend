import rock_band from '../assets/photos/reviews_rock_band.jpg';

const ReviewsBanner = () => {
  return (
    <div className='mt-[86px]'>
        <img src={rock_band} alt="" 
            className='w-full h-96 object-cover opacity-[0.86]'
        />
        <div className='absolute flex flex-col top-[86px] justify-center items-center space-y-4 text-center w-full h-96 z-10'>
            <h2 className='text-4xl text-tertiary font-bold text-center'>Success Stories</h2>
            <p className='text-tertiary text-lg text-center'>Insert cute text here.</p>
            {/* this button will lead to a write your own review page or modal */}
            <button className='text-tertiary border-tertiary border-1 rounded-3xl py-2 px-4'>SHARE YOUR STORY</button>
        </div>
    </div>
  )
}

export default ReviewsBanner
