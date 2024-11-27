import "./App.css";
import pigzLogo from "./assets/Pigz Gestão - Logo.svg";
import { Button } from "./components/ui/button";
import hamburgerSection from "./assets/hamburger-with-floating-ingredients-on-dark-background/hamburger-with-floating-ingredients-on-dark-background.png";
import FirstForm from "./components/form/FirstForm";
import pigzDouble from "./assets/Grupo 3535.svg";
import CardSection from "./components/CardSection";
import storeIcon from "./assets/storefront_black_24dp.svg";
import phoneIcon from "./assets/smartphone_black_24dp.svg";
import pigzGestao from "./assets/Grupo 3545.svg";
import printerIcon from "./assets/print_black_24dp.svg";
import PaginationSection from "./components/PaginationSection";
import whatsapp from "./assets/Icon awesome-whatsapp.svg";
import pigzBlackAndWhite from "./assets/pigz-logotipo-colorido.svg";
import appStore from "./assets/selo-app-store.svg";
import playStore from "./assets/selo-google-play.svg";
import headPhone from "./assets/icone-fale-conosco.svg";
import linkedinLogo from "./assets/linkedin-with-circle.svg";
import instagramLogo from "./assets/instagram-with-circle.svg";
import facebookLogo from "./assets/facebook-with-circle.svg";
import youtubeLogo from "./assets/youtube-with-circle.svg";
import orangeLogo from "./assets/logo-orange-horizontal-branco.svg";

function App() {
  return (
    <>
      <header className="flex justify-between my-5 mx-2">
        <img src={pigzLogo} alt="Pigz logo" />

        <div className="flex items-center justify-center text-white bg-orange-500 rounded-3xl h-8 w-40 z-50">
          <a href="#form">Já sou parceiro</a>
        </div>
      </header>
      <section className="flex max-w-auto h-[1015px] bg-orange-500 flex-col">
        <div className="py-8">
          <div className="flex justify-between mx-3">
            <h1 className="text-white text-4xl font-bold w-72">
              Pigz: tudo que você precisa pra vender ainda mais!
            </h1>
            <img
              className="absolute -right-14 top-8 w-48"
              src={hamburgerSection}
              alt="hamburguer"
            />
          </div>
          <p className="text-white mt-6 mx-4">
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja prontinha para iniciar as vendas.
          </p>
        </div>

        <div
          id="form"
          className="mt-7 flex items-center flex-col w-[376px] h-[570px] bg-white rounded-3xl self-center text-[#333333]"
        >
          {<FirstForm />}
        </div>
      </section>

      <div className="relative flex justify-center">
        <img className="absolute -top-16" src={pigzDouble} alt="" />
      </div>

      <section className="flex flex-col items-center mt-28 text-[#333]">
        <h3 className="font-bold text-2xl w-[286px] text-center">
          Você tem um novo Pigzdido!
        </h3>
        <div className="mt-10 gap-5">
          <CardSection
            cardTitle="Marketplace"
            cardSubtitle="Pra sua loja vender mais"
            src={storeIcon}
          />

          <CardSection
            cardTitle="É fácil e rápido"
            cardSubtitle="Fazer um pedido no Pigz"
            src={phoneIcon}
          />

          <CardSection
            cardTitle="Pigz Gestão"
            cardSubtitle="Você no controle, sempre"
            src={pigzGestao}
          />

          <CardSection
            cardTitle="Vias de impressão"
            cardSubtitle="Pesonalizáveis"
            src={printerIcon}
          />
        </div>

        <div className="flex flex-col items-center mt-10 gap-7">
          <h3 className="font-bold text-2xl text-center w-[334px]">
            Tudo que você precisa por apenas R$199/mês
          </h3>
          <p className="w-[286px] text-[16px] text-center">
            Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
            por cada venda, sem letrinhas miúdas
          </p>
        </div>

        <PaginationSection />

        <div className="flex flex-col items-center mt-24 gap-7">
          <h3 className="font-bold text-2xl text-center w-[334px]">
            E mais: suporte que realmente funciona!
          </h3>
          <p className="w-[286px] text-[16px] text-center">
            Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
            disponível pra ajudar você e seus clientes.
          </p>
        </div>
      </section>

      <section className="text-[#333] mt-14">
        <div className="flex flex-col gap-5 items-center">
          <div className="w-[382px] h-[472px] rounded-[64px] bg-[#fafafa]">
            <div className="pt-9 pl-10">
              <div className="flex flex-col mb-8 ">
                <h3 className="font-bold text-[24px]">Pigz</h3>
                <h4 className="text-[16px] font-medium">
                  Tudo que você precisa
                </h4>
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
                <h4 className="text-[16px] font-medium">
                  Segurança e agilidade
                </h4>
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
              <span></span>
              <div className="flex gap-6">
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
                    © Copyright 2021 • Pigz • Todos os direitos reservados
                    Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
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
    </>
  );
}

export default App;
