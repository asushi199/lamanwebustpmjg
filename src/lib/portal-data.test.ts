import { describe, expect, it } from "vitest";
import { portalServices } from "./portal-data";

describe("portalServices", () => {
  it("contains the three approved services in display order", () => {
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
    ]);
  });

  it("provides complete presentation data for every service", () => {
    for (const service of portalServices) {
      expect(service.description).not.toHaveLength(0);
      expect(service.accent).toMatch(/^#[0-9A-F]{6}$/);
      expect(["radar", "directory", "calendar"]).toContain(service.icon);
    }
  });
});
