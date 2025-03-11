import { Hero } from "~/common/components/hero";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/team-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Team Details | wemake" }];
}

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Join lynn's team" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            { title: "Product name", value: "Doggie Social" },
            {
              title: "Stage",
              value: "MVP",
            },
            {
              title: "Team size",
              value: 3,
            },
            {
              title: "Available equity",
              value: 10,
            },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <p>{item.value}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <ul className="text-lg list-disc list-inside">
                  {[
                    'React Developer',  
                    'Full Stack Developer',
                    'React Native Developer',
                    'Node.js Developer',
                    'Python Developer',
                    'Ruby Developer',
                    'Go Developer',
                  ].map(item => <li >{item}</li>)}
                  </ul>
                </CardContent>
              </CardHeader>
            </Card>
            <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
                </CardTitle>
                <CardContent className="p-0 font-medium text-xl">
                  <p>
                    Doggie Social is a social media platform for dogs. It allows
                    dogs to connect with each other and share their thoughts and
                    ideas.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
        </div>
        <aside className="col-span-2 p-6 rounded-lg shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/microsoft.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium">Nicolas</h4>
              <Badge variant="secondary">tester</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              label="Introduce yourself"
              description="This will be used to introduce yourself to the team"
              name="introduce"
              id="introduce"
              type="text"
              textArea
              required
            />
            <InputPair
              label="Why do you want to join lynn's team?"
              description="Tell us why you want to join lynn's team"
              name="why"
              id="why"
              type="text"
              textArea
              required
            />
            <Button variant="outline" className="w-full">
              Get in touch
            </Button>
          </Form>
        </aside>
      </div>
    </div>
  );
}
