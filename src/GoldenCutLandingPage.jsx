import React from "react";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export default function GoldenCutLandingPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--soft)]">
      <style>{`
        :root {
          --ink: #030302;
          --charcoal: #090806;
          --bone: #fffaf0;
          --soft: #e6dcc8;
          --champagne: #d9bf7d;
          --line: rgba(217, 191, 125, 0.24);
          --header-line: rgba(217, 191, 125, 0.18);
        }

        .bg-premium-hero {
          background: radial-gradient(
              circle at 20% 20%,
              rgba(217, 191, 125, 0.08),
              transparent 40%
            ),
            var(--ink);
        }

        .bg-premium-card {
          background: linear-gradient(
            160deg,
            rgba(255, 250, 240, 0.03),
            rgba(9, 8, 6, 0.85)
          );
          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.35);
        }

        .premium-cta {
          background: linear-gradient(120deg, #e6c980, #d9bf7d);
          box-shadow: 0 12px 40px rgba(217, 191, 125, 0.28);
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-[var(--header-line)] bg-[rgba(3,3,2,0.75)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="font-display text-lg font-black tracking-tight text-[var(--bone)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
            Golden Cut
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="premium-cta inline-flex items-center gap-2 rounded-full px-6 py-3 font-black text-[#180706] transition duration-200 hover:scale-[1.02]"
          >
            Tule ilman ajanvarausta
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      <main>
        <section className="bg-premium-hero relative overflow-hidden border-b border-[var(--line)]">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(3,3,2,0.95),rgba(3,3,2,0.72)),url('https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center grayscale-[30%]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-[0.75rem] font-black uppercase tracking-[0.24em] text-[var(--champagne)]">
                Espoo • Walk-in parturi
              </p>
              <h1 className="font-display text-4xl font-black tracking-[-0.052em] text-[var(--bone)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] md:text-6xl">
                Terävät leikkaukset ilman ajanvarausta.
              </h1>
              <p className="mt-6 max-w-xl leading-[1.85] text-[var(--soft)]">
                Golden Cut tarjoaa modernit miesten hiustenleikkaukset ja parranmuotoilut
                nopeasti, huolellisesti ja aina premium-jälkeä kunnioittaen.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="premium-cta inline-flex items-center gap-2 rounded-full px-6 py-3 font-black text-[#180706] transition duration-200 hover:scale-[1.02]"
                >
                  Tule ilman ajanvarausta
                  <MapPin className="h-5 w-5" />
                </a>
                <a
                  href="tel:+358401234567"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,250,240,0.035)] px-6 py-3 text-[var(--bone)] transition duration-200 hover:border-[rgba(217,191,125,0.34)] hover:text-[var(--champagne)]"
                >
                  <Phone className="h-5 w-5 text-[var(--champagne)]" />
                  Soita liikkeeseen
                </a>
              </div>
            </div>

            <article className="bg-premium-card rounded-3xl border border-[var(--line)] p-6">
              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
                alt="Parturi viimeistelee miesten fade-hiustenleikkausta Espoon liikkeessä"
                className="h-56 w-full rounded-2xl object-cover grayscale-[20%]"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--charcoal)] p-4">
                  <p className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[var(--champagne)]">
                    Auki tänään
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-[var(--bone)]">
                    <Clock3 className="h-5 w-5 text-[var(--champagne)]" />
                    10:00–20:00
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--charcoal)] p-4">
                  <p className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[var(--champagne)]">
                    Arvosana
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-[var(--bone)]">
                    <Star className="h-5 w-5 text-[var(--champagne)]" />
                    4.9 / 5
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-[0.75rem] font-black uppercase tracking-[0.24em] text-[var(--champagne)]">
            Palvelut
          </p>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-[var(--bone)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] md:text-5xl">
            Selkeät hinnat, premium-jälki.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Miesten leikkaus", "35 €", Scissors],
              ["Leikkaus + parta", "49 €", Sparkles],
              ["Parran muotoilu", "25 €", ShieldCheck],
            ].map(([title, price, Icon]) => (
              <article key={title} className="bg-premium-card rounded-3xl border border-[var(--line)] p-6">
                <Icon className="h-6 w-6 text-[var(--champagne)]" />
                <h3 className="mt-4 font-display text-2xl font-black tracking-tight text-[var(--bone)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--soft)]">
                  Huolellinen viimeistely, laadukkaat tuotteet ja nopea palvelu ilman
                  ajanvarausta.
                </p>
                <p className="mt-6 text-xl font-black text-[var(--champagne)]">{price}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--charcoal)]">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
            {[
              ["Nopea jonotus", "Keskimäärin alle 15 min", Users],
              ["Keskeinen sijainti", "Helppo tulla autolla ja metrolla", MapPin],
              ["Ammattilaiset", "Kokenut tiimi miesten tyyleihin", Scissors],
            ].map(([title, desc, Icon]) => (
              <article key={title} className="bg-premium-card rounded-3xl border border-[var(--line)] p-6">
                <Icon className="h-6 w-6 text-[var(--champagne)]" />
                <h3 className="mt-4 font-display text-xl font-black tracking-tight text-[var(--bone)] drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--soft)]">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
