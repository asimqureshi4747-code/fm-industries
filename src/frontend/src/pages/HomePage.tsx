import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Factory,
  Package,
  Shield,
  Truck,
  Wheat,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "500+", label: "Products Offered" },
  { value: "1,000+", label: "Clients Served" },
  { value: "Pan-India", label: "Delivery Reach" },
];

const productCards = [
  {
    icon: Factory,
    title: "Steel Products",
    desc: "TMT rods, mild steel bars, structural steel, sheets & plates — sourced from certified mills.",
    link: "/products",
    color: "from-[oklch(0.22_0.025_253.1)] to-[oklch(0.18_0.03_253.1)]",
  },
  {
    icon: Wheat,
    title: "Flour & Grain",
    desc: "Premium wheat flour, refined Maida, Suji, Besan — direct from quality-assured mills.",
    link: "/products",
    color: "from-[oklch(0.22_0.025_253.1)] to-[oklch(0.18_0.03_253.1)]",
  },
  {
    icon: Wrench,
    title: "Industrial Supplies",
    desc: "Nuts & bolts, pipes & fittings, hardware, safety gear — bulk orders welcome.",
    link: "/products",
    color: "from-[oklch(0.22_0.025_253.1)] to-[oklch(0.18_0.03_253.1)]",
  },
];

const trustPillars = [
  {
    icon: Shield,
    title: "Quality Assured",
    desc: "Every product meets rigorous quality standards. We partner only with certified suppliers and manufacturers.",
  },
  {
    icon: Package,
    title: "Bulk Supply",
    desc: "Equipped to handle large-volume orders for industries, traders, and distributors across India.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    desc: "Reliable logistics network ensures your orders reach you on schedule, every time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    desc: "Direct relationships with manufacturers let us offer the best market rates without compromise.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="hero.section"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-industrial.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0.032_253.1/0.85)] via-[oklch(0.09_0.032_253.1/0.75)] to-[oklch(0.09_0.032_253.1/0.95)]" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.95_0.008_90) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95_0.008_90) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="fm-container relative z-10 px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Pre-label */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gold opacity-70" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-gold opacity-90">
                Established 2001 · New Delhi, India
              </span>
              <div className="h-px w-12 bg-gold opacity-70" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.7 }}
              className="fm-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-4 leading-none tracking-tight"
            >
              FM{" "}
              <span className="relative">
                <span className="fm-gold">INDUSTRIES</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gold opacity-60 rounded-full" />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl tracking-[0.18em] text-gold uppercase mt-6 mb-3"
            >
              Strength. Quality. Reliability.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-steel-light text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              India's trusted supplier of steel, flour, and industrial products
              — delivering excellence to businesses across the nation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/products"
                className="fm-btn-primary"
                data-ocid="hero.primary_button"
              >
                Explore Our Products
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="fm-btn-outline">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-steel-light opacity-60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-px h-6 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────── */}
      <section className="bg-[oklch(0.115_0.03_253.1)] border-y border-border">
        <div className="fm-container px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
              >
                <span className="fm-heading text-4xl sm:text-5xl fm-gold mb-1">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm tracking-wide uppercase font-body">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Product Preview ───────────────────────────────────── */}
      <section className="fm-section industrial-grid">
        <div className="fm-container px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <p className="section-label">What We Offer</p>
              <h2 className="fm-heading text-4xl sm:text-5xl text-foreground mb-4">
                Our Core <span className="fm-gold">Product Lines</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
                From heavy steel to fine-milled flour, FM Industries supplies
                quality products at competitive rates — built for businesses
                that demand the best.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative bg-card border border-border rounded-sm overflow-hidden hover:shadow-card-hover hover:border-gold transition-all duration-300"
                    data-ocid={`home.product_card.${i + 1}`}
                  >
                    {/* Gold top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="p-8">
                      <div className="w-12 h-12 bg-[oklch(0.22_0.025_253.1)] rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                        <Icon
                          size={24}
                          className="text-gold group-hover:text-navy-dark transition-colors duration-300"
                        />
                      </div>
                      <h3 className="fm-heading text-2xl text-foreground mb-3">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {card.desc}
                      </p>
                      <Link
                        to={card.link}
                        className="inline-flex items-center gap-2 text-gold font-heading text-sm tracking-wider uppercase hover:gap-3 transition-all duration-200"
                      >
                        View Products
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="fm-section bg-[oklch(0.115_0.03_253.1)]">
        <div className="fm-container px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <p className="section-label justify-center">Our Promise</p>
              <h2 className="fm-heading text-4xl sm:text-5xl text-foreground">
                Why Businesses Choose{" "}
                <span className="fm-gold">FM Industries</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5 }}
                    className="text-center p-6"
                  >
                    <div className="w-14 h-14 mx-auto bg-[oklch(0.22_0.025_253.1)] border border-[oklch(0.3_0.025_253.1)] rounded-full flex items-center justify-center mb-4">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <h3 className="fm-heading text-xl text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-4">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.165_0.035_253.1) 0%, oklch(0.12_0.04_253.1) 100%)",
          }}
        />
        {/* Decorative element */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(0.726_0.148_76.5) 0, oklch(0.726_0.148_76.5) 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

        <div className="fm-container relative z-10 px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <CheckCircle2 size={18} className="text-gold" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase text-gold">
                Ready to Partner With Us?
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="fm-heading text-4xl sm:text-5xl text-foreground mb-4"
            >
              Ready to Do Business?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-base mb-8 leading-relaxed"
            >
              Contact our team today for bulk pricing, product enquiries, or to
              discuss your requirements. We're ready to deliver.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/contact"
                className="fm-btn-primary"
                data-ocid="home.cta.primary_button"
              >
                Contact Us Today
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
