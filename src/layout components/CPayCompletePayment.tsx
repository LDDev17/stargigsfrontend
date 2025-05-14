import { useForm } from "react-hook-form";

import Visa from '../assets/logos/visa.jpg';
import MasterCard from '../assets/logos/mastercard.jpg';

const CPayCompletePayment = () => {
  const { register, handleSubmit } = useForm({});

  const onSubmitPayment = (data: any) => {
    console.log(data)
    // navigate to success page
  }

  const inputStyle: string = 'border-1 border-[#e0e5f2] rounded-xl text-[#a3aed0] p-2'

  return (
    <div className="font-dm flex flex-col min-h-screen px-4 py-4 justify-around space-y-2">
      <header>
        <h4 className="text-4xl font-bold font-dm">Complete Payment</h4>
      </header>
      <main>
        <form onSubmit={handleSubmit(onSubmitPayment)} className="flex flex-col space-y-8 overflow-visible">
          <section>
            <h5 className="text-2xl font-bold py-4 font-dm">Personal Details</h5>
            <div className="flex flex-col space-y-4 font-montserrat">
              {/* First Row */}
              <div className="flex justify-between space-x-8">
                <div className="flex flex-col flex-grow justify-around space-y-2">
                  <label htmlFor="address" className="font-semibold text-sm text-[#2b3674]"
                  >
                    Address Line
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    placeholder="P.o.Box 1223"
                    className={inputStyle}
                  />
                </div>
                <div className="flex flex-col flex-grow justify-around space-y-2">
                  <label htmlFor="city" className="font-semibold text-sm text-[#2b3674]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    {...register('city')}
                    placeholder="Las Vegas"
                    className={inputStyle}
                  />
                </div>
              </div>
              {/* Second Row */}
              <div className="flex justify-between space-x-8">
                <div className="flex flex-col flex-grow justify-around space-y-2">
                  <label htmlFor="state" className="font-semibold text-sm text-[#2b3674]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    {...register('state')}
                    placeholder="Nevada"
                    className={inputStyle}
                  />
                </div>
                <div className="flex flex-col flex-grow justify-around space-y-2">
                  <label htmlFor="zip" className="font-semibold text-sm text-[#2b3674]"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    {...register('zip')}
                    placeholder="89109"
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-around space-y-4">
            <h5 className="text-2xl font-bold font-dm">Payment Methods</h5>
            <div className="flex justify-start items-center space-x-4">
              <img src={Visa} alt="picture of a Visa credit card" />
              <img src={MasterCard} alt="picture of a MasterCard credit card" />
            </div>
          </section>
          <section className="flex flex-col space-y-4 font-montserrat">
            <h5 className="text-2xl font-bold">Card Details</h5>
            <div className="flex flex-col justify-around space-y-2">
              <label htmlFor="name" className="font-semibold text-sm text-[#2b3674]"
              >
                Cardholder's Name
              </label>
              <input
                type="text"
                placeholder="As seen on your card"
                className={inputStyle}
                {...register('name')}
              />
            </div>
            <div className="flex flex-col justify-around space-y-2">
              <label htmlFor="number" className="font-semibold text-sm text-[#2b3674]"
              >
                Card Number
              </label>
              <input
                type="text"
                placeholder="As seen on your card"
                className={inputStyle}
                {...register('number')}
              />
            </div>
            <div className="flex justify-between space-x-8">
              <div className="flex flex-col flex-grow justify-around space-y-2">
                <label htmlFor="expiration" className="font-semibold text-sm text-[#2b3674]"
                >
                  Expiration Date
                </label>
                <input 
                  type="text" 
                  placeholder="05/25"
                  className={inputStyle}
                  {...register('expiration')}
                />
              </div>
              <div className="flex flex-col flex-grow justify-around space-y-2">
                <label htmlFor="cvc" className="font-semibold text-sm text-[#2b3674]"
                >
                  CVC
                </label>
                <input 
                  type="text"
                  placeholder="123"
                  className={inputStyle}
                  {...register('cvc')}
                />
              </div>
            </div>
              <button
                className="bg-[#030325] rounded-xl text-white font-extrabold
                  py-4 cursor-pointer w-full"
                id="payment-submit"
                type="submit"
                style={{ backgroundColor: 'black'}}
              >
                Next
              </button>
          </section>
        </form>
      </main>
    </div>
  )
}

export default CPayCompletePayment
