import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface ReviewCardProps {
  authorName: string;
  authorUsername: string;
  authorAvatarUrl?: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  authorName,
  authorUsername,
  authorAvatarUrl,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{authorName[0].toUpperCase()}</AvatarFallback>
          {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{authorName}</h4>
          <p className="text-sm text-muted-foreground">@{authorUsername}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon key={index} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{postedAt}</span>
    </div>
  );
} 