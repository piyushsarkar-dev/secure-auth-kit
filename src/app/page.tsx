import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import LoginFrom from "@/components/ui/LoginFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth Kit",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="grid place-items-center">Secure Auth</CardTitle>
        </CardHeader>
        <CardContent className="place-items-center">
          <LoginFrom />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
