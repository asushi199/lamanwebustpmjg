export type PortalService = {
  id: string;
  title: string;
  description: string;
  url: string;
  accent: string;
  icon: "radar" | "directory" | "calendar" | "chart";
};

export const portalServices: PortalService[] = [
  {
    id: "osc",
    title: "OSC USTP",
    description:
      "Pusat sehenti bagi paparan maklumat, laporan, data dan status USTP.",
    url: "https://willowy-empanada-6b9e40.netlify.app/",
    accent: "#35D9FF",
    icon: "radar",
  },
  {
    id: "direktori",
    title: "Direktori GPICT, GP DELIMa & GPM",
    description:
      "Cari maklumat GPM, GPICT dan GP DELIMa dengan pantas mengikut sekolah.",
    url: "https://datagpmictdelima.vercel.app/",
    accent: "#36E5A5",
    icon: "directory",
  },
  {
    id: "tempahan",
    title: "Tempahan Bilik PKG",
    description:
      "Semak kekosongan dan tempah bilik di PKG seluruh Daerah Manjung.",
    url: "https://pkgtempahanbilik.vercel.app/",
    accent: "#FFB84D",
    icon: "calendar",
  },
  {
    id: "pelaporan-pss",
    title: "Dashboard Pelaporan PSS",
    description:
      "Paparan interaktif laporan dan analitik PSS Daerah Manjung.",
    url: "https://datastudio.google.com/reporting/82432d2f-3362-4e70-9fc4-44a1adb1a36b/page/JbWhE",
    accent: "#B48CFF",
    icon: "chart",
  },
  {
    id: "pelaporan-dpd",
    title: "Dashboard Pelaporan DPD",
    description:
      "Paparan interaktif laporan dan analitik Pejabat Pendidikan Daerah Manjung.",
    url: "https://datastudio.google.com/reporting/97c54e64-01ea-495c-be82-300adf618bc6/page/JbWhE",
    accent: "#FF7DA8",
    icon: "chart",
  },
];
