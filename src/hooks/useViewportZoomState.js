import { useEffect } from "react";

export default function useViewportZoomState() {
  useEffect(() => {
    const viewport = window.visualViewport;

    if (!viewport) return undefined;

    const syncZoomState = () => {
      document.documentElement.classList.toggle(
        "is-viewport-zoomed",
        viewport.scale > 1.01,
      );
    };

    syncZoomState();
    viewport.addEventListener("resize", syncZoomState);
    viewport.addEventListener("scroll", syncZoomState);

    return () => {
      viewport.removeEventListener("resize", syncZoomState);
      viewport.removeEventListener("scroll", syncZoomState);
      document.documentElement.classList.remove("is-viewport-zoomed");
    };
  }, []);
}
