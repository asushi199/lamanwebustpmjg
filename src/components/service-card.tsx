"use client";

import type { CSSProperties, PointerEvent } from "react";
import type { PortalService } from "@/lib/portal-data";
import { ServiceIcon } from "./service-icon";

type ServiceCardProps = {
  service: PortalService;
  index: number;
};

const categoryLabels: Record<PortalService["id"], string> = {
  osc: "PUSAT DATA",
  direktori: "DIREKTORI",
  tempahan: "TEMPAHAN",
  "pelaporan-pss": "PELAPORAN PSS",
  "pelaporan-dpd": "PELAPORAN DPD",
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`);
    event.currentTarget.style.setProperty("--card-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--card-y", `${y * 100}%`);
  };

  const resetTilt = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <a
      className="service-card"
      href={service.url}
      aria-label={`Buka ${service.title} dalam tab ini`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={
        {
          "--accent": service.accent,
          "--card-index": index,
        } as CSSProperties
      }
    >
      <span className="card-scan" aria-hidden="true" />
      <span className="card-sequence" aria-hidden="true">
        0{index + 1}
      </span>
      <div className="card-icon">
        <ServiceIcon icon={service.icon} />
      </div>
      <span className="card-category">{categoryLabels[service.id]}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="card-action" aria-hidden="true">
        Buka Sistem
        <svg viewBox="0 0 20 20">
          <path d="M4 10h11M11 6l4 4-4 4" />
        </svg>
      </span>
    </a>
  );
}
