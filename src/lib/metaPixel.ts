type PixelParams = Record<string, string | number | boolean | null | undefined>;

type FbqFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => number;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
    __metaPixelInitialized?: boolean;
  }
}

export const META_PIXEL_ID = "1073016804714144";

function getFbq() {
  if (typeof window === "undefined") return null;
  if (window.fbq) return window.fbq;

  const fbq: FbqFunction = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }

    (fbq.queue = fbq.queue || []).push(args);
  } as FbqFunction;

  if (!window._fbq) {
    window._fbq = fbq;
  }

  fbq.push = (...args: unknown[]) => (fbq.queue = fbq.queue || []).push(args);
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;

  return fbq;
}

function injectMetaPixelScript() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[data-meta-pixel-id="${META_PIXEL_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.setAttribute("data-meta-pixel-id", META_PIXEL_ID);
  document.head.appendChild(script);
}

export function initMetaPixel() {
  if (typeof window === "undefined") return;

  const fbq = getFbq();
  injectMetaPixelScript();

  if (!fbq || window.__metaPixelInitialized) return;

  fbq("init", META_PIXEL_ID);
  window.__metaPixelInitialized = true;
}

export function trackPageView() {
  if (typeof window === "undefined") return;

  initMetaPixel();
  window.fbq?.("track", "PageView");
}

export function trackStandardEvent(eventName: string, params?: PixelParams) {
  if (typeof window === "undefined") return;

  initMetaPixel();
  window.fbq?.("track", eventName, params);
}

export function trackCustomEvent(eventName: string, params?: PixelParams) {
  if (typeof window === "undefined") return;

  initMetaPixel();
  window.fbq?.("trackCustom", eventName, params);
}