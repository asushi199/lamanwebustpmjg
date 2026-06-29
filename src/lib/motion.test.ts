import { describe, expect, it } from "vitest";
import { shouldTrackPointerMotion } from "./motion";

describe("shouldTrackPointerMotion", () => {
  it("disables pointer tracking when the combined motion query does not match", () => {
    expect(shouldTrackPointerMotion({ matches: false })).toBe(false);
  });

  it("allows pointer tracking when a fine pointer and full motion are available", () => {
    expect(shouldTrackPointerMotion({ matches: true })).toBe(true);
  });
});
