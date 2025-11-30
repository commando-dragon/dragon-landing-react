import { LuUserRound } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-white shadow p-2 rounded-xl fixed top-5 left-32 right-32 z-999">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1>LOGO</h1>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                نمونه کار ها
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                آموزش
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                تیم ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                مقالات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-500 transition text-base font-medium"
              >
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-3 bg-primary-100 rounded-xl text-primary-500 text-lg hover:bg-primary-500 hover:text-white transition cursor-pointer"
          >
            <RiShoppingCartLine />
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-primary-500 text-white rounded-xl hover:scale-95 transition cursor-pointer flex items-center gap-1"
          >
            <LuUserRound size={20} />
            عضویت / ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
