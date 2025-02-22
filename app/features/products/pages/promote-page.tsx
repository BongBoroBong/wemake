import type { Route } from "./+types/promote-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import { DateTime } from "luxon";
import type { DateRange } from "react-day-picker";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();

  const totalDays =
    promotionPeriod?.from && promotionPeriod.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          DateTime.fromJSDate(promotionPeriod.from),
          "days",
        ).days
      : 0;

  return (
    <div>
      <Hero
        title="Promote Your Product"
        subTitle="Promote your product to the world"
      />
      <Form className="max-w-screen-sm mx-auto flex flex-col gap-4 items-center">
        <SelectPair
          label="Select a product"
          description="Select a product to promote"
          placeholder="Select a product"
          name="product"
          options={[
            { label: "AI Dark Mode Maker", value: "ai-dark-mode-maker" },
            { label: "AI Image Generator", value: "ai-image-generator" },
            { label: "AI Chatbot", value: "ai-chatbot" },
            { label: "AI Code Editor", value: "ai-code-editor" },
            { label: "AI Video Generator", value: "ai-video-generator" },
            { label: "AI Music Generator", value: "ai-music-generator" },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full">
          <Label>
            Select a range of dates for promotion
            <small className="text-muted-foreground block">
              Minimum 1 day, Maximum 30 days
            </small>
          </Label>

          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{ before: new Date() }}
          />
          <Button disabled={totalDays > 10} />
        </div>
      </Form>
    </div>
  );
}
