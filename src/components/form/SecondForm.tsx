import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import {
  onSecondFormSubmit,
  useSecondFormHook,
} from "../../helpers/validation";

const SecondForm = () => {
  const form = useSecondFormHook();

  return (
    <div className="flex mt-8 ml-3 items-center flex-col">
      <h1 className="text-[28px] font-semibold self-start mb-6">
        Onde fica sua loja?
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSecondFormSubmit)}
          className="space-y-5"
        >
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">CEP</FormLabel>
                <FormControl>
                  <div>
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      placeholder="00000-00"
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <Select>
                    <div>
                      <FormLabel className="text-[12px]">Estado</FormLabel>
                      <SelectTrigger className="w-[114px] h-[48px] rounded-2xl">
                        <SelectValue placeholder="UF" {...field} />
                      </SelectTrigger>
                    </div>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ ...field }) => (
                <FormItem>
                  <div>
                    <Select>
                      <FormLabel className="text-[12px]">Cidade</FormLabel>
                      <SelectTrigger className="w-[205px] h-[48px] rounded-2xl">
                        <SelectValue placeholder="Selecione" {...field} />
                      </SelectTrigger>
                    </Select>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormLabel className="text-[12px]">Endereço</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Avenida Brasil"
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                      {...field}
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="number"
              render={({ ...field }) => (
                <FormItem>
                  <div>
                    <FormLabel className="text-[12px]">Número</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123"
                        className="w-[114px] h-[48px] border-solid border-[1px] border-gray-300 rounded-2xl"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <div>
                    <FormLabel className="text-[12px]">Complemento</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[205px] h-[48px] rounded-2xl border-solid border-[1px] border-gray-300"
                        placeholder="Sala 1"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SecondForm;
