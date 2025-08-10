import React from "react";
import Button from "./Button";

const ServiceSection = ({ title, description, imageSrc, imageLeft = true }) => {
  return (
    <div
      className={`
        flex 
        flex-col md:flex-row 
        items-center 
        gap-8 
        max-w-[1064px] 
        mx-auto 
        px-4 
        h-auto md:h-[414px]
        ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"}
      `}
    >
      <img
        className="w-full max-w-[414px] h-auto md:h-[414px] object-cover rounded-md"
        src={imageSrc}
        alt={title}
      />
      <div className="flex flex-col items-start gap-5 max-w-[542px] w-full">
        <h2 className="text-primary-blue font-poppins text-xl sm:text-2xl md:text-[27px] font-bold leading-snug tracking-wide max-w-full">
          {title}
        </h2>
        <p className="text-black font-inter text-base sm:text-lg leading-relaxed max-w-full">
          {description}
        </p>
        <Button className="bg-primary-orange px-6 py-2 text-white rounded-md self-start">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default ServiceSection;
