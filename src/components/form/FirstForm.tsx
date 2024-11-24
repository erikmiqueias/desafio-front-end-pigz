import br from "../../assets/brazil-.png";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { formSchema } from "../../helpers/validation";
import { useFormHook } from "../../helpers/validation";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
// import { useState } from "react";
// import { IFirstForm, ISecondForm, IThirdForm } from "../../helpers/protocols";

function onSubmit(data: z.infer<typeof formSchema>) {
  console.log(data);
}

const FirstForm = () => {
  const form = useFormHook();
  // const [firstForm, setFirstForm] = useState<IFirstForm>({} as IFirstForm);
  // const [secondForm, setSecondForm] = useState<ISecondForm>({} as ISecondForm);
  // const [thirdForm, setThirdForm] = useState<IThirdForm>({} as IThirdForm);

  return (
    <div className="flex mt-8 ml-5 items-center flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <div className="pb-4">
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-2 border-gray-300"
                      placeholder="Leonercio Goesfeeld"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <div className="pb-4">
                    <Input
                      className="rounded-2xl h-12 text-sm w-[334px] border-solid border-2 border-gray-300"
                      placeholder="leonercio.goesfeeld@email.com"
                      {...field}
                    />
                  </div>
                </FormControl>

                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="gap-1 w-28 bg-gray-300 rounded-2xl h-12 z-50 absolute">
                      <img className="w-6" src={br} alt="brazil flag" />
                      <SelectValue placeholder="+55" />
                    </SelectTrigger>
                    <Input
                      className="z-10 rounded-2xl h-12 text-sm pl-32 w-[334px] border-solid border-2 border-gray-300"
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
          className="mt-10 mr-4 h-[48px] w-[334px] rounded-2xl bg-orange-600 text-white"
          type="button"
        >
          Continuar
        </Button>
      </Form>
    </div>
  );
};

export default FirstForm;
