import type { Route } from "./+types/ideas-page";
import { Hero } from "~/common/components/hero";
import { IdeaCard } from "~/features/community/components/idea-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "IdeasGPT | wemake" },
    { name: "description", content: "Find your next project idea" },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-20">
      <Hero title="IdeasGPT" subTitle="Find ideas for your next project" />
      <div className="grid grid-cols-4 gap-4 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="a startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewCount={123}
            postedAt="12 hours ago"
            likesCount={123}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
