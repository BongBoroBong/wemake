import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/community/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={`product-${index}`}
            id="productId"
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            commentsCount={12}
            viewsCount={12}
            votesCount={12}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-foreground">
            The latest discussions from our community.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">
              Explore all discussions &rarr;
            </Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={`post-${index}`}
            id="postId"
            title="Discussion Title"
            authorName="Nico"
            authorAvatarUrl="https://github.com/apple.png"
            category="Productivity"
            postedAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next product.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">Explore all ideas &rarr;</Link>
          </Button>
        </div>
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
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground">
            Find your dream job.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <JobCard
            key={`job-${index}`}
            id="jobId"
            companyName="Tesla"
            companyLogoUrl="https://github.com/facebook.png"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="full-time"
            location="remote"
            salary="$100,000 - 120,000"
            companyHq="San Francisco, CA"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-xl font-light text-foreground">
            Join a team looking for a new member.
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
