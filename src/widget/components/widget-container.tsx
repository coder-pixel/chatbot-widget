import { useState, useEffect } from "react";
import { WidgetContext } from "../lib/context";
import { Widget } from "./widget";
import "../styles/style.css";

export interface IChatWidgetProps {
  clientKey: string;
  name?: string;
}

export function WidgetContainer({ clientKey, name }: IChatWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <WidgetContext.Provider
      value={{ isOpen, setIsOpen, clientKey: clientKey!, name: name! }}
    >
      <Widget />
    </WidgetContext.Provider>
  );
}
