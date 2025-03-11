import { Outlet } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
  SidebarMenu,
  SidebarProvider,
} from "~/common/components/ui/sidebar";
import { MessagesCard } from "~/features/users/components/messages-card";

export default function MessagesLayout() {
  return (
    <SidebarProvider className="flex max-h-[calc(100vh-14rem)] overflow-hidden h-[calc(100vh-14rem)] min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                {Array.from({ length: 50 }).map((_, index) => (
                  <MessagesCard
                    key={index}
                    id={index.toString()}
                    avatarUrl="https://github.com/shadcn.png"
                    name="John Doe"
                    lastMessage="Hello, how are you?"
                  />
                ))}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
