import { z } from "zod";

export const firstFormSchema = z.object({
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

export const secondFormSchema = z.object({
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

export const thirdFormSchema = z.object({
  storeName: z.string().min(1),
  cnpj: z.string().min(14),
  storeType: z.string().min(1),
});
