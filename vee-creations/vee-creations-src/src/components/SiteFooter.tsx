import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Vee Creations logo" className="h-10 w-auto" />
            <span className="font-display text-xl font-semibold">Vee Creations</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Beautiful flowers, elegant décor, and thoughtful gift hampers — handcrafted in Kampala for every occasion.
          </p>
          <div className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>46-38, Opposite Club Climax, Melina Mall Shop M17, 46 Mobutu Road, Kampala</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
            <li><Link to="/reviews" className="text-muted-foreground hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><a href="mailto:veecreations71@gmail.com" className="hover:text-foreground">veecreations71@gmail.com</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="https://wa.me/256759782094" className="hover:text-foreground">0759 782 094</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><a href="https://wa.me/256702703838" className="hover:text-foreground">0702 703 838</a></li>
            <li className="flex items-center gap-2"><Facebook className="h-4 w-4 text-primary" /><a href="https://www.facebook.com/veecreationz/" target="_blank" rel="noreferrer" className="hover:text-foreground">facebook.com/veecreationz</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Vee Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
