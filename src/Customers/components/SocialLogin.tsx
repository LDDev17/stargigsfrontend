

export function SocialLogin() {
  return (
    <>
      <div className="flex gap-4 items-center mx-0 my-6">
        <div className="flex-1 h-px bg-zinc-300" />
        <p className="text-base leading-7 text-slate-700">Or Continue with</p>
        <div className="flex-1 h-px bg-zinc-300" />
      </div>
      <div className="flex gap-4 justify-center">
        <button className="flex justify-center items-center rounded-xl border border-solid cursor-pointer border-zinc-300 h-[52px] w-[52px]">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4008_78)">
              <path
                d="M27.727 15.1563C27.727 14.2046 27.6499 13.2478 27.4853 12.3115H14.28V17.7027H21.842C21.5283 19.4414 20.52 20.9795 19.0436 21.9569V25.455H23.5551C26.2044 23.0167 27.727 19.4157 27.727 15.1563Z"
                fill="#4285F4"
              />
              <path
                d="M14.28 28.8349C18.0559 28.8349 21.2402 27.5951 23.5602 25.4551L19.0487 21.957C17.7935 22.811 16.1731 23.2945 14.2852 23.2945C10.6328 23.2945 7.53596 20.8305 6.42481 17.5176H1.76929V21.1237C4.14592 25.8512 8.98663 28.8349 14.28 28.8349Z"
                fill="#34A853"
              />
              <path
                d="M6.41966 17.5176C5.83322 15.7789 5.83322 13.8961 6.41966 12.1574V8.55127H1.76928C-0.216388 12.5072 -0.216388 17.1678 1.76928 21.1237L6.41966 17.5176Z"
                fill="#FBBC04"
              />
              <path
                d="M14.28 6.37526C16.276 6.34439 18.2051 7.09545 19.6506 8.4741L23.6477 4.47704C21.1167 2.10041 17.7575 0.793774 14.28 0.834928C8.98663 0.834928 4.14592 3.81858 1.76929 8.55126L6.41966 12.1574C7.52567 8.83934 10.6276 6.37526 14.28 6.37526Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_4008_78">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0 0.833984)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="flex justify-center items-center rounded-xl border border-solid cursor-pointer border-zinc-300 h-[52px] w-[52px]">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4008_3905)">
              <path
                d="M28 14.834C28 7.10199 21.732 0.833984 14 0.833984C6.26801 0.833984 0 7.10199 0 14.834C0 21.8217 5.11957 27.6136 11.8125 28.6639V18.8809H8.25781V14.834H11.8125V11.7496C11.8125 8.24086 13.9027 6.30273 17.1005 6.30273C18.6318 6.30273 20.2344 6.57617 20.2344 6.57617V10.0215H18.4691C16.73 10.0215 16.1875 11.1007 16.1875 12.209V14.834H20.0703L19.4496 18.8809H16.1875V28.6639C22.8804 27.6136 28 21.8217 28 14.834Z"
                fill="#1877F2"
              />
              <path
                d="M19.4496 18.8809L20.0703 14.834H16.1875V12.209C16.1875 11.1018 16.73 10.0215 18.4691 10.0215H20.2344V6.57617C20.2344 6.57617 18.6323 6.30273 17.1005 6.30273C13.9027 6.30273 11.8125 8.24086 11.8125 11.7496V14.834H8.25781V18.8809H11.8125V28.6639C13.262 28.8907 14.738 28.8907 16.1875 28.6639V18.8809H19.4496Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_4008_3905">
                <rect
                  width="28"
                  height="28"
                  fill="white"
                  transform="translate(0 0.833984)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
}
