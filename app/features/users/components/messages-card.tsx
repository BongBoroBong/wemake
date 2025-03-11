import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "~/common/components/ui/sidebar";
import { Link, useLocation } from "react-router";

interface MessagesCardProps {
  id?: string;
  avatarUrl?: string;
  name: string;
  lastMessage: string;
}

export function MessagesCard({
  id,
  avatarUrl,
  name,
  lastMessage,
}: MessagesCardProps) {
  const location = useLocation();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="h-18"
        asChild
        isActive={location.pathname === `/my/messages/${id}`}
      >
        <Link to={`/my/messages/${id}`}>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-muted-foreground">
                {lastMessage}
              </span>
            </div>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
