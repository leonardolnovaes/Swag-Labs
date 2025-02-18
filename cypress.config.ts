import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "f7fy29",
  e2e: {
    baseUrl: "https://www.saucedemo.com/", // Altere para a URL da sua aplicação
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
