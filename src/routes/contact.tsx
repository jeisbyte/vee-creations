import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock, Facebook, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vee Creations — Kampala" },
      { name: "description", content: "Visit Vee Creations at Melina Mall Shop M17, Mobutu Road, Kampala. WhatsApp, email and contact form for orders and enquiries." },
      { property: "og:title", content: "Contact Vee Creations" },
      { property: "og:description", content: "Get in touch for flowers, décor and bespoke gift hampers in Kampala." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(5, "Please share a few details").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") ?? undefined,
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { name, email, phone, message } = parsed.data;
    const body = `Hi Vee Creations,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone ?? "")}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:veecreations71@gmail.com?subject=${encodeURIComponent("New enquiry from " + name)}&body=${body}`;
    toast.success("Opening your email app…");
    setTimeout(() => setSubmitting(false), 1500);
    form.reset();
  }

  return (
    <>
      <Toaster />
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Let's create something beautiful</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Visit our shop in Melina Mall, send a message on WhatsApp, or use the form below to start your order or enquiry.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
            <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium">Name</span>
                <input name="name" required maxLength={100} className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Email</span>
                <input name="email" type="email" required maxLength={255} className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="font-medium">Phone <span className="text-muted-foreground">(optional)</span></span>
                <input name="phone" maxLength={30} className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="font-medium">Message</span>
                <textarea name="message" required rows={5} maxLength={1000} className="mt-1.5 w-full rounded-lg border border-input bg-background p-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold">Visit the shop</h3>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                46-38, Opposite Club Climax, Melina Mall Shop M17, 46 Mobutu Road, Kampala
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Business hours</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex justify-between"><span>Monday – Friday</span><span>9:00 AM – 8:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>9:00 AM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>10:00 AM – 6:00 PM</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-semibold">Direct contact</h3>
              <ul className="mt-3 space-y-3 text-sm">
                <li><a href="mailto:veecreations71@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary"><Mail className="h-4 w-4 text-primary" />veecreations71@gmail.com</a></li>
                <li><a href="https://wa.me/256759782094" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary"><MessageCircle className="h-4 w-4 text-primary" />WhatsApp 0759 782 094</a></li>
                <li><a href="https://wa.me/256702703838" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary"><Phone className="h-4 w-4 text-primary" />0702 703 838</a></li>
                <li><a href="https://www.facebook.com/veecreationz/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary"><Facebook className="h-4 w-4 text-primary" />Facebook</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary/40 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Vee Creations location"
              src="https://www.google.com/maps?q=Melina+Mall,+Mobutu+Road,+Kampala&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a href="https://maps.app.goo.gl/E7uEXWcYYTCjy4gt7" target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline">
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
