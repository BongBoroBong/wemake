import type { Route } from "./+types/notifications-page";
import { NotificationCard } from "../components/notification-card";
export const metadata: Route.MetaFunction = () => {
  return [{
    title: "Notifications | wemake",
    
  }];
};

export default function NotificationsPage() {
  return <div className="space-y-20">
    <h1 className="text-4xl font-bold">Notifications</h1>
    <div className="flex flex-col items-start gap-5">
      <NotificationCard userName="John Doe" action="followed you" timestamp="2 days ago" />
    </div>
  </div>;
}
