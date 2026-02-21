

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export function Portal({ children, containerId }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []); // eslint-disable-line react-hooks/set-state-in-effect

  if (!mounted) return null;

  const container = containerId 
    ? document.getElementById(containerId) 
    : document.body;

  if (!container) return null;

  return createPortal(children, container);
}
