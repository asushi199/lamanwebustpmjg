import { describe, expect, it } from "vitest";
import { formatMalaysiaDateTime } from "./time";

describe("formatMalaysiaDateTime", () => {
  it("formats UTC input in Malay using the Asia/Kuala_Lumpur timezone", () => {
    const date = new Date("2026-06-29T04:30:00.000Z");

    expect(formatMalaysiaDateTime(date)).toBe(
      "Isnin, 29 Jun 2026 · 12:30 MYT",
    );
  });
});
