// import { hydrateRoot } from "react-dom/client";
// import { WidgetContainer } from "./components/widget-container";
// import "./styles/style.css";

// function initializeWidget() {
//   if (document.readyState !== "loading") {
//     onReady();
//   } else {
//     document.addEventListener("DOMContentLoaded", onReady);
//   }
// }

// function onReady() {
//   try {
//     const element = document.createElement("div");
//     const shadow = element.attachShadow({ mode: "open" });
//     const shadowRoot = document.createElement("div");
//     const clientKey = getClientKey();
//     const name = getClientName();

//     shadowRoot.id = "widget-root";

//     const component = <WidgetContainer clientKey={clientKey} name="Sauvik" />;

//     shadow.appendChild(shadowRoot);
//     injectStyle(shadowRoot);
//     hydrateRoot(shadowRoot, component);

//     document.body.appendChild(element);
//   } catch (error) {
//     console.warn("Widget initialization failed:", error);
//   }
// }

// function injectStyle(shadowRoot: HTMLElement) {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = process.env.WIDGET_CSS_URL || "/style.css";
//   shadowRoot.appendChild(link);
// }

// function getClientKey() {
//   const script = document.currentScript as HTMLScriptElement;
//   const clientKey = script?.getAttribute("data-client-key");

//   if (!clientKey) {
//     throw new Error("Missing data-client-key attribute");
//   }

//   return clientKey;
// }

// function getClientName() {
//   const script = document.currentScript as HTMLScriptElement;
//   const name = script?.getAttribute("data-name");

//   // if (!name) {
//   //   throw new Error("Missing data-name attribute");
//   // }

//   return name || "Default User";
// }

// initializeWidget();
