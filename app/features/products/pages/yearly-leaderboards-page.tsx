import  { data, Link } from "react-router";
import { z } from "zod";
import { DateTime } from "luxon";
import type { Route } from "./+types/yearly-leaderboards-page";

import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import  ProductPagination from "~/common/components/product-pagination";
import { ProductCard } from "~/features/products/components/product-card";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
  }).setZone("Asia/Seoul").setLocale("ko");
  
  return [{
    title: `Best of year ${date.toLocaleString({year:"numeric"})} | wemake`,
  }];
};
export function loader({ params }: Route.LoaderArgs) {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "invalid_params",
        message: "Invalid params",
      },
      {
        status: 400,
      },
    );
  }
  const date = DateTime.fromObject({
    year: parsedData.year,
  }).setZone("Asia/Seoul");

  if (!date.isValid) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      {
        status: 400,
      },
    );
  }

  const today = DateTime.now().setZone("Asia/Seoul").startOf("year");
  if (date > today) {
    throw data(
      {
        error_code: "future_date",
        message: "Future date",
      },
      {
        status: 400,
      },
    );
  }

  return {
    ...parsedData,
  };
}

export default function YearlyLeaderboardsPage({ loaderData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  });

  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("year"));

  return (
    <div>
      <Hero
        title={`Best of year ${urlDate.toLocaleString({year:"numeric"})}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/yearly/${previousYear.year}`}
          >
            &larr; {previousYear.toLocaleString({year:"numeric"})}
          </Link>
        </Button>
        {!isToday && (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/yearly/${nextYear.year}`}
            >
              {nextYear.toLocaleString({year:"numeric"})} &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            commentsCount={12}
            viewsCount={12}
            votesCount={12}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
} 