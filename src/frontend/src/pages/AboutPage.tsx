import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  Handshake,
  MapPin as MapPinIcon,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Star,
    title: "Integrity",
    desc: "We operate with complete transparency and honesty in every business transaction. Our word is our bond.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "We never compromise on product quality. Every item we supply is sourced from certified, trusted manufacturers.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    desc: "Consistent supply, consistent pricing, consistent service. Businesses count on FM Industries because we deliver — always.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    desc: "We continuously expand our product portfolio and logistics capabilities to stay ahead of our clients' needs.",
  },
];

const differentiators = [
  {
    icon: Users,
    title: "25+ Years of Trusted Relationships",
    desc: "Built over decades, our network of manufacturers, distributors, and clients is our greatest asset.",
  },
  {
    icon: Building2,
    title: "End-to-End Supply Chain Control",
    desc: "From procurement to delivery, we manage the full supply chain to ensure quality at every step.",
  },
  {
    icon: MapPinIcon,
    title: "Pan-India Distribution",
    desc: "With logistics partners across the country, we ensure timely delivery to any location in India.",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* ── Hero Banner ─────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden bg-[oklch(0.115_0.03_253.1)]">
        <div className="absolute inset-0 industrial-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

        {/* Decorative vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[oklch(0.726_0.148_76.5/0.15)] to-transparent" />

        <div className="fm-container relative z-10 px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              Who We Are
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="fm-heading text-5xl sm:text-6xl md:text-7xl text-foreground leading-none"
            >
              About <span className="fm-gold">FM Industries</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mt-5 max-w-xl"
            >
              Two decades of supplying steel, flour, and industrial goods to
              businesses across India — built on trust, quality, and an
              unwavering commitment to our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────── */}
      <section className="fm-section">
        <div className="fm-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="section-label"
              >
                Our Story
              </motion.p>
              <motion.h2
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="fm-heading text-4xl sm:text-5xl text-foreground mb-6"
              >
                Built on <span className="fm-gold">Two Decades</span> of Trust
              </motion.h2>
              <motion.div
                variants={stagger}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <motion.p
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4 }}
                >
                  FM Industries was established in 2001 with a singular vision —
                  to be the most trusted supplier of industrial and commercial
                  products in the region. What began as a modest trading firm in
                  New Delhi has grown into a multi-product enterprise with a
                  reach spanning the length and breadth of India.
                </motion.p>
                <motion.p
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4 }}
                >
                  Over two decades, we have built lasting relationships with
                  manufacturers, traders, and businesses — from large
                  construction firms seeking structural steel to wholesale
                  distributors requiring consistent flour supply. Our growth is
                  a direct reflection of the confidence our clients place in us.
                </motion.p>
                <motion.p
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4 }}
                >
                  Today, FM Industries stands as a full-spectrum industrial and
                  commercial supply company, offering hundreds of products
                  across steel, grain, hardware, and everyday commercial goods —
                  all backed by our promise of quality, reliability, and fair
                  pricing.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Visual block */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-[oklch(0.165_0.035_253.1)] border border-border rounded-sm p-8">
                {/* Quote mark */}
                <div className="fm-heading text-8xl fm-gold opacity-20 leading-none mb-4 select-none">
                  "
                </div>
                <blockquote className="text-foreground text-lg font-body italic leading-relaxed mb-6">
                  Our mission is simple: supply the right product, at the right
                  price, at the right time. Everything we do is in service of
                  that promise.
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-black text-navy-dark text-xs">
                      FM
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-foreground font-600 tracking-wide text-sm">
                      Founder, FM Industries
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Est. 2001, New Delhi
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-sm p-4 shadow-navy-deep hidden lg:block">
                <span className="font-heading font-black text-3xl text-navy-dark block leading-none">
                  25+
                </span>
                <span className="font-body text-navy text-xs font-600 uppercase tracking-wide">
                  Years Active
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ──────────────────────────────── */}
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
              <p className="section-label justify-center">Our Foundation</p>
              <h2 className="fm-heading text-4xl sm:text-5xl text-foreground">
                Mission & <span className="fm-gold">Core Values</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5 }}
                    className="group bg-card border border-border rounded-sm p-6 hover:border-gold hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[oklch(0.22_0.025_253.1)] rounded-sm flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-gold group-hover:text-navy-dark transition-colors duration-300"
                      />
                    </div>
                    <h3 className="fm-heading text-xl text-foreground mb-2">
                      {val.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why We're Different ───────────────────────────── */}
      <section className="fm-section">
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
              className="mb-12"
            >
              <p className="section-label">The FM Advantage</p>
              <h2 className="fm-heading text-4xl sm:text-5xl text-foreground">
                Why We're <span className="fm-gold">Different</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {differentiators.map((diff) => {
                const Icon = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    variants={fadeUpVariants}
                    transition={{ duration: 0.5 }}
                    className="flex gap-5 p-6 bg-card border border-border rounded-sm"
                  >
                    <div className="w-12 h-12 bg-[oklch(0.22_0.025_253.1)] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="fm-heading text-lg text-foreground mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {diff.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
            >
              <Link to="/contact" className="fm-btn-primary">
                Work With Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
