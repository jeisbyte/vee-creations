import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flower2, Gift, Clock, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import bouquetsImg from "@/assets/bouquets.jpg";
import clocksImg from "@/assets/clocks.jpg";
import hampersImg from "@/assets/hampers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vee Creations — Flowers, Décor & Gift Hampers in Kampala" },
      { name: "description", content: "Discover Vee Creations: fresh flowers, elegant décor, and bespoke gift hampers crafted in Kampala for stylish homes, offices, and unforgettable occasions." },
      { property: "og:title", content: "Vee Creations — Flowers, Décor & Gift Hampers" },
      { property: "og:description", content: "Beautiful flowers, elegant décor and thoughtful gift hampers — handcrafted in Kampala." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const highlights = [
  {
    title: "Fresh Flowers & Bouquets",
    description: "Hand-tied bouquets and elegant flower arrangements for every occasion — from proposals to anniversaries.",
    image: bouquetsImg,
    icon: Flower2,
  },
  {
    title: "3-Piece Wall Clocks & Décor",
    description: "Statement wall clocks, vases and curated art pieces that turn any room into a luxurious space.",
    image: clocksImg,
    icon: Clock,
  },
  {
    title: "Bespoke Gift Hampers",
    description: "Beautifully styled hampers for Valentine's, Mother's Day, birthdays and corporate gifting.",
    image: hampersImg,
    icon: Gift,
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Kampala's Décor Studio
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Beautify your space.<br />
              <span className="text-primary">Delight</span> every moment.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From fresh flowers and elegant vases to handcrafted décor and bespoke gift hampers — Vee Creations brings warmth, style and luxury to your home, office and special occasions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                Explore our work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-accent/30 bg-background px-7 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground"
              >
                Place an order
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Years</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent">8+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Happy clients</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent">2k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Occasions</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent">All</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand/20 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cocoa/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Curated flat lay of flowers, wall clocks and décor by Vee Creations"
              width={1600}
              height={1100}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <img
            src={aboutImg}
            alt="Modern living room styled with Vee Creations décor"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Crafted with care, styled with love.
            </h2>
            <p className="mt-5 text-muted-foreground">
              At Vee Creations, we believe a beautiful space inspires a beautiful life. Based in Melina Mall, Kampala, we curate fresh flowers, statement wall art, and handcrafted décor for stylish homes and modern offices.
            </p>
            <p className="mt-4 text-muted-foreground">
              We also create bespoke bouquets and luxurious gift hampers for Valentine's Day, Mother's Day, proposals, birthdays, anniversaries — every moment that deserves to be remembered.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary"
            >
              See what we offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Signature collections</h2>
            <p className="mt-4 text-muted-foreground">A curated selection of what makes Vee Creations a favourite for stylish homes, offices and gifts.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {highlights.map(({ title, description, image, icon: Icon }) => (
              <article key={title} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image} alt={title} loading="lazy" width={900} height={900} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-warm p-10 text-center shadow-glow sm:p-16">
            <h2 className="font-display text-3xl font-semibold text-brand-foreground sm:text-4xl">
              Have an occasion in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-foreground/90">
              Let us craft something unforgettable — bouquets, hampers or full décor for your home, office or event.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-background px-8 text-sm font-semibold text-accent transition hover:bg-secondary"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
