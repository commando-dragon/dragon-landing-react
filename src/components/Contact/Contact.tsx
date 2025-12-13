import { BsStars } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GrMicrophone } from "react-icons/gr";
import { RxUpload } from "react-icons/rx";
import Logo from "../Logo/Logo";

const Contact = () => {
  return (
    <section className="mt-12 container mx-auto px-4">
      {/* Contact Banner */}
      <div className="p-8 bg-primary-500 rounded-2xl overflow-hidden relative">
        <div className="flex items-center gap-4">
          <div>
            <Logo color="#fff" />
          </div>
          <h3 className="text-3xl font-bold text-white">
            ارتباط با کارشناسان ومشاوره رایگان از سایت کماندو دراگون
          </h3>
          <div className="relative">
            <div className="w-52 h-3 bg-white -rotate-45 absolute top-0 -left-40"></div>
            <div className="w-52 h-3 bg-[#FF04DE] -rotate-45 absolute top-0 -left-54"></div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 relative">
        <div className="bg-primary-700 p-4 rounded-3xl w-2xl">
          <form className="grid grid-cols-3 gap-4">
            <label className="flex flex-col gap-1 text-white">
              نام
              <input
                type="text"
                placeholder="نام"
                className="bg-primary-500 rounded-xl py-2 px-4 text-white text-sm font-medium focus:outline-1 focus:outline-primary-300 transition"
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              نام خانوادگی
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="bg-primary-500 rounded-xl py-2 px-4 text-white text-sm font-medium focus:outline-1 focus:outline-primary-300 transition"
              />
            </label>

            <label className="flex flex-col gap-1 text-white">
              شماره تماس
              <input
                type="text"
                placeholder="شماره تماس"
                className="bg-primary-500 rounded-xl py-2 px-4 text-white text-sm font-medium focus:outline-1 focus:outline-primary-300 transition"
              />
            </label>

            <label className="flex flex-col gap-1 text-white">
              عنوان پرسش
              <select className="bg-primary-500 rounded-xl py-2 px-4 text-white text-sm font-medium focus:outline-1 focus:outline-primary-300 transition">
                <option value="programming">برنامه نویسی</option>
                <option value="translation">ترجمه</option>
                <option value="ads">تبلیغات</option>
              </select>
            </label>
          </form>
        </div>
        <div className="bg-primary-700/40 shadow backdrop-blur-2xl p-4 rounded-3xl w-2xl border border-primary-300 absolute -bottom-46 left-0">
          <div className="relative">
            <h4 className="text-xl font-medium text-white">
              چه طرحی مناسب سایت منه؟
            </h4>
            <span className="absolute top-1 left-1 text-white/80">
              <BsStars size={40} />
            </span>
            <textarea
              className="outline-none bg-transparent p-2 text-sm font-medium text-white resize-none w-full my-4 h-24"
              placeholder="اینجا بنویس..."
            ></textarea>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-white py-2 px-4 rounded-xl text-primary-500 cursor-pointer flex items-center gap-2 hover:opacity-60 transition-opacity"
              >
                <CiSearch size={20} />
                شروع گفتگو
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="bg-transparent p-3 rounded-xl border border-white cursor-pointer text-white hover:bg-white hover:text-primary-500 transition"
                >
                  <GrMicrophone size={20} />
                </button>
                <label
                  htmlFor="file-upload"
                  className="block bg-transparent py-2 px-4 rounded-xl border border-white cursor-pointer text-white hover:bg-white hover:text-primary-500 transition"
                >
                  <div className="flex items-center gap-2">
                    <span>
                      <RxUpload size={20} />
                    </span>
                    <p className="text-base font-medium">اتصال فایل</p>
                  </div>
                  <input type="file" id="file_upload" className="sr-only" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
