import { useContext } from "react";
import { WidgetContext } from "../lib/context";
import "../styles/style.css";

export function Widget() {
  const { isOpen, setIsOpen, name } = useContext(WidgetContext);

  if (!isOpen) {
    return (
      <button className="widget-button" onClick={() => setIsOpen(true)}>
        Open Widget
      </button>
    );
  }

  return (
    <div className="widget-container">
      <div className="widget-header">
        <h3>Widget Title</h3>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </div>

      <div className="widget-content" style={{ color: "#000" }}>
        <h1>Widget Content</h1>
        <p>This is the widget content.</p>
        <h2>Hello {name}</h2>
        {/* Your widget content goes here */}
      </div>
    </div>
  );
}
