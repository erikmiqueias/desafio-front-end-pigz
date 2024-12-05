import "./App.css";
import {
  pigzLogo,
  hamburgerSection,
  pigzDouble,
  storeIcon,
  phoneIcon,
  pigzGestao,
  printerIcon,
  whatsapp,
} from "./assets/";
import {
  CardSection,
  Button,
  PaginationSection,
  FormRegister,
} from "./components/";
import Footer from "./components/Footer";

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

      <Footer />
    </>
  );
}

export default App;
