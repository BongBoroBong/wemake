import type { Route } from "./+types/submit-team-page";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";      
import { PRODUCT_STAGES } from "../constants";

export function meta({}: Route.MetaFunction) {
  return [{ title: "Create Team | wemake" }];
}

export default function SubmitTeamPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Create Team" subTitle="Create a team to find a team mate." />
      <Form className="flex flex-col gap-10 max-w-screen-2xl items-center mx-auto">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            label="What is the name of your product?"
            description="(20 characters max)"
            name="name"
            placeholder="i.e. wemake"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your products?"
            description="Select the stage of your product"
            name="stage"
            placeholder="Select the stage of your product"
            options={PRODUCT_STAGES}
          />
          <InputPair
            label="What is the name of your team?"
            description="(1-100)"
            name="size"
            max={100}
            min={1}
            type="number"
            id="size"
            required
          />
          <InputPair
            label="How mush equity are you willing to give?"
            description="(1-100)"
            name="equity"
            max={100}
            min={1}
            type="number"
            id="equity"
            required
          />
          <InputPair
            label="What roles are you looking for?"
            description="(1-100)"
            name="roles"
            max={100}
            min={1}
            type="number"
            id="roles"
            required
          />
          <InputPair
            label="What is the description of your team?"
            description="(200 characters max)"
            name="description"
            placeholder="i.e We are building a new social media platform"
            maxLength={200}
            type="text"
            id="description"
            required
            textArea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}
