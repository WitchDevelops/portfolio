import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "url";
import path from "path";

const keys = ["VITE_SANITY_PROJECT_ID", "VITE_SANITY_TOKEN"];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, new URL(".", import.meta.url).pathname, "");
  const processEnv = {};
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  keys.forEach((key) => {
    processEnv[key] = env[key];
  });
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@container": path.resolve(__dirname, "src/container"),
      },
    },
    define: {
      "process.env": env,
    },
    plugins: [react()],
  };
});
