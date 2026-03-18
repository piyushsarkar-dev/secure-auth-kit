"use client";

import { registerAtom } from "@/lib/atom";
import { loginFormSchemaType, loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { Route } from "next";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const LoginForm = () => {
  const register = useAtomValue(registerAtom);
  const { push } = useRouter();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const loginHandeler = (login: loginFormSchemaType) => {
    console.log(login);

    if (
      register.email === login.email &&
      register.password === login.password
    ) {
      toast.success(`Login Done ✅`);
      push("/dashboard" as Route);
    } else {
      if (
        register.email !== login.email &&
        register.password !== login.password
      ) {
        toast.error(`Invalid Email Adress And Pasword`);
      } else {
        if (register.email !== login.email) {
          console.error(`Email Adress Not exist`);
        }
        if (register.password !== login.password) {
          toast.error(`Password Didnt Match`);
        }
      }
    }
  };

  return (
    <form
      className=""
      noValidate
      onSubmit={handleSubmit(loginHandeler)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email Adress</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Email Adress"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Password"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="mt-2 grid w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
