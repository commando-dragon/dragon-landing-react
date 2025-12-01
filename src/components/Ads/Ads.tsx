const Ads = () => {
  return (
    <section className="my-12 container mx-auto px-4">
      <div>
        <div className="space-y-2 text-center flex items-center justify-center flex-col">
          <h2 className="text-4xl text-primary-500 font-bold">تبلیغات</h2>
          <p className="text-base text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ{" "}
          </p>
        </div>
        <div className="grid grid-cols-12 items-center gap-12 mt-4">
          <p className="col-span-6 text-base font-medium text-gray-700">
            از آنجایی که در حال حاضر بیش از ۱۲۰ میلیون کاربر در فضای وب وجود
            دارد، فرصت خوبی برای همه‌ی کسب‌وکارها است تا از ظرفیت نمایش استفاده
            کنند. با استفاده از تبلیغات در بستر وب، نه تنها می‌توانید نام و
            آوازه‌ی کسب‌وکارتان را به گوش افراد بسیاری برسانید، بلکه می‌توانید
            روز به روز فروش و ورودی وب‌سایت‌تان را نیز افزایش دهید. <br /> با
            استفاده از تبلیغات در بستر وب، نه تنها می‌توانید نام و آوازه‌ی
            کسب‌وکارتان را به گوش افراد بسیاری برسانید.
          </p>
          <div className="col-span-6 flex items-center justify-end gap-2">
            <img src="/images/ads-blender.png" alt="Ads Blender" />
            <img src="/images/ads-finantial.png" alt="Ads Finantial" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
