import MagGlass from '../assets/MagnifyingGlass.png';
// isActive state for conditional rendering
// text will read "Search local talent" when isActive !== true
// text will conatin "where" "when" and "what" fields when isActive === true
// include magnifying glass at the end

const SearchBar = () => {
  return (
    <div className='flex justify-between w-[280px] bg-white rounded-3xl py-2 px-5'>
      <p className='text-text_secondary'>Search local talent</p>
      <img src={MagGlass} alt="magnifying glass icon" />
    </div>
  )
}

export default SearchBar
