import Image from "next/image";
import bg from "@/public/images/bg-slider.webp";
import Link from "next/link";
import banner from "@/public/icons/banner.svg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image src={banner} alt="" className="" />
        </div>

        {/* Hero content */}
        <div className="relative pt-28 lg:pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              BARBER QUỲNH ĐƠN
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full h-auto mb-4 sm:w-auto sm:mb-0"
                  href="https://www.facebook.com/havan.nguyenthi.14"
                >
                  Liên hệ qua Facebook Đơn nhé~
                </Link>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

          <Image src={bg} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
