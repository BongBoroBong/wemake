import { Form } from "react-router";
import type { Route } from "./+types/submit-page";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product" },
    { name: "description", content: "Submit your product" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Hero
        title="Submit Your Product"
        subTitle="Submit your product with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product"
            name="name"
            id="name"
            type="text"
            required
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            name="tagline"
            id="tagline"
            required
            type="text"
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            name="url"
            id="url"
            required
            type="text"
            placeholder="https://example.com"
          />
          <InputPair
            textArea
            label="Description"
            description="A detailed description of your product"
            name="description"
            id="description"
            required
            type="text"
            placeholder="A detailed description of your product"
          />
          <SelectPair
            label="Category"
            description="The category of your product"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: "Productivity", value: "productivity" },
              { label: "Entertainment", value: "entertainment" },
              { label: "Education", value: "education" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
        <div className="flex flex-col space-y-2">
            <div className="size-40 rounded-xl shadow-xl overflow-hidden">
          {icon ? (
              <img
                src={icon}
                alt="icon"
                className="w-full h-full object-cover"
              />
            ) : null}
            </div>
          <Label className="flex flex-col gap-px">
            Icon
            <small className="text-muted-foreground">
              The icon of your product
            </small>
          </Label>
          <Input
            type="file"
            className="max-w-1/2"
            onChange={onChange}
            required
            name="icon"
          />
          <div className="flex flex-col text-sm">
            <span className="text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className="text-muted-foreground">
              Allowed formats: PNG, JPEG
            </span>
            <span className=" text-muted-foreground">Max file size: 1MB</span>
          </div>
        
        </div>
      </Form>
    </div>
  );
}
