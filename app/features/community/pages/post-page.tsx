import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Community | wemake" }];
};

export default function PostPage() {
  return <div></div>;
}
