import type { Route } from "./+types/community-page";
import { Hero } from "~/common/components/hero";
import { Await, Form, Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,  
} from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "~/features/community/constants";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "~/features/community/components/post-card";
import { getTopics, getPosts } from "../queries";
import { Suspense } from "react";
export const meta: Route.MetaFunction = () => {
  return [{ title: "Community | wemake" }];
};

export async function loader() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const topics = await getTopics();
  // const posts = await getPosts();
  // const [topics, posts] = await Promise.all([getTopics(), getPosts()]);

  // const topics = getTopics();
  const posts =  getPosts();
  return { topics, posts };
}

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  const { topics, posts } = loaderData;

  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") || "newest";
  const period = searchParams.get("period") || "all";

  return (
    <div>
      <Hero
        title="Community"
        subTitle="Ask questions, share ideas, and connect with other developers"
      />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y-5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    <span className="text-sm capitalize">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        className="capitalize cursor-pointer"
                        key={option}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set("sorting", option);
                            setSearchParams(searchParams);
                          }
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          className="capitalize cursor-pointer"
                          key={option}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set("period", option);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search for discusstions"
                />
              </Form>
            </div>
            <Button asChild>
              <Link to={`/community/submit`}>Create Discussion</Link>
            </Button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={posts}>
              {(data) => (
                <div className="space-y-5">
                  {data.map((post) => (
                    <PostCard
                      key={post.post_id}
                      id={post.post_id}
                      title={post.title}
                      authorName={post.author}
                      authorAvatarUrl={post.author_avatar}
                      category={post.topic}
                      postedAt={post.created_at}
                      votesCount={post.upvotes_count}
                      expanded
                    />
                  ))}
                </div>
              )}
            </Await>
          </Suspense>
        </div>
        <aside className="col-span-2 space-y-5">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topics
          </span>
                <div className="flex flex-col gap-4 items-start">
                  {topics.map((topic) => (
                    <Button
                      key={topic.slug}
                      variant="link"
                      asChild
                      className="pl-0"
                    >
                      <Link
                        to={`/community?topic=${topic.slug}`}
                        className="font-semibold"
                      >
                        {topic.name}
                      </Link>
                    </Button>
                  ))}
                </div>
        </aside>
      </div>
    </div>
  );
}
