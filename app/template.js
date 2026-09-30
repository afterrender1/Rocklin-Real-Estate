import { ViewTransition } from "react";

// Templates remount on every navigation, so this plays a light fade/slide between pages.
// The browser animates snapshots on the compositor, so it stays smooth on low-end devices.
export default function Template({ children }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
