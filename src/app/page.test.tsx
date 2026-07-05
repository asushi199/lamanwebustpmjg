import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Portal Digital USTP Manjung", () => {
  it("renders the approved Malay hero content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Portal Digital USTP Manjung",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Satu pintu masuk untuk perkhidmatan digital USTP Daerah Manjung.",
      ),
    ).toBeInTheDocument();
  });

  it("renders exactly five accessible service links", () => {
    render(<Home />);

    const links = screen.getAllByRole("link", { name: /Buka .* dalam tab ini/ });
    expect(links).toHaveLength(5);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "https://willowy-empanada-6b9e40.netlify.app/",
      "https://datagpmictdelima.vercel.app/",
      "https://pkgtempahanbilik.vercel.app/",
      "https://datastudio.google.com/reporting/82432d2f-3362-4e70-9fc4-44a1adb1a36b/page/JbWhE",
      "https://datastudio.google.com/reporting/97c54e64-01ea-495c-be82-300adf618bc6/page/JbWhE",
    ]);
  });

  it("identifies the responsible official unit in the footer", () => {
    render(<Home />);

    expect(
      screen.getByText(
        "Unit Sumber dan Teknologi Pendidikan · Pejabat Pendidikan Daerah Manjung",
      ),
    ).toBeInTheDocument();
  });
});
