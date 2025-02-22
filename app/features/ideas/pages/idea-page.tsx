import type { Route } from "./+types/idea-page";
import { Hero } from "~/common/components/hero";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Idea Details | wemake" },
    { name: "description", content: "View idea details and claim it" },
  ];
};

export default function IdeaPage() {
  return (
    <div className=" space-y-20">
      <Hero title="Idea #1212" subTitle="" />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic items-center">"A startup that creates"</p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span>123</span>
          </div>
          <DotIcon className="size-4" />
          <span>12 hours ago</span>
          <DotIcon className="size-4" />
          <Button variant="outline">
            <HeartIcon className="size-4" />
            <span>123</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
