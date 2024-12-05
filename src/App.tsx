import "./App.css";
import {
  pigzLogo,
  hamburgerSection,
  pigzDouble,
  storeIcon,
  phoneIcon,
  pigzGestao,
  printerIcon,
} from "./assets/";
import { CardSection, PaginationSection, FormRegister } from "./components/";
import Footer from "./components/Footer";
import PromoSection from "./components/PromoSection";

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
          <div className="flex justify-between ml-3 w-full max-h-[200px]">
            <h1 className="text-white text-4xl font-bold w-72">
              Pigz: tudo que você precisa pra vender ainda mais!
            </h1>
            <figure className="absolute top-[20px] -right-20">
              <img
                className="w-[250px] h-[300px]"
                src={hamburgerSection}
                alt="hamburguer"
              />
            </figure>
          </div>
          <p className="text-white mt-6 mx-4">
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja prontinha para iniciar as vendas.
          </p>
        </div>

        <div
          id="form"
          className="mt-7 w-[376px] min-h-[570px] bg-white rounded-3xl self-center text-[#333]"
        >
          <div>
            <FormRegister />
          </div>
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

      <PromoSection />
      <Footer />
    </>
  );
}

export default App;
