import type { Route } from "./+types/submit-job-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import {
  JOB_TYPES,
  LOCATION_TYPES,
  SALARY_RANGE,
} from "~/features/jobs/constants";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Post a Job | wemake" },
    { name: "description", content: "Post a new job listing" },
  ];
};

export default function SubmitJobPage() {
  return (
    <div className="space-y-10">
      <Hero title="Post a Job" subTitle="Find your next team member" />
      <Form className="max-w-screen-2xl mx-auto flex flex-col items-center gap-10">
        <div className="grid grid-cols-3  gap-10 w-full">
          <InputPair
            label="Position"
            name="position"
            description="(40 characters max)"
            maxLength={40}
            type="text"
            required
            placeholder="i.e Senior React Developer"
          />
          <InputPair
            label="Overview"
            name="overview"
            description="(400 characters max)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Senior React Developer"
            textArea
          />
          <InputPair
            label="Responsibilities"
            name="responsibilities"
            description="(400 characters max, comma separated)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
            textArea
          />
          <InputPair
            label="Qualifications"
            name="qualifications"
            description="(400 characters max, comma separated)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
            textArea
          />
          <InputPair
            label="Benefits"
            name="benefits"
            description="(400 characters max, comma separated)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
            textArea
          />
          <InputPair
            label="Skills"
            name="skills"
            description="(400 characters max, comma separated)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
            textArea
          />
          <InputPair
            label="Company Name"
            name="companyName"
            description="(400 characters max, comma separated)"
            maxLength={400}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
          />
          <InputPair
            label="Company Logo Url"
            name="companyLogoUrl"
            description="(40 characters max)"
            maxLength={40}
            type="url"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
          />
          <InputPair
            label="Company Location"
            name="companyLocation"
            description="(40 characters max)"
            maxLength={40}
            type="text"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
          />
          <InputPair
            label="Apply URL"
            name="applyUrl"
            description="(40 characters max)"
            maxLength={40}
            type="url"
            required
            placeholder="i.e Implement new features, Maintain code quality, etc."
          />
          <SelectPair
            label="Job Type"
            description="Select the type of job"
            name="jobType"
            placeholder="Select the type of job"
            required
            options={JOB_TYPES.map((type) => type)}
          />
          <SelectPair
            label="Job Location"
            description="Select the location of job"
            name="jobLocation"
            placeholder="Select the location of job"
            required
            options={LOCATION_TYPES.map((location) => location)}
          />
          <SelectPair
            label="Job Salary"
            description="Select the salary of job"
            name="jobSalary"
            placeholder="Select the salary of job"
            required
            options={SALARY_RANGE.map((range) => ({
              label: range,
              value: range,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
