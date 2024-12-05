import {
  appStore,
  facebookLogo,
  headPhone,
  instagramLogo,
  linkedinLogo,
  orangeLogo,
  pigzBlackAndWhite,
  playStore,
  youtubeLogo,
} from "../assets";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] mt-16 text-[#676767] border-b-[5px] border-orange-600">
      <section className="pt-16 ml-4">
        <div className="flex flex-col gap-2">
          <img className="w-20" src={pigzBlackAndWhite} alt="" />
          <span className="text-[11px]">Tudo que você precisa</span>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <p>Baixe o APP</p>
          <div className="flex gap-2">
            <img src={appStore} alt="Apple store badge for download" />
            <img src={playStore} alt="Play store badge for download" />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-14 text-[14px]">
          <p className="text-[16px] font-semibold">Pigz</p>
          <p>Sobre o Pigz</p>
          <p>Portal de Parceiro</p>
          <p>Quero ser um Pigz Partner</p>
        </div>

        <div className="flex flex-col mt-14 gap-5">
          <div className="flex gap-4">
            <img src={headPhone} alt="Headphone icon" />
            <p className="font-semibold text-[16px]">Fale conosco</p>
          </div>
          <p>falecom@pigz.com.br</p>
          <p>(95) 3224-2603</p>

          <div className="flex flex-col gap-2">
            <p>Pigz nas redes</p>
            <div className="flex gap-4">
              <img
                className="cursor-pointer"
                src={linkedinLogo}
                alt="linkedin logo avatar"
              />
              <img
                className="cursor-pointer"
                src={instagramLogo}
                alt="instagram logo avatar"
              />
              <img
                className="cursor-pointer"
                src={facebookLogo}
                alt="facebook logo avatar"
              />
              <img src={youtubeLogo} alt="youtube logo avatar" />
            </div>
          </div>

          <div className="mb-5">
            <Separator className="mt-14 mb-4 w-[98%] bg-[#666]" />
            <Separator orientation="vertical" />
            <div className="flex gap-6 mb-5">
              <a
                href="#"
                className="text-[#666] text-[12px] transition-[2s] duration-200 hover:scale-[1.1] hover:underline"
              >
                Nosso termos
              </a>
              <a
                href="#"
                className="text-[#666] text-[12px] transition-[2s] duration-200 hover:scale-[1.1] hover:underline"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-[#666] text-[12px] transition duration-200 hover:scale-[1.1] hover:underline"
              >
                Ajuda
              </a>
            </div>
            <div className="flex gap-4">
              <p className="text-[10px] w-[281px]">
                <span>
                  © Copyright 2021 • Pigz • Todos os direitos reservados Orange
                  Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
                </span>
              </p>
              <img
                className="w-[69.69px] h-[20px] self-center"
                src={orangeLogo}
                alt="Orange logo"
              />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
