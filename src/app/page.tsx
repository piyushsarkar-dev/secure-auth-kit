import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import Login from "@/components/ui/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth Kit",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Secure Auth
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Login />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
