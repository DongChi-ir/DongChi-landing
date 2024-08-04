import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Phone from "@/public/images/phone.png";
import MarketDownloadButton from "@/components/landing/MarketDownloadButton";
export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-4xl sm:text-5xl font-IranYekanBold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              دنگ‌چی,  یار همیشگی مسافرت هات
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mt-5 mb-8 text-[16px] leading-loose sm:text-lg text-gray-700 font-IranYekanBold"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                به کمک دنگ چی میتونی هرجا خواستی کارت بکشی و بعدش نگران نباشی که پولات کجا میره چون برنامه دقیق برات دنگ ها رو حساب میکنه و بین دوستات تقسیم میکنه
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs flex flex-col gap-y-6 sm:flex-row sm:max-w-none sm:justify-center sm:gap-x-5 "
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <MarketDownloadButton buttonType="cafeBazaar"/>
                  <MarketDownloadButton buttonType="myket"/>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <Image src={Phone} alt="phone-image" className="mx-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
}
