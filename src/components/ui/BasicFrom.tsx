"use client";

import { mainLoginFromSchema, MainloginFromSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const BasicFrom = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(mainLoginFromSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const fromHandeler = async (fData: MainloginFromSchemaType) => {
    await new Promise<void>((r) => setTimeout(r, 1000));
    console.log(fData);
    reset();
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(fromHandeler)}
        className=""
        noValidate>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="PLease Enter Your Name"
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
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="PLease Enter Your Email"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          disabled={isSubmitting}
          type="submit">
          Click Me
        </Button>
      </form>
    </section>
  );
};

export default BasicFrom;
