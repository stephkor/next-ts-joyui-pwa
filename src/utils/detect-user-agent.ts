import type { AppType, DeviceType } from "@/types/global";

import UAParser from "ua-parser-js";

const parser = new UAParser();

export const detectAppType = (): AppType => {
  const os = parser.getOS();
  const ua = parser.getUA();

  const isAOS = os.name === "Android";
  const isIOS = os.name === "iOS";

  const normalizedUa = ua.toLowerCase();

  const standalone =
    typeof window !== "undefined" &&
    "standalone" in window.navigator &&
    window.navigator.standalone;

  const isInWebAppiOS =
    typeof window !== "undefined" &&
    "standalone" in window.navigator &&
    window.navigator.standalone;

  const isSafari = /safari/.test(normalizedUa);

  const isWebview =
    (isAOS && /wv\)/.test(normalizedUa)) ||
    isInWebAppiOS ||
    (isIOS && !standalone && !isSafari);

  if (isWebview) {
    return "app";
  }

  return "browser";
};

export const detectDeviceType = (): DeviceType => {
  const os = parser.getOS();
  const isAOS = os.name === "Android";
  const isIOS = os.name === "iOS";
  const isChrome = parser.getBrowser().name === "Chrome";
  const isSafari = parser.getBrowser().name === "Safari";

  if (isAOS) {
    return "aos";
  }

  if (isIOS) {
    return "ios";
  }

  if (isSafari) {
    return "safari";
  }
  return "pc";
};
