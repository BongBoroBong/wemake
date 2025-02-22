import type { Route } from "./+types/category-page";
import { Hero } from "~/common/components/hero";

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
  return [
    { title: `${params.category} | ProductHunt Clone` },
    {
      name: "description",
      content: `Browse products in the ${params.category} category`,
    },
  ];
};

export default function CategoryPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools"
        subTitle="Tools for developers to build products faster"
      />
    </div>
  );
}
