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

function App() {
  return (
    <>
      <header className="flex justify-between my-5 mx-2">
        <img src={pigzLogo} alt="Pigz logo" />
        <Button className="bg-orange-500 rounded-3xl h-8 w-40">
          Já sou parceiro
        </Button>
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

        <div className="mt-7 flex items-center flex-col w-[376px] h-[570px] bg-white rounded-3xl self-center text-[#333333]">
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
      </section>
    </>
  );
}

export default App;
