import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { AiOutlineUser } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";

const names = ["علی", "فاطمه", "محمد", "زهرا", "حسن", "مریم", "رضا", "نسرین"];
const comments = [
  "محصول فوق‌العاده! کیفیت بسیار عالی و قیمت مناسب است.",
  "خدمات شما بی‌نظیر هستند. تشکر از تیم حرفه‌ای شما.",
  "کاملاً راضی هستم. به تمام دوستانم توصیه می‌کنم.",
  "بهترین خریدی که تاکنون کرده‌ام. مجددا خریداری خواهم کرد.",
  "تجربه خریدی عالی و ارسال سریع. سپاسگزار هستم.",
];

const customerCommentsArr = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: names[Math.floor(Math.random() * names.length)],
  team: "COMMANDO",
  comment: comments[Math.floor(Math.random() * comments.length)],
}));

const CustomersComment = () => {
  return (
    <section className="mt-64 py-12 bg-primary-500">
      <div className="flex flex-col gap-4 items-center justify-center mb-8">
        <h3 className="text-white text-4xl font-bold">نظریات مشتریان وفادار</h3>
        <p className="text-white/70 text-base font-medium">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
        </p>
      </div>

      <div className="ml-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={4000}
          loop
          className="mySwiper grid grid-cols-4"
        >
          {customerCommentsArr.map((comment) => (
            <SwiperSlide
              key={comment.id}
              className="p-4 bg-white rounded-2xl relative"
            >
              <FaCommentDots
                size={40}
                className="text-sky-300 absolute top-2 left-2"
              />
              <div className="flex items-start gap-2">
                <div className="p-2 bg-gray-200 rounded-full text-gray-700">
                  <AiOutlineUser size={25} />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-lg text-gray-800 font-semibold">
                    {comment.name}
                  </h5>
                  <p className="text-xs text-gray-500 font-medium">
                    {comment.team}
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-gray-200 p-2 rounded-2xl">
                <p className="text-base text-gray-600 font-medium line-clamp-3">
                  {comment.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mr-16">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          loop
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper mt-6 grid grid-cols-4"
        >
          {customerCommentsArr.map((comment) => (
            <SwiperSlide
              key={comment.id}
              className="p-4 bg-white rounded-2xl relative"
            >
              <FaCommentDots
                size={40}
                className="text-sky-300 absolute top-2 left-2"
              />
              <div className="flex items-start gap-2">
                <div className="p-2 bg-gray-200 rounded-full text-gray-700">
                  <AiOutlineUser size={25} />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-lg text-gray-800 font-semibold">
                    {comment.name}
                  </h5>
                  <p className="text-xs text-gray-500 font-medium">
                    {comment.team}
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-gray-200 p-2 rounded-2xl">
                <p className="text-base text-gray-600 font-medium line-clamp-3">
                  {comment.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomersComment;
