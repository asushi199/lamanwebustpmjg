import Image from "next/image";
import { AmbientScene } from "@/components/ambient-scene";
import { LiveClock } from "@/components/live-clock";
import { ServiceCard } from "@/components/service-card";
import { portalServices } from "@/lib/portal-data";

export default function Home() {
  return (
    <>
      <AmbientScene />
      <main className="site-shell">
        <header className="topbar">
          <div className="brand-lockup" aria-label="Identiti Portal Digital USTP Manjung">
            <span className="brand-monogram" aria-hidden="true">
              <Image src="/ustp-logo.png" alt="" width={42} height={42} priority />
            </span>
            <span>
              <strong>USTP MANJUNG</strong>
              <small>PORTAL DIGITAL</small>
            </span>
          </div>
          <LiveClock />
        </header>

        <section className="hero" id="utama">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              PPD MANJUNG · UNIT SUMBER DAN TEKNOLOGI PENDIDIKAN
            </p>
            <h1>
              <span>Portal Digital</span>
              <strong>USTP Manjung</strong>
            </h1>
            <p className="hero-description">
              Satu pintu masuk untuk perkhidmatan digital USTP Daerah Manjung.
            </p>
            <a className="hero-action" href="#perkhidmatan">
              Terokai Perkhidmatan
              <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-metrics" aria-label="Ringkasan portal">
              <div><strong>05</strong><span>SISTEM DIGITAL</span></div>
              <div><strong>05</strong><span>PKG DAERAH</span></div>
              <div><strong>01</strong><span>PINTU MASUK</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-outer"><i /><i /><i /></div>
            <div className="orbit orbit-inner"><i /><i /></div>
            <div className="radar-sweep" />
            <div className="logo-core">
              <span className="logo-halo" />
              <Image
                src="/ustp-logo.png"
                alt=""
                width={230}
                height={230}
                priority
              />
            </div>
            <span className="signal-tag signal-tag-one">SISTEM TERPUSAT</span>
            <span className="signal-tag signal-tag-two">AKSES PANTAS</span>
          </div>
        </section>

        <section className="services-section" id="perkhidmatan">
          <div className="section-heading">
            <div>
              <span className="section-index">{"// 01 — PERKHIDMATAN"}</span>
              <h2>Satu portal, lima laluan kerja.</h2>
            </div>
            <p>Pilih sistem yang diperlukan untuk meneruskan urusan anda.</p>
          </div>
          <div className="service-grid">
            {portalServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        <section className="assurance-strip" aria-label="Ciri portal">
          <span><i aria-hidden="true" /> Mesra telefon</span>
          <span><i aria-hidden="true" /> Akses terus</span>
          <span><i aria-hidden="true" /> Tanpa log masuk tambahan</span>
        </section>

        <footer>
          <div className="footer-mark">USTP<span>+</span></div>
          <p>Unit Sumber dan Teknologi Pendidikan · Pejabat Pendidikan Daerah Manjung</p>
          <span className="footer-code">MANJUNG / DIGITAL / 2026</span>
        </footer>
      </main>
    </>
  );
}
