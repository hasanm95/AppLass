import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MINDFUL_GUARD_PLAY_ID = "com.anonymous.mindfulguard";

/**
 * Builds the Mindful Guard Play Store URL with Google Play install attribution.
 * Google Play reads UTM params from a single URL-encoded `referrer` value
 * (not raw ?utm_* params), which then surfaces in Play Console → User acquisition
 * and via the Play Install Referrer API.
 *
 * @param campaign  utm_campaign — the placement, e.g. "app-landing", "opal-alternatives"
 * @param medium    utm_medium — the channel, defaults to "site"
 * @param source    utm_source — defaults to "applass"
 */
export function playUrl(campaign: string, medium = "site", source = "applass") {
  const referrer = encodeURIComponent(
    `utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`
  );
  return `https://play.google.com/store/apps/details?id=${MINDFUL_GUARD_PLAY_ID}&referrer=${referrer}`;
}

/**
 * Throttles a function based on frame rate for better performance in animations.
 */
export function rafThrottle<T extends (...args: any[]) => void>(fn: T) {
  let locked = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      fn.apply(this, args);
      locked = false;
    });
  };
}
