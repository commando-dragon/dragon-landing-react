import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
  const images = [
    { title: "هنر و رسانه", src: "/images/service-3.png" },
    { title: "طراحی UI/UX", src: "/images/service-4.png" },
    { title: "هوش مصنوعی", src: "/images/service-5.png" },
    { title: "شبکه و امنیت", src: "/images/service-6.png" },
    { title: "وردپرس", src: "/images/service-7.png" },
    { title: "آمار و داده کاوی", src: "/images/service-8.png" },
  ];

  return (
    <section className="mt-28 relative">
      <div className="space-y-2 text-center flex items-center justify-center flex-col">
        <h2 className="text-4xl text-primary-500 font-bold">خدمات</h2>
        <p className="text-base text-gray-600">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
        </p>
      </div>

      {/* Images */}
      <img
        src="/images/service-1.png"
        alt="Service Shape 1"
        className="absolute top-0 left-10"
      />
      <img
        src="/images/service-2.png"
        alt="Service Shape 2"
        className="absolute top-0 right-10"
      />

      {/* Carousel */}
      <div className="mt-12">
        <Swiper spaceBetween={50} slidesPerView={4} autoplay={true} loop={true}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-52 bg-primary-50 rounded-3xl border border-primary-100 flex items-center justify-center">
                <img src={image.src} alt={`Image ${index + 1}`} />
              </div>
              <h4 className="text-center pt-2 text-primary-500">
                {image.title}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
