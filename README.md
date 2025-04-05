# 🧩 Embeddable React Widget
This project lets you build a fully **embeddable React widget** that can be used in **any website or application** using just a `<script>` tag—no React setup required on the consumer's end.

## 🚀 Why?

React is amazing for building UI components—but it's not built to be embedded across different non-React platforms out of the box. This project bridges that gap by:

- Wrapping a React component inside a **Web Component**
- Using **Shadow DOM** for style isolation
- Exporting the component as a **standalone script**
- Hosting it on a **CDN (e.g., Vercel)** for easy integration

## ✨ Features

- ⚡ Built using **Vite + TypeScript**
- 🧼 Shadow DOM encapsulation for scoped styles
- 🎛️ Accepts customizable props like `clientKey`, `theme`, `name`, etc.
- 🧱 Easy integration: just drop a `<script>` and `<my-widget />` tag
- 🌍 Can be embedded anywhere (plain HTML, PHP, WordPress, etc.)

## 📁 Folder Structure
- src/ components/ → Widget UI and logic
- styles/ → Sass styles for the widget
- lib/ → Contexts, helpers, etc.
- web-component.tsx → Converts React widget into Web Component
- index.tsx → Defines and exports the Web Component


## ⚙️ Vite Config for Build

Make sure your `vite.config.ts` includes the following:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
     lib: {
      entry: "./src/index.tsx",
      name: "ChatWidget",
      fileName: (format) => `chat-widget.${format}.js`,
      formats: ["es", "umd"], // ensure add umd format for embedding in html
    },
  },
 target: "esnext",
});
```


## 🧱 Web Component Setup
- Inside web-component.tsx, you'll define:
- A class extending HTMLElement
- Lifecycle method connectedCallback() to mount the React component
- getPropsFromAttributes and normalizeAttribute helpers
- Import and inject styles directly into the Shadow DOM

## 🌐 Deploying on Vercel
Create a vercel.json to serve the widget JS file from your CDN:

```ts
{
  "builds": [
    {
      "src": "dist/my-widget.js",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/my-widget.js",
      "dest": "dist/my-widget.js"
    }
  ]
}
```

## 🔗 Usage Example
After deployment, you can embed the widget like this:

```ts
<script src="https://your-cdn.com/my-widget.js"></script>
<my-widget clientkey="abc123" theme="dark"></my-widget>
```

This works in plain HTML, React, Angular, WordPress, etc.
