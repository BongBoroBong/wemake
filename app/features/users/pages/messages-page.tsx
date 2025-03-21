import { MessageCircle } from "lucide-react";
import type { Route } from "./+types/messages-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Messages | wemake" }];
};

export default function MessagesPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-4">
      <MessageCircle className="size-12 text-muted-foreground" />

      <h1 className="text-xl font-semibold text-muted-foreground">
        Click on a message in the sidebar to view it.
      </h1>
    </div>
  );
}
