import { createFileRoute, Link } from "@tanstack/react-router";
import { Flower2, Clock, Gift, Palette, Sparkles, Heart } from "lucide-react";
import bouquetsImg from "@/assets/bouquets.jpg";
import clocksImg from "@/assets/clocks.jpg";
import hampersImg from "@/assets/hampers.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Products — Vee Creations" },
      { name: "description", content: "Fresh flowers, elegant vases, 3-piece wall clocks, handcrafted décor, bouquets and gift hampers for every occasion. See our full range." },
      { property: "og:title", content: "Services & Products — Vee Creations" },
      { property: "og:description", content: "Flowers, décor, bouquets and bespoke gift hampers for homes, offices and special moments." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const offerings = [
  { icon: Flower2, title: "Fresh Flowers & Vases", text: "Seasonal stems, single-color arrangements and elegant vases to brighten any space." },
  { icon: Clock, title: "3-Piece Wall Clocks", text: "Statement wall clocks designed to anchor modern living rooms and offices." },
  { icon: Palette, title: "Wall Art & Décor", text: "Unique art pieces and handcrafted décor to elevate your interiors." },
  { icon: Heart, title: "Bouquets for Every Occasion", text: "Valentine's Day, proposals, anniversaries, birthdays — wrapped to perfection." },
  { icon: Gift, title: "Custom Gift Hampers", text: "Beautifully styled hampers combining flowers, treats and curated keepsakes." },
  { icon: Sparkles, title: "Office & Event Styling", text: "Décor consultation and styling for offices, launches and intimate events." },
];

const process = [
  { step: "01", title: "Tell us your vision", text: "Share the occasion, recipient or space you'd like to style. WhatsApp or visit us in store." },
  { step: "02", title: "We curate & design", text: "Our team curates flowers, décor or hamper items tailored to your style and budget." },
  { step: "03", title: "Approval & styling", text: "We share previews, refine the details and prepare your order with care." },
  { step: "04", title: "Delivery or pickup", text: "Collect from Melina Mall or have it hand-delivered across Kampala." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services & Products</span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Everything you need to beautify your space</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            From fresh flowers and elegant vases to 3-piece wall clocks, unique art and handcrafted décor — plus bespoke bouquets and gift hampers for every occasion.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-warm text-brand-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <img src={bouquetsImg} alt="Hand-tied bouquet" loading="lazy" width={900} height={900} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
          <img src={clocksImg} alt="Modern wall clock styling" loading="lazy" width={900} height={900} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
          <img src={hampersImg} alt="Luxury gift hamper" loading="lazy" width={900} height={900} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our process</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Simple, thoughtful, beautifully done</h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, text }) => (
              <li key={step} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-3xl font-semibold text-primary">{step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
              Start your order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
