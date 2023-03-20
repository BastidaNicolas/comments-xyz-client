export default function Searchbar() {
  return (
    <div className="relative block">
      <input
        className="peer bg-neutral-800 focus:bg-neutral-700 focus:outline-none w-full block text-sm py-2.5  pl-10 pr-3.5 rounded-lg"
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search user..."
      />
      <span className="absolute inset-y-1 left-1 flex items-center pl-2 text-neutral-400 peer-focus:text-neutral-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <div className="block absolute bg-neutral-800 w-full top-10">
        hello people
      </div>
    </div>
  );
}
