import type { Route } from "./+types/social-start-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function SocialStartPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <Form className="w-full">
          <InputPair
            label="Name"
            description="Enter your name"
            name="name"
            required
            type="text"
            placeholder="Enter your name"
          />
          <InputPair
            label="Username"
            description="Enter your user name"
            name="username"
            required
            type="text"
            placeholder="Enter your user name"
          />
          <InputPair
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
          <InputPair
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
        </Form>
      </div>
    </div>
  );
}
