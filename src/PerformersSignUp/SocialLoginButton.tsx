

interface SocialLoginButtonProps {
  provider: "google" | "facebook";
  onClick: () => void;
}

export function SocialLoginButton({
  provider,
  onClick,
}: SocialLoginButtonProps) {
  const GoogleIcon = () => (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4008_829)">
        <path
          d="M27.727 15.1563C27.727 14.2046 27.6499 13.2478 27.4853 12.3115H14.28V17.7027H21.842C21.5283 19.4414 20.52 20.9795 19.0436 21.9569V25.455H23.5551C26.2044 23.0167 27.727 19.4157 27.727 15.1563Z"
          fill="#4285F4"
        />
        <path
          d="M14.28 28.8346C18.0559 28.8346 21.2402 27.5949 23.5602 25.4549L19.0487 21.9568C17.7935 22.8107 16.1731 23.2943 14.2852 23.2943C10.6328 23.2943 7.53596 20.8302 6.42481 17.5173H1.76929V21.1234C4.14592 25.851 8.98663 28.8346 14.28 28.8346Z"
          fill="#34A853"
        />
        <path
          d="M6.41966 17.5174C5.83322 15.7787 5.83322 13.8959 6.41966 12.1571V8.55103H1.76928C-0.216388 12.5069 -0.216388 17.1676 1.76928 21.1235L6.41966 17.5174Z"
          fill="#FBBC04"
        />
        <path
          d="M14.28 6.37501C16.276 6.34415 18.2051 7.0952 19.6506 8.47386L23.6477 4.47679C21.1167 2.10016 17.7575 0.79353 14.28 0.834684C8.98663 0.834684 4.14592 3.81833 1.76929 8.55102L6.41966 12.1571C7.52567 8.8391 10.6276 6.37501 14.28 6.37501Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_4008_829">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0 0.83374)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4008_732)">
        <path
          d="M28 14.8337C28 7.10175 21.732 0.83374 14 0.83374C6.26801 0.83374 0 7.10175 0 14.8337C0 21.8214 5.11957 27.6134 11.8125 28.6637V18.8806H8.25781V14.8337H11.8125V11.7494C11.8125 8.24061 13.9027 6.30249 17.1005 6.30249C18.6318 6.30249 20.2344 6.57593 20.2344 6.57593V10.0212H18.4691C16.73 10.0212 16.1875 11.1005 16.1875 12.2087V14.8337H20.0703L19.4496 18.8806H16.1875V28.6637C22.8804 27.6134 28 21.8214 28 14.8337Z"
          fill="#1877F2"
        />
        <path
          d="M19.4496 18.8806L20.0703 14.8337H16.1875V12.2087C16.1875 11.1016 16.73 10.0212 18.4691 10.0212H20.2344V6.57593C20.2344 6.57593 18.6323 6.30249 17.1005 6.30249C13.9027 6.30249 11.8125 8.24062 11.8125 11.7494V14.8337H8.25781V18.8806H11.8125V28.6637C13.262 28.8904 14.738 28.8904 16.1875 28.6637V18.8806H19.4496Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_4008_732">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0 0.83374)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center rounded-xl border border-solid cursor-pointer border-zinc-300 h-[52px] w-[52px]"
      aria-label={`Sign in with ${provider}`}
    >
      {provider === "google" ? <GoogleIcon /> : <FacebookIcon />}
    </button>
  );
}
