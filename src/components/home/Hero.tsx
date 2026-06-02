import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Desktop Video */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Mobile Video */}
      <div className="absolute inset-0 md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2b0b0b]/80"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 text-center pt-24 md:pt-0">

        {/* Main Title */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            xl:text-9xl
            font-bold
            text-[#d4af37]
            leading-none
          "
        >
          NYAYAMARGA
        </h1>

        {/* Subtitle */}
        <h2
          className="
            text-lg
            sm:text-xl
            md:text-3xl
            lg:text-4xl
            text-[#f4d03f]
            tracking-[4px]
            md:tracking-[10px]
            mt-3
          "
        >
          LAW CHAMBERS
        </h2>

        {/* Divider */}
        <div className="w-24 md:w-40 h-[2px] bg-[#d4af37] mx-auto my-6 md:my-8"></div>

        {/* Kannada Tagline */}
        <p
          className="
            text-xl
            sm:text-2xl
            md:text-4xl
            lg:text-5xl
            text-[#f4d03f]
            font-medium
            px-4
            leading-relaxed
          "
        >
          ನ್ಯಾಯದ ಮಾರ್ಗ ನಮ್ಮದು
        </p>

        {/* English Tagline */}
        <p
          className="
            text-base
            sm:text-lg
            md:text-2xl
            text-white
            mt-3
            font-medium
          "
        >
          Justice Is Our Way
        </p>

        {/* Description */}
        <p
          className="
            max-w-3xl
            mx-auto
            text-gray-200
            mt-6
            text-sm
            sm:text-base
            md:text-lg
            leading-7
            md:leading-8
            px-2
          "
        >
          Delivering exceptional legal services founded upon integrity,
          professionalism, and commitment to justice.

          <span className="hidden md:inline">
            {" "}
            We provide strategic legal solutions across Civil Law, Criminal
            Law, Property Law, Family Law, Consumer Law, Corporate Law, and
            Documentation Services.
          </span>
        </p>

        {/* Buttons */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            mt-10
            max-w-md
            sm:max-w-none
            mx-auto
          "
        >
          <a
            href="#appointment"
            className="
              w-full
              sm:w-auto
              bg-[#d4af37]
              text-black
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#f4d03f]
              transition-all
              duration-300
              shadow-lg
            "
          >
            Book Consultation
          </a>

          <a
            href="tel:+919353237692"
            className="
              w-full
              sm:w-auto
              border-2
              border-[#d4af37]
              text-[#d4af37]
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-[#d4af37]
              hover:text-black
              transition-all
              duration-300
            "
          >
            Call Now
          </a>
        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#2b0b0b] to-transparent"></div>
    </section>
  );
}