import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import LoginForm from "@/components/ui/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth || Home Page",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
