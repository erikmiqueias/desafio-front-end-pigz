import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import br from "../../assets/brazil-.png";
import { Button } from "../ui/button";
import { useState } from "react";

const FormRegister = () => {
  const [changeStep, setChangeStep] = useState(0);

  const onNext = () => {
    if (changeStep === 0) {
      setChangeStep(1);
    } else if (changeStep === 1) {
      setChangeStep(2);
    } else {
      setChangeStep(0);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center pt-7">
        {changeStep === 0 && (
          <>
            <div className="text-[#333]">
              <h3 className="font-semibold text-[28px]">
                Quero vender no Pigz
              </h3>
              <p className="text-[13px]">
                Dê o primeiro passo para aumentar suas vendas
              </p>
            </div>

            <form className="flex flex-col gap-3 mt-10">
              <label className="text-[12px] font-medium">Nome</label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="text"
                placeholder="Leonercio Goesfeeld"
              />

              <label className="text-[12px] font-medium">E-mail</label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="email"
                placeholder="leonercio.goesfeeld@email.com"
              />

              <div>
                <label className="text-[12px] font-medium">Telefone</label>
                <div className="flex">
                  <Select>
                    <div className="relative">
                      <SelectTrigger className="w-[100px] h-[46px] rounded-[16px] absolute left-[1px] top-[5px] z-10 border-none bg-[#f0f0f0]">
                        <img className="w-6" src={br} alt="" />
                        <SelectValue placeholder="+55" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="text-[#999]">
                          <SelectLabel>Countries</SelectLabel>
                          <SelectItem value="brazil">55</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </div>
                  </Select>
                </div>
                <input
                  className="mt-1 w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-28 text-[14px] z-50"
                  type="tel"
                  placeholder="(95) 99876-5432"
                />
              </div>

              <span className="w-[334px] text-[13px] text-start">
                Ao continuar, aceito que a Pigz entre em contato comigo por
                telefone, e-mail ou WhatsApp.
              </span>
            </form>
          </>
        )}

        {changeStep === 1 && (
          <>
            <h3 className="font-semibold text-[28px] self-start ml-6">
              Onde fica sua loja?
            </h3>

            <form className="flex flex-col gap-3 mt-7">
              <label className="text-[12px] font-medium">CEP</label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="text"
                placeholder="Leonercio Goesfeeld"
              />

              <div className="flex gap-4">
                <div>
                  <label className="text-[12px] font-medium">Estado</label>
                  <Select>
                    <SelectTrigger className="w-[114px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999]" />
                  </Select>
                </div>
                <div>
                  <label className="text-[12px] font-medium">Cidade</label>
                  <Select>
                    <SelectTrigger className="w-[205px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999]" />
                  </Select>
                </div>
              </div>

              <label className="text-[12px] font-medium mt-3">Endereço</label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="text"
                placeholder="Avenida Brasil"
              />

              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium mt-3">Número</label>
                  <input
                    className="w-[114px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                    type="number"
                    placeholder="123"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-medium mt-3">
                    Complemento
                  </label>
                  <input
                    className="w-[205px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                    type="text"
                    placeholder="Sala 1"
                  />
                </div>
              </div>
            </form>
          </>
        )}

        {changeStep === 2 && (
          <>
            <h3 className="font-semibold text-[28px] w-[320px] justify-self-start">
              Me conte um pouco sobre sua loja
            </h3>

            <form className="flex flex-col gap-2 mt-[38px]">
              <label className="text-[12px] font-medium">Nome da loja</label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="text"
                placeholder="Leonercio Goesfeeld"
              />

              <label className="text-[12px] font-medium mt-3">
                CNPJ da loja
              </label>
              <input
                className="w-[334px] h-[48px] rounded-[16px] border-solid border-[1px] border-[#999] pl-4 text-[14px]"
                type="text"
                placeholder="12.345.678/0001-99"
              />

              <label className="text-[12px] font-medium mt-6">
                Tipo de loja
              </label>
              <Select>
                <SelectTrigger className="w-[334px] h-12 rounded-[16px] border-solid border-[1px] border-[#999]">
                  <SelectValue
                    className="text-[#999]"
                    placeholder="Selecione"
                  />
                </SelectTrigger>
              </Select>
            </form>
          </>
        )}

        <Button
          type="button"
          onClick={() => onNext()}
          className={`w-[334px] rounded-[16px] bg-orange-600 text-white h-12 ${
            changeStep === 0
              ? "mt-[67px]"
              : changeStep === 1
              ? "mt-12"
              : "mt-20"
          }`}
        >
          {changeStep === 2 && "Concluir"}
          {changeStep === 1 && "Próximo"}
          {changeStep === 0 && "Continuar"}
        </Button>
      </div>
    </>
  );
};

export default FormRegister;
