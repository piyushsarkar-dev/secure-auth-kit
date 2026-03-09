"use client";

import { mainLoginFromSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const BasicFrom = () => {
  const {} = useForm({
    resolver: zodResolver(mainLoginFromSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  return <section></section>;
};

export default BasicFrom;
