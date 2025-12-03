import { LuGem } from "react-icons/lu";

type PlansType = {
  id: number;
  title: string;
  features: string[];
  label: string;
  oldPrice?: string;
  price: string;
  support: string;
  discount?: string;
};

const Plans = () => {
  const plansArr: PlansType[] = [
    {
      id: 1,
      title: "وبلاگ خبری",
      label: "حرفه ای",
      price: " 4/000/000 تومان",
      features: [
        "شخصی سازی سطح 3",
        "امنیت سطح 3",
        "افزایش سرعت سایت",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
      ],
      support: "ماهانه",
    },
    {
      id: 2,
      title: "فروشگاهی",
      label: "محبوب",
      oldPrice: " 9/400/00 تومان",
      price: " 6/150/000 تومان",
      features: [
        "شخصی سازی سطح 3",
        "امنیت سطح 3",
        "افزایش سرعت سایت",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
        "افزایش سرعت سایت",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
      ],
      support: "1 سال اول ",
      discount: "40%",
    },
    {
      id: 3,
      title: "خدماتی",
      label: "حرفه ای ",
      oldPrice: " 3/500/000 تومان",
      price: " 1/150/000 تومان",
      features: [
        "شخصی سازی سطح 3",
        "امنیت سطح 3",
        "افزایش سرعت سایت",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
        "بهینه سازی تصویر",
        "بکاپ گیری خودکار",
        "اتصال به درگاه پرداخت رمز ارز",
        "افزایش سرعت سایت",
      ],
      support: "2 ماه اول",
      discount: "50%",
    },
  ];

  return (
    <section className="mt-12 container mx-auto px-4">
      <div className="space-y-2 text-center flex items-center justify-center flex-col">
        <h2 className="text-4xl text-primary-500 font-bold">پلن های طراحی</h2>
      </div>

      <div className="flex flex-row gap-8 mt-8 justify-center items-center">
        {plansArr.map((plan) => (
          <div
            key={plan.id}
            className="p-4 border border-gray-300 rounded-3xl w-sm relative overflow-hidden h-full"
          >
            <div className="bg-primary-100 rounded-xl text-lg text-primary-500 w-10 h-10 flex items-center justify-center">
              <LuGem />
            </div>
            <div className="my-4 flex items-center gap-2">
              <h3 className="text-xl font-medium text-gray-800">
                {plan.title}
              </h3>
              <div className="py-1 px-3 border border-primary-500 rounded-lg text-primary-500 text-xs">
                به صرفه
              </div>
            </div>
            <p className="text-lg font-medium text-primary-500 mb-4">
              پشتیبانی
            </p>
            <div className="flex items-start justify-between">
              <span className="font-bold text-xl text-primary-500 pb-4 block">
                {plan.support}
              </span>
              {plan.discount && (
                <div className="bg-red-500 py-1 px-3 rounded-lg text-white text-sm font-medium">
                  با {plan.discount} تخفیف
                </div>
              )}
            </div>
            <div className="absolute top-4 -left-10 w-32 p-1 bg-primary-500 text-white text-sm font-medium -rotate-45 text-center">
              {plan.label}
            </div>
            <hr className="text-gray-300" />
            <ul className="py-4 ps-4 flex flex-col gap-4">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-700 marker:text-primary-500 list-disc"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <hr className="text-gray-300" />
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                {plan.discount && (
                  <div className="text-gray-600 text-sm font-medium flex flex-col gap-1">
                    <span className="text-primary-500">{plan.discount}</span>
                    تخفیف ویژه
                  </div>
                )}

                <div className="flex flex-col gap-1 items-center">
                  {plan.oldPrice && (
                    <span className="text-gray-500 line-through text-sm font-medium">
                      {plan.oldPrice}
                    </span>
                  )}
                  <span className="text-base font-medium text-gray-800 block text-center">
                    {plan.price}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="py-2 px-4 text-lg text-primary-500 border border-primary-500 rounded-xl cursor-pointer hover:bg-primary-100 transition"
              >
                سفارش و مشاوره
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
