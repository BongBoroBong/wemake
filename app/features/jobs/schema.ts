import { pgTable, bigint, text, pgEnum, timestamp } from "drizzle-orm/pg-core";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "./constants";

export const jobTypes = pgEnum(
  "job_types",
  JOB_TYPES.map((type) => type.value) as [string, ...string[]],
);

export const locations = pgEnum(
  "locations",
  LOCATION_TYPES.map((location) => location.value) as [string, ...string[]],
);

export const salaryRange = pgEnum(
  "salary_range",
  SALARY_RANGE.map((range) => range) as [string, ...string[]],
);

export const jobs = pgTable("jobs", {
  job_id: bigint({ mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity(),
  position: text().notNull(),
  overview: text().notNull(),
  responsibilities: text().notNull(),
  qualifications: text().notNull(),
  benefits: text().notNull(),
  skills: text().array().notNull(),
  company_name: text().notNull(),
  company_logo: text().notNull(),
  company_location: text().notNull(),
  apply_url: text().notNull(),
  location: locations().notNull(),
  job_type: jobTypes().notNull(),
  salary_range: salaryRange().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
});
