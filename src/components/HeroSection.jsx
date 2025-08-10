import React from "react";

const HeroSection = () => {
  const handleButtonClick = () => {
    console.log("Get free consultation clicked");
  };

  return (
    <div className="relative w-full h-[700px]">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[#D9D9D9]"></div>
        <img
          className="absolute top-[-40px] left-0 w-full h-[763px] object-cover"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ffc1b9fd714c764c5e32665b39c5c998379e3943?width=2880"
          alt=""
        />
      </div>

      <div
        className="
        absolute
        left-5 sm:left-10 md:left-16 lg:left-20 xl:left-20
        top-[320px] sm:top-[340px] md:top-[350px] lg:top-[354px]
        w-[calc(100%-40px)] sm:w-[calc(100%-80px)] md:w-[600px] lg:w-[630px]
        h-auto
        flex flex-col items-start gap-5
        bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79]
        p-6 sm:p-8 md:p-10 lg:pt-6 lg:px-10 lg:pb-8
      "
      >
        <h1
          className="
          w-full lg:w-[556px]
          text-white font-inter font-bold
          text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
          leading-tight sm:leading-tight md:leading-tight lg:leading-[100%]
          tracking-[-0.5px] sm:tracking-[-0.6px] md:tracking-[-0.8px] lg:tracking-[-0.96px]
          capitalize
        "
        >
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>

        <button
          className="
            inline-flex items-start gap-2
            py-3 px-5
            bg-primary-orange
            rounded
            w-[214px] h-[38px]
            text-white font-inter text-sm font-bold
            leading-[100%] tracking-[-0.28px] uppercase
          "
          onClick={handleButtonClick}
        >
          Get free consultation
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
