import { whatsapp } from "../assets";
import { Button } from "./ui/button";

const PromoSection = () => {
  return (
    <section className="text-[#333] mt-14">
      <div className="flex flex-col gap-5 items-center">
        <div className="w-[382px] h-[472px] rounded-[64px] bg-[#fafafa]">
          <div className="pt-9 pl-10">
            <div className="flex flex-col mb-8 ">
              <h3 className="font-bold text-[24px]">Pigz</h3>
              <h4 className="text-[16px] font-medium">Tudo que você precisa</h4>
            </div>

            <div className="flex flex-col gap-2 text-[14px]">
              <span>Pigz Marketplace</span>
              <span>Página exclusiva</span>
              <span>Pigz Gestão Desktop e Mobile</span>
              <span>Gestão de entregadores</span>
              <span>Vias de impressão personalizáveis</span>
            </div>

            <div className="w-40 h-14 rounded-[32px] bg-white flex items-center justify-center mt-8">
              <span className="font-bold text-lg">R$199/mês</span>
            </div>

            <div className="flex items-center w-full mt-7">
              <Button className="bg-orange-500 rounded-3xl w-[302px] h-14 text-[16px] font-medium">
                Vender no Pigz agora
              </Button>
            </div>
          </div>
        </div>

        <div className="w-[382px] h-[472px] rounded-[64px] bg-[#fafafa]">
          <div className="pt-9 pl-10">
            <div className="flex flex-col mb-8 gap-2">
              <h3 className="font-bold text-[24px]">Pagamento On-line</h3>
              <h4 className="text-[16px] font-medium">Segurança e agilidade</h4>
            </div>

            <div className="flex flex-col gap-2 text-[14px]">
              <span>Aceite Pix e Cartão de Crédito</span>
              <span>Antecipação Pix automática</span>
              <span>Não dependa de maquininha de cartão</span>
              <span>Segurança para receber pedidos</span>
              <span>Agilidade para entregar</span>
            </div>

            <div className="w-[258px] h-14 rounded-[32px] bg-white flex items-center justify-center mt-8">
              <span className="font-bold text-lg">2,99% por transação</span>
            </div>

            <div className="flex items-center w-full mt-7">
              <Button className="bg-orange-500 rounded-3xl w-[302px] h-14 text-[16px] font-medium">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-10">
          <span>Fale com a Pigz</span>

          <div className="flex gap-2">
            <img src={whatsapp} alt="" />
            <p>
              <span className="text-[13px] mr-1">95</span>3224-2603
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
