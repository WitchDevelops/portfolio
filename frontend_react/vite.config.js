import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

export default defineConfig(({ mode }) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const env = loadEnv(mode, __dirname, "");
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src/components"),
        "@container": path.resolve(__dirname, "src/container"),
        "@data": path.resolve(__dirname, "src/data"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@wrapper": path.resolve(__dirname, "src/wrapper"),
      },
    },
    define: {
      "process.env": env,
    },
    plugins: [react()],
  };
});
