import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "5odeglfy",
  dataset: "production",
  title: "atWise",
  apiVersion: "2021-03-25",
  basePath: "/admin",
  plugins: [structureTool()],
});

export default config;
