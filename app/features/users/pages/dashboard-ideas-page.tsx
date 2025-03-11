import { IdeaCard } from "~/features/community/components/idea-card";

export default function DashboardIdeasPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-2xl font-semibold mb-6">Ideas</h1>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            key={`ideaId-${index}`}
            id={`ideaId-${index}`}
            title="Idea Title"
            viewCount={100}
            postedAt="12 hours ago"
            likesCount={100}
          />
        ))}
      </div>
    </div>
  );
}
