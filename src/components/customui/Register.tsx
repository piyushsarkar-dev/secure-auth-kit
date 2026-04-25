"use client";

import { registerSchema, RegisterSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const Register = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const registerHandeler = (data: RegisterSchemaType) => {
    console.log(data);
    reset();
  };

  return (
    <section>
      <form
        className="grid grid-cols-1 gap-3"
        onSubmit={handleSubmit(registerHandeler)}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Enter Your Full Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Full Name"
                autoComplete="name"
              />
            </Field>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Enter Your Email Adress
              </FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Email Adress"
                autoComplete="email"
              />
            </Field>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Create A Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Password"
                autoComplete="new-password"
              />
            </Field>
          )}
        />
        <Button
          className={"w-full"}
          type="submit">
          Click Me
        </Button>
      </form>
    </section>
  );
};

export default Register;
