export const JOB_TYPES = [
  {
    label: "Full-Time",
    value: "full-time",
  },
  {
    label: "Part-Time",
    value: "pull-time",
  },
  {
    label: "Remote",
    value: "remote",
  },
] as const;

export const LOCATION_TYPES = [
  {
    label: "Remote",
    value: "remote",
  },
  {
    label: "In-Person",
    value: "in-person",
  },

  {
    label: "Hybrid",
    value: "hybrid",
  },
] as const;

export const SALARY_RANGE = [
  "$0 - $50,000",
  "$50,000 - $70,000",
  "$70,000 - $100,000",
  "$100,000 - $120,000",
  "$120,000 - $150,000",
  "$150,000 - $200,000",
  "$200,000+",
] as const;
