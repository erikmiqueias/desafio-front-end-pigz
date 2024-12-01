import {
  firstFormSchema,
  secondFormSchema,
  thirdFormSchema,
} from "./validations";
import z from "zod";

export const onFirstFormSubmit = (data: z.infer<typeof firstFormSchema>) => {
  localStorage.setItem("firstForm", JSON.stringify(data));
};

export const onSecondFormSubmit = (data: z.infer<typeof secondFormSchema>) => {
  localStorage.setItem("secondForm", JSON.stringify(data));
};

export const onThirdFormSubmit = (data: z.infer<typeof thirdFormSchema>) => {
  localStorage.setItem("thirdForm", JSON.stringify(data));
};
