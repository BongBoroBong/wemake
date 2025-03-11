import InputPair from "~/common/components/input-pair";
import type { Route } from "./+types/settings-page";
import SelectPair from "~/common/components/select-pair";
import { Form } from "react-router";
import { useState } from "react";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
  return [{ title: "Settings | wemake" }];
};

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4 flex flex-col gap-10">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
          <Form className="flex flex-col gap-5 w-1/2">
            <InputPair
              label="Name"
              description="This is your public display name."
              required
              id="name"
              name="name"
              placeholder="John Doe"
            />
            <SelectPair
              label="Role"
              description="Your role in the company."
              required
              name="role"
              placeholder="Select your role"
              options={[
                { label: "Developer", value: "developer" },
                { label: "Designer", value: "designer" },
                { label: "Manager", value: "manager" },
                { label: "Other", value: "other" },
              ]}
            />
            <InputPair
              label="Bio"
              description="Your public bio."
              required
              textArea
              id="bio"
              name="bio"
              placeholder="John Doe"
            />
            <Button>Update profile</Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <Label className="flex flex-col gap-1">
            Avatar
            <small className="text-muted-foreground">
              This is your public avatar.
            </small>
          </Label>
          <div className="space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar ? (
                <img
                  src={avatar}
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
          <Button className="w-full">Update avatar</Button>
        </aside>
      </div>
    </div>
  );
}
