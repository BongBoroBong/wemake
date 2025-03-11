import type { Route } from "./+types/teams-page";

import { Hero } from "~/common/components/hero";
import { TeamCard } from "~/features/teams/components/team-card";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Teams | wemake" }];
}

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" subTitle="find a team looking for a new member." />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={`team-${index}`}
            id="teamId"
            leaderName="nico"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
