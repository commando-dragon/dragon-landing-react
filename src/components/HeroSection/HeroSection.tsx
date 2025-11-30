import { FaPlay } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Topbar from "../Topbar/Topbar";

const HeroSection = () => {
  const columns = Array(12)
    .fill(2)
    .map((_, index) => (
      <div key={index} className="w-40 h-full border-r border-white/30"></div>
    ));

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden">
      {/* Topbar */}
      <Topbar />

      {/* Background */}
      <div className="w-full h-full flex absolute top-0 left-0 -z-10">
        {columns}
        <div className="absolute top-0 right-0 left-0 w-full h-3/4 rounded-b-full -z-10 bg-primary-500 blur-[80px] opacity-100"></div>
      </div>

      {/* Content */}
      <div className="w-lg z-50 text-center">
        <div className="space-y-4">
          <h1 className="text-white text-5xl font-extrabold">
            سریع، امن و کاملا مطمئن
          </h1>
          <h2 className="text-white text-4xl font-bold">
            ارائه دهنده انواع تبلیغات و خدمات
          </h2>
        </div>
        <p className="text-black text-base font-medium mt-12">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <div className="mt-12 flex items-center justify-around">
          <button
            type="button"
            className="bg-primary-500 text-white text-base py-2 px-4 rounded-full flex items-center gap-2 hover:scale-95 transition cursor-pointer"
          >
            مشاوره رایگان
            <FiPhoneCall />
          </button>
          <button
            type="button"
            className="text-black text-base py-2 px-4 rounded-full flex items-center gap-2 hover:bg-primary-200 transition cursor-pointer"
          >
            مشاهده آموزش
            <span className="bg-primary-300 p-2 rounded-full shadow text-primary-500">
              <FaPlay />
            </span>
          </button>
        </div>
      </div>

      {/* Images */}
      <img
        src="/images/hero-rocket.png"
        alt="Hero Rocket"
        className="absolute top-2 -left-20 -z-10"
      />
      <img
        src="/images/hero-target.png"
        alt="Hero Target"
        className="absolute top-20 right-10 -z-10"
      />
      <img
        src="/images/hero-chatgpt.png"
        alt="Hero Chatgpt"
        className="absolute top-5 left-10 -z-10"
      />
      <img
        src="/images/hero-html.png"
        alt="Hero Html"
        className="absolute top-5 right-10 -z-10"
      />
      <img
        src="/images/hero-php.png"
        alt="Hero Php"
        className="absolute bottom-10 right-28 -z-10"
      />
      <img
        src="/images/hero-plan.png"
        alt="Hero Plan"
        className="absolute bottom-5 left-36 -z-10"
      />
    </div>
  );
};

export default HeroSection;
