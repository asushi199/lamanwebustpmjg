import type { PortalService } from "@/lib/portal-data";

export function ServiceIcon({ icon }: Pick<PortalService, "icon">) {
  if (icon === "directory") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="11" cy="10" r="4" />
        <circle cx="23" cy="12" r="3" />
        <path d="M4 25c.6-5 3-7.5 7-7.5s6.4 2.5 7 7.5" />
        <path d="M19 19c1-.8 2.2-1.2 3.8-1.2 3.2 0 5 2.1 5.4 5.7" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="6.5" width="24" height="21" rx="3" />
        <path d="M4 13h24M10 3.5v6M22 3.5v6" />
        <path d="m11 21 3.2 3 6.8-7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="3" />
      <path d="M16 4a12 12 0 1 1-8.5 3.5M16 9a7 7 0 1 1-5 2" />
      <path d="M16 16 25 7" />
      <circle cx="25" cy="7" r="1.7" />
    </svg>
  );
}
