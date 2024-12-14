/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA as pwa } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pwa({
      srcDir: "src",
      filename: "service-worker.js",
      strategies: "injectManifest",
      injectRegister: false,
    }),
    react(), 
    svgr(), 
  ],
  base: "/",
  build: {
    outDir: 'build',
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
