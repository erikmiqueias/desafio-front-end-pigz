import { useState } from "react";
import phone from "../assets/phoneImg/Grupo de máscara 2417.png";
import laptop from "../assets/laptop/Grupo de máscara 2418.png";
import delivery from "../assets/delivery/Grupo de máscara 2420.png";
import cardPayment from "../assets/mobile/mobile.png";

import { content } from "../helpers/content";

const PaginationSection = () => {
  const [isActive, setIsActive] = useState<number>(0);

  const changeContent = (index: number) => {
    if (index === 0) {
      const { title, description } = content.contentOne;
      return { title, description };
    }
    if (index === 1) {
      const { title, description } = content.contentTwo;
      return { title, description };
    }

    if (index === 2) {
      const { title, description } = content.contentThree;
      return { title, description };
    }

    if (index === 3) {
      const { title, description } = content.contentFour;
      return { title, description };
    }
  };

  const contentResult = changeContent(isActive);
  return (
    <>
      <div className="flex gap-2 my-8">
        <div
          onClick={() => setIsActive(0)}
          className={`w-[88px] h-1 rounded-[8px] cursor-pointer ${
            isActive === 0 ? "bg-orange-600" : "bg-[#eee]"
          }`}
        ></div>

        <div
          onClick={() => setIsActive(1)}
          className={`w-[88px] h-1 rounded-[8px] cursor-pointer ${
            isActive === 1 ? "bg-orange-600" : "bg-[#eee]"
          }`}
        ></div>

        <div
          onClick={() => setIsActive(2)}
          className={`w-[88px] h-1 rounded-[8px] cursor-pointer ${
            isActive === 2 ? "bg-orange-600" : "bg-[#eee]"
          }`}
        ></div>

        <div
          onClick={() => setIsActive(3)}
          className={`w-[88px] h-1 rounded-[8px] cursor-pointer ${
            isActive === 3 ? "bg-orange-600" : "bg-[#eee]"
          }`}
        ></div>
      </div>

      <h3 className="mb-10 font-semibold text-[24px]">
        {contentResult?.title}
      </h3>
      <div className="w-[382px] h-[400px] rounded-[64px] bg-orange-500 overflow-y-hidden">
        <div className="flex flex-col items-center mt-9 gap-11">
          <p className="w-[302px] font-light text-white text-center">
            {contentResult?.description}
          </p>

          <img
            src={
              isActive === 0
                ? phone
                : isActive === 1
                ? laptop
                : isActive === 2
                ? delivery
                : cardPayment
            }
            alt="image de dois telefones com o aplicativo da pigz"
          />
        </div>
      </div>
    </>
  );
};

export default PaginationSection;
