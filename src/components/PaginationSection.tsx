import { useState } from "react";
import { phone, laptop, delivery, cardPayment } from "../assets/index";
import { content } from "../helpers/content";

const PaginationSection = () => {
  const [isActive, setIsActive] = useState<number>(0);

  const data = [
    { ...content.contentOne, image: phone },
    { ...content.contentTwo, image: laptop },
    { ...content.contentThree, image: delivery },
    { ...content.contentFour, image: cardPayment },
  ];

  const activeContent = data[isActive];

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 my-8">
        {data.map((_, index) => (
          <div
            key={index}
            onClick={() => setIsActive(index)}
            className={`w-[88px] h-1 rounded-[8px] cursor-pointer ${
              isActive === index ? "bg-orange-600" : "bg-[#eee]"
            }`}
          ></div>
        ))}
      </div>

      <h3 className="mb-10 font-semibold text-[24px]">{activeContent.title}</h3>

      <div className="w-[382px] h-[400px] rounded-[64px] bg-orange-500 overflow-hidden">
        <div className="flex flex-col items-center mt-9 gap-11">
          <p className="w-[302px] font-light text-white text-center">
            {activeContent.description}
          </p>

          <img
            src={activeContent.image}
            alt={`Imagem para ${activeContent.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationSection;
