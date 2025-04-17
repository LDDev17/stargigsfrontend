

const Toggle = () => {
  return (
    <div className="flex">
      <label className="relative flex justify-between items-center group p-2 text-xl">
        Text goes here.
        <input
          type="checkbox"
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
        />
        <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-[#D4D6DD]
          rounded-full duration-300 ease-in-out peer-checked:bg-gradient-to-r from-light_orange to-primary
          after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md
          after:druation-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"
        ></span>
      </label>
    </div>
  )
}

export default Toggle;
