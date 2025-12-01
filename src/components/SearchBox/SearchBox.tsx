import { CiSearch } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <section className="container mx-auto px-4 flex items-center justify-center my-12">
      <div className="p-8 bg-primary-500 w-4/5 rounded-3xl relative">
        <div className="flex items-center gap-2">
          <label
            htmlFor="search_input"
            className="flex-1 w-full bg-white rounded-xl flex items-center gap-2 px-4"
          >
            <CiSearch size={25} className="text-primary-500" />
            <input
              type="text"
              placeholder="دنبال چی میگردی"
              className="p-3 outline-none text-gray-800 text-base font-medium w-full"
              id="search_input"
            />
          </label>
          <button
            type="button"
            className="bg-white text-primary-500 rounded-xl py-3 px-6 text-base hover:bg-primary-100 hover:text-primary-600 transition cursor-pointer"
          >
            جستجو
          </button>
        </div>
        <div className="flex items-center justify-center absolute -bottom-10 w-full">
          <button
            type="button"
            className="p-4 bg-primary-500 rounded-b-full text-white text-2xl w-28 flex items-center justify-center cursor-pointer"
          >
            <FaArrowDownLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
