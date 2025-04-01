import ReactDOM from "react-dom/client";
import { WidgetContainer } from "./widget/components/widget-container";
import { IChatWidgetProps } from "./widget/components/widget-container";
import styles from "./widget/styles/style.css?inline"; // Load CSS as a string

const normalizeAttribute = (attribute: string) => {
  return attribute?.replace(/-([a-z])/g, (_, letter) => letter?.toUpperCase());
};

class ChatWidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes<IChatWidgetProps>();

    // Inject styles inside Shadow DOM
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    this.shadowRoot?.appendChild(styleTag); // Append CSS

    // Render React component
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<WidgetContainer {...props} />);
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {};

    for (let index = 0; index < this.attributes?.length; index++) {
      const attribute = this.attributes[index];
      props[normalizeAttribute(attribute?.name)] = attribute?.value;
    }

    return props as T;
  }
}

export default ChatWidgetWebComponent;
