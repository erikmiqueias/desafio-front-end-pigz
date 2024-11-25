import { useForm } from "react-hook-form";
import br from "../../assets/brazil-.png";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";

const firstFormSchema = z.object({
  name: z
    .string({
      message: "Nome obrigatório",
    })
    .min(1, {
      message: "Nome obrigatório",
    }),
  email: z.string().email().min(1, {
    message: "E-mail obrigatório",
  }),
  phoneNumber: z.string().min(1, {
    message: "Telefone obrigatório",
  }),
});

const FirstForm = () => {
  const onSubmit = (data: z.infer<typeof firstFormSchema>) => {
    const { email, name, phoneNumber } = data;
    localStorage.setItem(name, JSON.stringify(data));
    localStorage.setItem(email, JSON.stringify(data));
    localStorage.setItem(phoneNumber, JSON.stringify(data));
  };

  const form = useForm<z.infer<typeof firstFormSchema>>({
    resolver: zodResolver(firstFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });

  return (
    <div className="flex mt-8 ml-5 flex-col transition-transform">
      <div className="self-start mb-6">
        <h1 className="text-[28px] font-semibold mb-1">Quero vender no Pigz</h1>
        <h3 className="text-[13px]">
          Dê o primeiro passo para aumentar suas vendas
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
        <Button
          type="button"
          onClick={() => form.handleSubmit(onSubmit)()}
          className="mt-[57px] h-[48px] w-[334px] rounded-2xl bg-orange-600 text-white"
        >
          Continuar
        </Button>
      </Form>
    </div>
  );
};

export default FirstForm;
