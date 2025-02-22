import { redirect } from "react-router";
import type { Route } from "./+types/leaderboards-redirection-page";

export function loader({ params }: Route.LoaderArgs) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  switch (params.period) {
    case "daily":
      return redirect(`/products/leaderboards/daily/${year}/${month}/${day}`);
    case "weekly":
      return redirect(`/products/leaderboards/weekly/${year}/${now.getWeek()}`);
    case "monthly":
      return redirect(`/products/leaderboards/monthly/${year}/${month}`);
    case "yearly":
      return redirect(`/products/leaderboards/yearly/${year}`);
    default:
      return redirect("/products/leaderboards");
  }
}
