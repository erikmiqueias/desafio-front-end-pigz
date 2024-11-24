import br from "../../assets/brazil-.png";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Input } from "../ui/input";
import { onFirstFormSubmit, useFirstFormHook } from "../../helpers/validation";
import { Select, SelectTrigger, SelectValue } from "../ui/select";

const FirstForm = () => {
  const form = useFirstFormHook();

  return (
    <div className="flex mt-8 ml-5 items-center flex-col">
      <div className="self-start mb-6">
        <h1 className="text-[28px] font-semibold mb-1">Quero vender no Pigz</h1>
        <h3 className="text-[13px]">
          Dê o primeiro passo para aumentar suas vendas
        </h3>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFirstFormSubmit)}
          className="space-y-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Nome</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      placeholder="Leonercio Goesfeeld"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">E-mail</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      placeholder="leonercio.goesfeeld@email.com"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Telefone</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="gap-1 w-28 bg-gray-300 rounded-2xl h-12 z-50 absolute">
                      <img className="w-6" src={br} alt="brazil flag" />
                      <SelectValue placeholder="+55" />
                    </SelectTrigger>
                    <Input
                      className="z-10 rounded-2xl h-12 text-sm pl-32 w-[334px] border-solid border-[1px] border-gray-300"
                      placeholder="(95) 99876-5432"
                      {...field}
                    />
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <div>
            <p className="text-sm text-center">
              Ao continuar, aceito que a Pigz entre em contato comigo por
              telefone, e-mail ou WhatsApp
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FirstForm;
