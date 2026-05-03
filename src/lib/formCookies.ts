export const COOKIE_CONSENT_NAME = "bgs_cookie_consent";
export const CONTACT_FORM_COOKIE = "bgs_contact_form";
export const APPLY_FORM_COOKIE = "bgs_apply_form";
export const COOKIE_CONSENT_EVENT = "bgs-cookie-consent-updated";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

function isBrowser() {
  return typeof document !== "undefined";
}

function cookieSuffix() {
  const secure = typeof window !== "undefined" && window.location.protocol === "https:";
  return `; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure ? "; Secure" : ""}`;
}

export function getCookie(name: string) {
  if (!isBrowser()) return "";
  const match = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : "";
}

export function setCookie(name: string, value: string) {
  if (!isBrowser()) return;
  document.cookie = `${name}=${encodeURIComponent(value)}${cookieSuffix()}`;
}

export function deleteCookie(name: string) {
  if (!isBrowser()) return;
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

export function getCookieConsent() {
  return getCookie(COOKIE_CONSENT_NAME);
}

export function hasCookieConsent() {
  return getCookieConsent() === "accepted";
}

export function saveJsonCookie(name: string, value: Record<string, string>) {
  if (!hasCookieConsent()) return;
  setCookie(name, JSON.stringify(value));
}

export function readJsonCookie<T extends Record<string, string>>(name: string): Partial<T> {
  const value = getCookie(name);
  if (!value) return {};

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function clearSavedFormCookies() {
  deleteCookie(CONTACT_FORM_COOKIE);
  deleteCookie(APPLY_FORM_COOKIE);
}
