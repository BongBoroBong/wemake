import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Textarea } from "~/common/components/ui/textarea";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { SendIcon } from "lucide-react";
import { MessagesBubble } from "../components/messages-bubble";

export default function MessagePage() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <CardTitle>John Doe</CardTitle>
            <CardDescription>2 days ago</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="py-10 overflow-scroll flex flex-col justify-start h-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <MessagesBubble
            avatarUrl="https://github.com/shadcn.png"
            avatarFallback="CN"
            content="this is a message from steve jobs in iheaven, make sure to reply to this message"
            isCurrentUser={index % 2 === 0}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <Form className="relative flex justify-end items-center">
            <Textarea placeholder="Message" rows={2} className="resize-none" />
            <Button type="submit" size="icon" className="absolute right-2">
              <SendIcon className="size-4" />
            </Button>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
}
