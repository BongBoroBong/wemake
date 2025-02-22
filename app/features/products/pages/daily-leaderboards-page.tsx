import { data, isRouteErrorResponse, Link } from "react-router";
import { DateTime } from "luxon";
import { z } from "zod";
import type { Route } from "./+types/daily-leaderboards-page";

import { Hero } from "~/common/components/hero";
import { ProductCard } from "~/features/products/components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    day: Number(params.day),
  }).setZone("Asia/Seoul").setLocale("ko");

  return [{
    title: `The best products of ${date.toLocaleString(DateTime.DATE_MED)} | wemake`,
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
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");
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

  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");

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

export default function DailyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {

  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });

  const previousDate = urlDate.minus({ days: 1 });
  const nextDate = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div>
      <Hero
        title={`The best products of ${urlDate.toLocaleString(DateTime.DATE_MED)}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/daily/${previousDate.toFormat("yyyy/MM/dd")}`}
          >
            &larr; {previousDate.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDate.toFormat("yyyy/MM/dd")}`}
            >
              {nextDate.toLocaleString(DateTime.DATE_SHORT)} &rarr;
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
