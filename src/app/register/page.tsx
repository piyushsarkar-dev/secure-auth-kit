import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register || Page",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      {" "}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>Register Page</CardContent>
      </Card>
    </section>
  );
};

export default page;
