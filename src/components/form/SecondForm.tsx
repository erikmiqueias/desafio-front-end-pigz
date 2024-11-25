import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const secondFormSchema = z.object({
  cep: z.string().min(7, {
    message: "CEP inválido",
  }),
  state: z.string().min(2, {
    message: "Estado obrigatório",
  }),
  city: z.string().min(2, {
    message: "Cidade obrigatória",
  }),
  address: z.string().min(2, {
    message: "Endereço obrigatório",
  }),
  number: z.string().min(1, {
    message: "Número obrigatório",
  }),
  complement: z.string().min(1, {
    message: "Complemento obrigatório",
  }),
});

const SecondForm = () => {
  const onSubmit = (data: z.infer<typeof secondFormSchema>) => {
    const { address, cep, city, complement, number, state } = data;

    localStorage.setItem(cep, JSON.stringify(data));
    localStorage.setItem(state, JSON.stringify(data));
    localStorage.setItem(city, JSON.stringify(data));
    localStorage.setItem(address, JSON.stringify(data));
    localStorage.setItem(number, JSON.stringify(data));
    localStorage.setItem(complement, JSON.stringify(data));
  };
  const form = useForm<z.infer<typeof secondFormSchema>>({
    resolver: zodResolver(secondFormSchema),
    defaultValues: {
      cep: "",
      state: "",
      number: "",
      city: "",
      address: "",
      complement: "",
    },
  });

  return (
    <div className="flex mt-8 flex-col transition-transform">
      <h1 className="text-[28px] font-semibold self-start mb-6">
        Onde fica sua loja?
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                  <FormLabel className="text-[12px]">Estado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <div>
                        <SelectTrigger className="w-[114px] h-[48px] rounded-2xl">
                          <SelectValue placeholder="UF" />
                          <SelectContent>
                            <SelectItem value="SP">SP</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </div>
                    </FormControl>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Cidade</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[205px] h-[48px] rounded-2xl">
                        <SelectValue placeholder="Selecione" />
                        <SelectContent>
                          <SelectItem value="São paulo">São paulo</SelectItem>
                        </SelectContent>
                      </SelectTrigger>
                    </FormControl>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[12px]">Endereço</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Avenida Brasil"
                    className="rounded-2xl h-12 text-sm w-[334px] border-solid border-[1px] border-gray-300"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Número</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="123"
                      className="w-[114px] h-[48px] border-solid border-[1px] border-gray-300 rounded-2xl"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[12px]">Complemento</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[205px] h-[48px] rounded-2xl border-solid border-[1px] border-gray-300"
                      placeholder="Sala 1"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </form>
        <Button
          onClick={() => form.handleSubmit(onSubmit)()}
          type="button"
          className="mt-[45px] h-[48px] w-[334px] rounded-2xl bg-orange-600 text-white"
        >
          Próximo
        </Button>
      </Form>
    </div>
  );
};

export default SecondForm;
