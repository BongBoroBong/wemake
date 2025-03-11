import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle } from "~/common/components/ui/card";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface NotificationCardProps {
  userImage?: string;
  userName: string;
  action: string;
  timestamp: string;
  onMarkAsRead?: () => void;
  seen?:boolean;
}

export function NotificationCard({
  userImage,
  userName,
  action,
  timestamp,
  onMarkAsRead,
  seen = false, 
}: NotificationCardProps) {
  return (
    <Card className={cn("min-w-[450px]", seen ? "":"bg-yellow-500/60")}>
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={userImage} />
          <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">
            <span>{userName}</span>
            <span> {action}</span>
          </CardTitle>
          <small className="text-muted-foreground text-sm">{timestamp}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex flex-row justify-end">
        <Button variant="outline" onClick={onMarkAsRead}>
          <EyeIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
} 