"use client";

import { RegsiterFromSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {} = useForm({
    resolver: zodResolver(RegsiterFromSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    mode: "all",
  });
  return <section></section>;
};

export default RegisterForm;
