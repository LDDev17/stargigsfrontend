"use client";

import { useForm } from 'react-hook-form';

import { TextArea } from "./TextArea";
import paper_airplane from '../assets/icons/paper_airplane.png';

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormProps>({});

  const subjects: Record<string, string> = {
    general: 'General Inquiry',
    price: 'Pricing Inquiry',
    location: 'Location Inquiry',
    gigType: 'Performance Type Inquiry',
  }

  const contactSubmit = (data: ContactFormProps) => {
    console.log(`Submitted Contact Form:`, data)
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(contactSubmit)}
        className="flex flex-col grow px-10 py-12 z-10 bg-white relative"
      >
        {/* Top Section */}
        <section className="flex flex-col gap-10 mb-10 font-inter font-medium text-xs text-[#8d8d8d]">
          {/* First Row */}
          <section className='flex gap-8'>
            <div className='flex-1 flex-col w-full'>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                {...register('firstName')}
                name='firstName'
                className='w-full border-b-1 border-[#8d8d8d] pt-4 pl-2'
              />
            </div>
            <div className='flex-1 flex-col'>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                {...register('lastName')}
                name='lastName'
                className='w-full border-b-1 border-[#8d8d8d] pt-4 pl-2'
              />
            </div>
          </section>

          {/* Second Row */}
          <section className='flex gap-8'>
            <div className='flex-1 flex-col w-full'>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register('email')}
                name='email'
                className='w-full border-b-1 border-[#8d8d8d] pt-4 pl-2'
              />
            </div>
            {/* set to accept as string and strip hyphens */}
            <div className='flex-1 flex-col'>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                {...register('phone')}
                name='phone'
                className='w-full border-b-1 border-[#8d8d8d] pt-4 pl-2'
              />
            </div>
          </section>
        </section>

        {/* Subject Radio Inputs */}
        <section className="mb-10 flex flex-col space-y-4">
          <p className="font-inter font-semibold text-sm">Select Subject?</p>
          <div className='flex justify-start space-x-8'>
            {Object.entries(subjects).map(([key, label] ) => (
              <div className='flex space-x-2 text-xs'>
                <input 
                  type="radio" 
                  value={label} 
                  className='cursor-pointer'
                  {...register('subject')}
                />
                <label htmlFor={key}>{label}</label>
              </div>
            ))}
          </div>
        </section>

        {/* Message Text Area */}
        <section>
          <TextArea
            label="Message"
            placeholder="Write your message.."
            className="flex"
            {...register('message')}
          />
        </section>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="float-right bg-primary text-white font-medium font-inter
              rounded-md shadow-[0_0_14px_0_black_0.12] px-8 py-4 mb-36 mt-8 grow-0 cursor-pointer"
            style={{ backgroundColor: '#f45e00' }}
          >
            Send Message
          </button>
        </div>

        <img 
          src={paper_airplane} 
          alt="drawing of a paper airplane in flight" 
          className="rotate-330 max-w-[240px] absolute right-30 bottom-14"
        />
      </form>
    </>
  );
};

export default ContactForm;
