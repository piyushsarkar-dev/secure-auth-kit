import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import BasicFrom from "@/components/ui/BasicFrom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle>A Basic Login Form</CardTitle>
        </CardHeader>
        <CardContent>
          <BasicFrom />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
