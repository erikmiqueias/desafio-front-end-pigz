import "./App.css";
import pigzLogo from "./assets/Pigz Gestão - Logo.svg";
import { Button } from "./components/ui/button";
import hamburgerSection from "./assets/hamburger-with-floating-ingredients-on-dark-background/hamburger-with-floating-ingredients-on-dark-background.png";
import FirstForm from "./components/form/FirstForm";

function App() {
  return (
    <>
      <header className="flex justify-between my-5 mx-2">
        <img src={pigzLogo} alt="Pigz logo" />
        <Button className="bg-orange-500 rounded-3xl h-8 w-40">
          Já sou parceiro
        </Button>
      </header>
      <section className="flex bg-orange-500 h-auto flex-col">
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

        <div className="w-[376px] h-[570px] bg-white rounded-3xl self-center text-[#333333]">
          <div className="flex flex-col items-center gap-1 mt-6">
            <h2 className="text-[28px] font-semibold">Quero vender no Pigz</h2>
            <h3 className="text-[13px]">
              Dê o primeiro passo para aumentar suas vendas
            </h3>
          </div>

          <FirstForm />
        </div>
      </section>
    </>
  );
}

export default App;
