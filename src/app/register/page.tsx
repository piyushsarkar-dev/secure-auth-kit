import Register from "@/components/customui/Register";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Auth Form App",
  description: "Login page of Auth Form App",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center">Create An Acount</CardTitle>
        </CardHeader>
        <CardContent>
          <Register />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
