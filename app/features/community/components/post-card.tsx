import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  category: string;
  postedAt: string;
}

export function PostCard({
  title,
  authorName,
  authorAvatarUrl,
  category,
  postedAt,
}: PostCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader className="flex flex-row items-center gap-2">
        <Avatar className="size-14">
          <AvatarFallback>{authorName[0].toUpperCase()}</AvatarFallback>
          {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
        </Avatar>
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <div className="flex gap-2 text-xs leading-none text-muted-foreground">
            <span>{authorName} on</span>
            <span>{category}</span>
            <span>•</span>
            <span>{postedAt}</span>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant="link" asChild>
          Reply &rarr;
        </Button>
      </CardFooter>
    </Card>
  );
}
