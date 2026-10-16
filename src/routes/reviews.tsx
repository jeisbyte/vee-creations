import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Vee Creations" },
      { name: "description", content: "Read what our customers say about Vee Creations — flowers, décor and gift hampers loved across Kampala." },
      { property: "og:title", content: "Customer Reviews — Vee Creations" },
      { property: "og:description", content: "Real stories from customers who trusted Vee Creations for their special moments." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Sarah N.",
    role: "Bride, Kampala",
    text: "The bridal bouquet was breathtaking. Vee Creations understood my style perfectly and delivered something truly elegant.",
    rating: 5,
  },
  {
    name: "Daniel M.",
    role: "Marketing Lead",
    text: "We ordered corporate hampers for our top clients. Beautifully presented and on time — they really wowed everyone.",
    rating: 5,
  },
  {
    name: "Patricia K.",
    role: "Homeowner",
    text: "I redid my living room with their wall clock set and vases. The space feels luxurious now. Highly recommend!",
    rating: 5,
  },
  {
    name: "Brian O.",
    role: "Surprised Husband",
    text: "Mother's Day hamper was a hit. My wife cried happy tears. The detail and care were unreal.",
    rating: 5,
  },
  {
    name: "Achieng L.",
    role: "Event Planner",
    text: "My go-to for last-minute bouquets and styling. Always reliable, always beautiful.",
    rating: 5,
  },
  {
    name: "Joseph T.",
    role: "Office Manager",
    text: "We refresh our reception flowers weekly with Vee Creations. Clients always compliment the décor.",
    rating: 5,
  },
];

function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Reviews</span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Loved by our customers</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Every arrangement, hamper and décor piece is made with care. Here's what our customers have to say.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}</span>
            5.0 average rating
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-foreground">"{r.text}"</blockquote>
              <div className="mt-5 flex items-center gap-1">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <figcaption className="mt-3 border-t border-border pt-3">
                <div className="font-display font-semibold">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold">Share your experience</h2>
          <p className="mt-3 text-muted-foreground">We'd love to hear about your Vee Creations moment. Send us a message on WhatsApp or Facebook.</p>
          <Link to="/contact" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
