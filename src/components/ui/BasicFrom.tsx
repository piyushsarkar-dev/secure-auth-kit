"use client";

import { MainloginFromSceamType, mainLoginFromSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const BasicFrom = () => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(mainLoginFromSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  const formHandlar = (fData: MainloginFromSceamType) => {
    console.log(fData);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit(formHandlar)}
        className=""
        noValidate></form>
    </section>
  );
};

export default BasicFrom;
