"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

const subscribe = () => () => {};

export function Portal({ children, containerId }: PortalProps) {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,   // client snapshot
    () => false,  // server snapshot
  );

  if (!mounted) return null;

  const container = containerId
    ? document.getElementById(containerId)
    : document.body;

  if (!container) return null;

  return createPortal(children, container);
}