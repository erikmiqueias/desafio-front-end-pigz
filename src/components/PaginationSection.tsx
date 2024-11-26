import { useState } from "react";
import phoneImg from "../assets/Grupo de máscara 2417/Grupo de máscara 2417.png";
import laptopImg from "../assets/laptopImg/Grupo de máscara 2418.png";
import motoboy from "../assets/motoboy/Grupo de máscara 2420.png";
import mobile from "../assets/mobile/mobile.png";

const PaginationSection = () => {
  const [isActive, setIsActive] = useState<number>(0);
  return (
    <>
      <div className="flex gap-1 mt-6">
        <div
          onClick={() => setIsActive(0)}
          className={
            isActive === 0
              ? "cursor-pointer w-[88px] h-1 bg-orange-600 rounded-[8px]"
              : "cursor-pointer w-[88px] h-1 bg-gray-300 rounded-[8px]"
          }
        ></div>
        <div
          onClick={() => setIsActive(1)}
          className={
            isActive === 1
              ? "cursor-pointer w-[88px] h-1 bg-orange-600 rounded-[8px]"
              : "cursor-pointer w-[88px] h-1 bg-gray-300 rounded-[8px]"
          }
        ></div>
        <div
          onClick={() => setIsActive(2)}
          className={
            isActive === 2
              ? "cursor-pointer w-[88px] h-1 bg-orange-600 rounded-[8px]"
              : "cursor-pointer w-[88px] h-1 bg-gray-300 rounded-[8px]"
          }
        ></div>
        <div
          onClick={() => setIsActive(3)}
          className={
            isActive === 3
              ? "cursor-pointer w-[88px] h-1 bg-orange-600 rounded-[8px]"
              : "cursor-pointer w-[88px] h-1 bg-gray-300 rounded-[8px]"
          }
        ></div>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <h3 className="text-[24px] font-semibold">
          {isActive === 0
            ? "Pigz Marketplace"
            : isActive === 1
            ? "Pigz Gestão"
            : isActive === 2
            ? "Gestão de entregadores"
            : "Pagamento online"}
        </h3>

        <div className="flex flex-col items-center mt-8 self-center bg-orange-500 rounded-[64px] text-white">
          <div className="mt-7 overflow-clip">
            <p className="w-[302px] text-[15px] font-light text-center">
              {isActive === 0
                ? "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais."
                : isActive === 1
                ? "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidades de produtos rapidamente, como deve ser"
                : isActive === 2
                ? "A ferramenta ideal para quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega. individualmente"
                : "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregados nem precisa levar a maquininha de cartão."}
            </p>
          </div>

          <img
            className="w-[382px] mt-10"
            src={
              isActive === 0
                ? phoneImg
                : isActive === 1
                ? laptopImg
                : isActive === 2
                ? motoboy
                : mobile
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PaginationSection;
