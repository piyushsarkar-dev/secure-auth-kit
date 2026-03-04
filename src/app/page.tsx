import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Auth Kit",
  description:
    "Modern frontend authentication UI with login and register forms built using Next.js.",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card>
        <CardHeader>
          <CardTitle>Secure Auth Kit</CardTitle>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          eos natus tempore neque ad tenetur.
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
