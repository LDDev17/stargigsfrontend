import './performer.module.css';

const Calendar = () => {
  return (
    <div>
      <div className="self-start mt-6 text-sm leading-none text-black">
        Select Your Availability
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-9 mt-1.5 text-base font-medium leading-loose text-center whitespace-nowrap bg-white rounded-2xl min-h-[338px] text-stone-900 max-md:px-5 max-md:mr-0.5">
        <div className="flex flex-col max-w-full w-[302px]">
          <div className="flex gap-6 justify-between items-start w-full text-xl font-bold text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/adda2d6744202039aabd667df8110b8b5bea34a2?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              className="object-contain shrink-0 w-11 shadow-sm aspect-square"
            />
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col justify-center self-stretch px-3 py-2.5 my-auto bg-white rounded-md shadow-sm w-[79px]">
                <div className="flex gap-0.5 justify-center items-center w-full">
                  <div className="self-stretch my-auto">April</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e777d09358315af3bb2ef6e15b5448ceea4ed6?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
                    className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[0.33]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center self-stretch px-3 py-2.5 my-auto bg-white rounded-md shadow-sm w-[81px]">
                <div className="flex gap-0.5 items-start w-full">
                  <div>2025</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e777d09358315af3bb2ef6e15b5448ceea4ed6?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
                    className="object-contain shrink-0 w-2 aspect-[0.33]"
                  />
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/78f93e53336b939c572d4078dca2349589d22c10?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
              className="object-contain shrink-0 w-11 shadow-sm aspect-square"
            />
          </div>
          <div className="flex gap-1.5 items-start mt-3 min-h-[30px]">
            <div className="flex overflow-hidden flex-col rounded w-[37px]">
              <div className="gap-2.5 self-stretch py-0.5 pr-1.5 pl-2 rounded min-h-[44px]">Mo</div>
            </div>
            <div className="flex overflow-hidden flex-col rounded w-[37px]">
              <div className="gap-2.5 self-stretch py-0.5 pr-2 pl-2.5 rounded min-h-[44px]">Tu</div>
            </div>
            <div className="flex overflow-hidden flex-col rounded w-[37px]">
              <div className="gap-2.5 self-stretch py-0.5 pr-1.5 pl-2 rounded min-h-[44px]">We</div>
            </div>
            <div className="flex overflow-hidden flex-col w-9 rounded">
              <div className="gap-2.5 self-stretch py-0.5 pr-2 pl-2 rounded min-h-[44px]">Th</div>
            </div>
            <div className="flex flex-col px-0.5 rounded-sm w-[37px]">
              <div className="gap-2.5 self-stretch px-3.5 py-0.5 bg-rose-100 rounded shadow-sm aspect-[34.09/30.00] min-h-[30px]">1</div>
            </div>
            <div className="flex flex-col justify-center px-0.5 text-white rounded-sm w-[38px]">
              <div className="gap-2.5 self-stretch px-3 py-0.5 w-full rounded shadow aspect-[17/15] bg-[linear-gradient(90deg,#F6BD97_0%,#F5AA79_15%,#F59050_36%,#F45E00_100%)] min-h-[30px]">2</div>
            </div>
            <div className="flex flex-col px-0.5 rounded w-[38px]">
              <div className="gap-2.5 self-stretch py-0.5 pr-3 pl-3 w-full bg-rose-100 rounded shadow-sm aspect-[17/15] min-h-[30px]">3</div>
            </div>
          </div>
          <div className="self-stretch my-auto">Block Dates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd106b8a238d2077222b26cbfcc0b0fe28c558f?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-2 my-auto bg-orange-600 rounded-lg min-h-[40px] text-stone-50 w-[209px]">
          <div className="self-stretch my-auto">Mark as Available</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b995f26cd80fe800fb1d34d3e7523f7bde4c15c?placeholderIfAbsent=true&apiKey=03e3c575566b4bc08e40e1aed06e4ab4"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </div>
      </div>
      <div className="mt-6 text-sm leading-5 text-black max-md:mr-0.5">
        Quick Tip: <span className="text-neutral-600">Select dates from the calendar and choose to mark them as available or unavailable for bookings.</span>
      </div>
    </div>
  );
};

export default Calendar;
