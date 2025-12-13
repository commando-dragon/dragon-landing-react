import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

const blogNewsData = [
  {
    id: 1,
    title: "ترندهای جدید طراحی وب در سال ۱۴۰۳",
    date: "۲۵ فروردین ۱۴۰۳",
    readTime: "۵ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=1",
    description:
      "طراحی وب در سال ۱۴۰۳ به سمت سادگی، استفاده از رنگ‌های ملایم و تعاملات هوشمند حرکت کرده است. در این مقاله مهم‌ترین ترندها را بررسی می‌کنیم.",
  },
  {
    id: 2,
    title: "React چرا انتخاب اول توسعه‌دهندگان است؟",
    date: "۲۲ فروردین ۱۴۰۳",
    readTime: "۷ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=2",
    description:
      "React با معماری کامپوننت‌محور و عملکرد بالا، به یکی از محبوب‌ترین ابزارهای توسعه فرانت‌اند در جهان تبدیل شده است.",
  },
  {
    id: 3,
    title: "نقش UX در افزایش نرخ تبدیل کاربران",
    date: "۲۰ فروردین ۱۴۰۳",
    readTime: "۶ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=3",
    description:
      "تجربه کاربری مناسب می‌تواند تأثیر مستقیمی روی رفتار کاربران و افزایش فروش داشته باشد. در این مطلب به اصول UX می‌پردازیم.",
  },
  {
    id: 4,
    title: "چگونه سرعت وب‌سایت خود را افزایش دهیم؟",
    date: "۱۸ فروردین ۱۴۰۳",
    readTime: "۴ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=4",
    description:
      "سرعت وب‌سایت یکی از فاکتورهای مهم سئو و تجربه کاربری است. در این مقاله روش‌های کاربردی افزایش سرعت سایت را بررسی می‌کنیم.",
  },
  {
    id: 5,
    title: "آشنایی با Tailwind CSS و مزایای آن",
    date: "۱۵ فروردین ۱۴۰۳",
    readTime: "۵ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=5",
    description:
      "Tailwind CSS با رویکرد utility-first باعث افزایش سرعت توسعه و نظم بیشتر در کدنویسی رابط کاربری می‌شود.",
  },
  {
    id: 6,
    title: "چالش‌های سئو در وب‌سایت‌های SPA",
    date: "۱۲ فروردین ۱۴۰۳",
    readTime: "۶ دقیقه مطالعه",
    image: "https://picsum.photos/600/400?random=6",
    description:
      "وب‌سایت‌های تک‌صفحه‌ای چالش‌های خاصی در سئو دارند. در این مقاله راهکارهای بهینه‌سازی آن‌ها را بررسی می‌کنیم.",
  },
];

const BlogNews = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-center">
        <h3 className="text-4xl font-bold text-primary-500">وبلاگ خبری</h3>
      </div>

      <div className="mt-8 container mx-auto px-4">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop
          className="grid grid-cols-4"
        >
          {blogNewsData.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h4 className="text-lg text-primary-500 font-bold mb-2 line-clamp-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-700 text-sm leading-7 line-clamp-1 mb-3">
                    {item.description}
                  </p>

                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex flex-row items-center gap-1">
                      <CiCalendar size={20} className="text-primary-500" />{" "}
                      {item.date}
                    </span>
                    <span className="flex flex-row items-center gap-1">
                      <GoClock size={20} className="text-primary-500" />{" "}
                      {item.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogNews;
