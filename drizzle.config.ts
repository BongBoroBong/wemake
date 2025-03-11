import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./app/features/**/schema.ts",
    schemaFilter: ["public"],
    out: './app/migrations',
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});
