import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Input } from "../ui/input";
import { onThirdFormSubmit, useThirdFormHook } from "../../helpers/validation";
import { Select, SelectTrigger, SelectValue } from "../ui/select";

const ThirdForm = () => {
  const form = useThirdFormHook();

  return (
    <div className="flex mt-8 ml-3 items-center flex-col mb-12">
      <h1 className="text-[28px] font-semibold self-start ml-3 mb-6">
        Me conta um pouco sobre a sua loja
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onThirdFormSubmit)}
          className="space-y-5"
        >
          <FormField
            control={form.control}
            name="storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Nome da sua loja</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      placeholder="Restaurante Todo Mundo Gosta"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel className="text-[12px]">CNPJ</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="12.345.678/0001-99"
                      className="pt-4 rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      {...field}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeType"
            render={({ ...field }) => (
              <FormItem>
                <div className="flex gap-2 flex-col">
                  <Select>
                    <FormLabel className="text-[12px]">Tipo de loja</FormLabel>
                    <SelectTrigger className="rounded-2xl w-[334px] h-[48px]">
                      <SelectValue placeholder="Selecione" {...field} />
                    </SelectTrigger>
                  </Select>
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ThirdForm;
