import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";

export function meta(meta: Route.MetaFunction) {
  return [{ title: "Posts | Profile | wemake" }];
}

export default function ProfilePostsPage() {
  return <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <PostCard
          key={`postId-${index}`}
          id={`postId-${index}`}
          title={`Post ${index + 1}`}
          authorName={`Author ${index + 1}`}
          category={`Category ${index + 1}`}
          postedAt={`Posted at ${index + 1}`}
          expanded
        />
      ))}
    </div>
}
