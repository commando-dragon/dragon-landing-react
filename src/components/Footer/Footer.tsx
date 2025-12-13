import React from "react";
import { BsInstagram, BsLinkedin, BsTelegram, BsX } from "react-icons/bs";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: "آی‌لرن",
    links: [
      { title: "اطلاعات تماس", href: "#" },
      { title: "موقعیت مکانی", href: "#" },
      { title: "استعلام گواهینامه", href: "#" },
      { title: "درباره ما", href: "#" },
    ],
  },
  {
    heading: "لینک‌های مفید",
    links: [
      { title: "ساخت حساب کاربری", href: "#" },
      { title: "حریم خصوصی کاربران", href: "#" },
      { title: "سوالات متداول", href: "#" },
      { title: "شرایط ثبت‌نام", href: "#" },
      { title: "درخواست", href: "#" },
    ],
  },
  {
    heading: "دوره‌های محبوب",
    links: [
      { title: "طراحی سایت با وردپرس المنتور", href: "#" },
      { title: "پکیج جامع", href: "#" },
      { title: "بینایی هوش مصنوعی Gemini", href: "#" },
      { title: "مارکت کامپیوتری پیشرفته", href: "#" },
      { title: "دوره تجربه کاربری نهایی", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f1a] text-gray-300 pt-16 mt-16">
      <div className="container mx-auto px-4">
        {/* top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* columns */}
          {footerColumns.map((col) => (
            <div key={col.heading} className="mb-4">
              <h4 className="text-white font-bold mb-4">{col.heading}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <a href={link.href} className="hover:text-white transition">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* about */}
          <div>
            <h4 className="text-white font-bold">مختصری درباره ما</h4>
            <p className="text-sm leading-7 text-gray-400">
              کدنویسی حرفه‌ای است که خدمات متنوعی در زمینه طراحی و توسعه
              وب‌سایت‌ها ارائه می‌دهد. ما برای کمک به رشد کسب‌وکارها در مسیر
              دیجیتال همراه شما هستیم.
            </p>

            {/* trust logos */}
            <div className="flex gap-3 mt-6">
              {/* خودت عکس‌ها رو اینجا بذار */}
              <img
                src="/images/footer-1.png"
                alt="Footer Image 1"
                className="w-16 h-16 bg-white/10 rounded-lg"
              />
              <img
                src="/images/footer-2.png"
                alt="Footer Image 2"
                className="w-16 h-16 bg-white/10 rounded-lg"
              />
              <img
                src="/images/footer-3.png"
                alt="Footer Image 3"
                className="w-16 h-16 bg-white/10 rounded-lg"
              />
            </div>

            {/* social */}
            <div className="flex gap-4 mt-6 text-xl">
              <BsTelegram
                size={20}
                className="text-white hover:textwhite/50 transition"
              />
              <BsLinkedin
                size={20}
                className="text-white hover:textwhite/50 transition"
              />
              <BsInstagram
                size={20}
                className="text-white hover:textwhite/50 transition"
              />
              <BsX
                size={20}
                className="text-white hover:textwhite/50 transition"
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-white/10 mt-12 pt-6 pb-4 text-center text-xs text-gray-500">
          © کلیه حقوق مادی و معنوی این سایت متعلق به کماندو دراگون می‌باشد.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
