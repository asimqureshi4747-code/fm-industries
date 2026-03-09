import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer className="bg-[oklch(0.09_0.032_253.1)] border-t border-border">
      <div className="fm-container px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm">
                <span className="font-heading font-black text-navy-dark text-sm tracking-tight">
                  FM
                </span>
              </div>
              <span className="font-heading font-black text-xl tracking-widest">
                <span className="fm-gold">FM</span>
                <span className="text-foreground"> INDUSTRIES</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              Your trusted partner for steel, flour, and industrial supplies.
              Strength. Quality. Reliability — since 2001.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-gold" />
              <span className="font-heading text-gold text-xs tracking-[0.2em] uppercase">
                Pan-India Delivery
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-700 text-sm tracking-[0.15em] uppercase text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors flex items-center gap-1 group"
                    data-ocid={`footer.link.${i + 1}`}
                  >
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-gold"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-700 text-sm tracking-[0.15em] uppercase text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  info@fmindustries.in
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Industrial Area, Sector 12,
                  <br />
                  New Delhi — 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs tracking-wide">
            © {year} FM Industries. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-gold transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
