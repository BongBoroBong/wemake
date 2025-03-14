import { z } from "zod";
import type { Route } from "./+types/search-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "~/features/products/components/product-card";
import { Form } from "react-router";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams),
  );
  if (!success) {
    throw new Error("Invalid params");
  }
  console.log(parsedData);
};

export default function SearchPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title="Search"
        subTitle="Search for products by title or description"
      />
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={`productId-${index}`}
            id="productId"
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            commentsCount={12}
            viewsCount={12}
            votesCount={12}
          />
        ))}
      </div>
    </div>
  );
}
