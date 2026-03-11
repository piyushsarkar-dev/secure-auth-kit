import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth kit",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
