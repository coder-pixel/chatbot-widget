import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  plugins: [react()],

  // 👇 Insert these lines for chat widget
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
      formats: ["es", "umd"], // ensure add umd format for embedding in html
    },
    // rollupOptions: {
    // external: ["react", "react-dom"], // avoid bundling react and react-dom with the widget
    // output: {
    //   globals: {
    //     react: "React",
    //     "react-dom": "ReactDOM",
    //   },
    // },
    // },
    target: "esnext",
  },
});
