import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import { Form, Link } from "react-router";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";

interface ReplyProps {
  username: string;
  userImage?: string;
  content: string;
  timestamp: string;
  topLevel?: boolean;
}

export function Reply({
  username,
  userImage,
  content,
  timestamp,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReplying = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          {userImage && <AvatarImage src={userImage} />}
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={`/users/@${username.toLowerCase()}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-sm text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src="https://github.com/microsoft.png" />
          </Avatar>
          <div className="flex flex-col gap-5 items-end w-full">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button>Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="Nicolas"
            content="I've been using Todoist"
            timestamp="12 hours ago"
            userImage="https://github.com/serranoarevalo.png"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
