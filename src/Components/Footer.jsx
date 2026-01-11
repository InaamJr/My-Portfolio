/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/InaamJr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/inaam-ahamed-2817b836a/" },
  { label: "X", href: "https://x.com/ahamed_inaam" },
  { label: "Instagram", href: "https://www.instagram.com/inaam.jr/" },
];

const Footer = () => {
  return (
    <footer className="section pt-16 pb-10">
      <div className="mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-16 2xl:px-24">
        {/* Main footer card */}
        <div className="reveal-up relative overflow-hidden rounded-3xl ring-1 ring-inset ring-zinc-800/70 bg-zinc-950/40 backdrop-blur-md">
          {/* Ambient gradient */}
          <div
            className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl bg-gradient-to-br from-sky-400/15 via-violet-400/10 to-transparent"
            aria-hidden="true"
          />

          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(75% 75% at 20% 0%, black 45%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10">
              {/* Left */}
              <div className="mb-10 lg:mb-0">
                <p className="font-mono text-xs tracking-[0.35em] text-zinc-400/80 uppercase">
                  Ready when you are
                </p>

                <h2 className="headline-1 mt-3 mb-6 lg:max-w-[18ch]">
                  Let’s connect and build something clean.
                </h2>

                <div className="flex flex-wrap items-center gap-3">
                  <ButtonPrimary
                    href="mailto:inaamjr29@gmail.com"
                    label="Start a Project"
                    icon="chevron_right"
                  />

                  <a
                    href="#work"
                    className={
                      "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm tracking-wide" +
                      "ring-1 ring-inset ring-white/[0.08] bg-white/[0.04] text-zinc-100 backdrop-blur-md " +
                      "transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-0.5"
                    }
                  >
                    View work
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:pl-10">
                <FooterColumn title="Sitemap">
                  {sitemap.map(({ label, href }, key) => (
                    <FooterLink key={key} href={href}>
                      {label}
                    </FooterLink>
                  ))}
                </FooterColumn>

                <FooterColumn title="Socials">
                  {socials.map(({ label, href }, key) => (
                    <FooterLink
                      key={key}
                      href={href}
                      external
                    >
                      {label}
                    </FooterLink>
                  ))}
                </FooterColumn>
              </div>
            </div>

            {/* Divider */}
            <div
              className="mt-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              aria-hidden="true"
            />

            {/* Bottom bar */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href="/" className="inline-flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-2xl ring-1 ring-inset ring-white/[0.08] bg-white/[0.03]">
                  <img
                    src="/images/IA_logo.svg"
                    width={22}
                    height={22}
                    alt="Logo"
                    className="opacity-95"
                  />
                </span>

                <span className="text-sm text-zinc-300/90 tracking-wide">
                  Inaam Ahamed
                </span>
              </a>

              <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} <span className="text-zinc-200">Inaam Ahamed</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tiny subtext */}
        <p className="font-mono mt-3 text-[12px] text-zinc-500/90 reveal-up">
          Built with React + Tailwind • Designed for clarity.
        </p>
      </div>
    </footer>
  );
};

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-zinc-400/80 mb-3">
        {title}
      </p>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, external = false, children }) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={
          "group inline-flex items-center gap-2 text-sm font-extralight text-zinc-400 " +
          "transition-colors hover:text-zinc-200"
        }
      >
        <span className="relative">
          {children}
          <span
            className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-300 group-hover:w-full"
            aria-hidden="true"
          />
        </span>

        {external ? (
          <span className="material-symbols-rounded text-[18px] text-zinc-500 group-hover:text-zinc-300" aria-hidden="true">
            arrow_outward
          </span>
        ) : null}
      </a>
    </li>
  );
}

export default Footer;
