import { describe, expect, it } from "vitest";
import { portalServices } from "./portal-data";

describe("portalServices", () => {
  it("contains the five approved services in display order", () => {
    expect(portalServices.map(({ id, title, url }) => ({ id, title, url }))).toEqual([
      {
        id: "osc",
        title: "OSC USTP",
        url: "https://willowy-empanada-6b9e40.netlify.app/",
      },
      {
        id: "direktori",
        title: "Direktori GPICT, GP DELIMa & GPM",
        url: "https://datagpmictdelima.vercel.app/",
      },
      {
        id: "tempahan",
        title: "Tempahan Bilik PKG",
        url: "https://pkgtempahanbilik.vercel.app/",
      },
      {
        id: "pelaporan-pss",
        title: "Dashboard Pelaporan PSS",
        url: "https://datastudio.google.com/reporting/82432d2f-3362-4e70-9fc4-44a1adb1a36b/page/JbWhE",
      },
      {
        id: "pelaporan-dpd",
        title: "Dashboard Pelaporan DPD",
        url: "https://datastudio.google.com/reporting/97c54e64-01ea-495c-be82-300adf618bc6/page/JbWhE",
      },
    ]);
  });

  it("provides complete presentation data for every service", () => {
    for (const service of portalServices) {
      expect(service.description).not.toHaveLength(0);
      expect(service.accent).toMatch(/^#[0-9A-F]{6}$/);
      expect(["radar", "directory", "calendar", "chart"]).toContain(service.icon);
    }
  });
});
