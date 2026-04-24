import Register from "@/components/customui/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Auth Form App",
  description: "Login page of Auth Form App",
};

const page = () => {
  return (
    <section>
      <Register />
    </section>
  );
};

export default page;
