import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import RegisterForm from "@/components/ui/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth || Register Page",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register Now</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
