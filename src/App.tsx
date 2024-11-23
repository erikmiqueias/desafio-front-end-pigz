import "./App.css";
import pigzLogo from "./assets/Pigz Gestão - Logo.svg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <header className="flex justify-between my-3 mx-2">
        <img src={pigzLogo} alt="Pigz logo" />
        <Button className="bg-orange-500 rounded-3xl h-8 w-40">
          Já sou parceiro
        </Button>
      </header>
    </>
  );
}

export default App;
