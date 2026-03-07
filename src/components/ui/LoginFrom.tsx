"use client";

import { mainLoginFormSchema, MainLoginFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginFrom = () => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(mainLoginFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const formHandlar = (fDate: MainLoginFormType) => {
    console.log(fDate);
  };
  return (
    <section>
      <form
        className="grid place-items-center"
        onSubmit={handleSubmit(formHandlar)}
        noValidate>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                {...field}
                type="text"
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Full Name"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Enter Your Email</FieldLabel>
              <Input
                {...field}
                type="text"
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email Adress"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit">
          <SendIcon /> Click me
        </Button>
      </form>
    </section>
  );
};

export default LoginFrom;
