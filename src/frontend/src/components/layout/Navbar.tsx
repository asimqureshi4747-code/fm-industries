import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change is the intended trigger
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[oklch(0.09_0.032_253.1)] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[oklch(0.09_0.032_253.1/0.92)] backdrop-blur-sm"
      }`}
    >
      <div className="fm-container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-gold flex items-center justify-center rounded-sm flex-shrink-0">
              <span
                className="font-heading font-black text-navy-dark text-sm tracking-tight"
                style={{ lineHeight: 1 }}
              >
                FM
              </span>
            </div>
            <div className="leading-none">
              <span className="fm-gold font-heading font-black text-lg tracking-widest">
                FM
              </span>
              <span className="text-foreground font-heading font-black text-lg tracking-widest">
                {" "}
                INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`fm-nav-link ${isActive(link.to) ? "active" : ""}`}
                data-ocid={`nav.link.${i + 1}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="fm-btn-primary text-sm py-2 px-5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground p-2 rounded-sm hover:text-gold transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            data-ocid="nav.hamburger_button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[oklch(0.09_0.032_253.1)] border-t border-border"
            data-ocid="nav.mobile_menu"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`py-3 border-b border-border last:border-0 font-heading font-600 text-base tracking-widest uppercase transition-colors ${
                    isActive(link.to)
                      ? "text-gold"
                      : "text-steel-light hover:text-gold"
                  }`}
                  data-ocid={`nav.link.${i + 1}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="fm-btn-primary text-sm w-full justify-center"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
