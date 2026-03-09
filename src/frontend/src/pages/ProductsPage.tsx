import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

interface ProductCategory {
  id: number;
  title: string;
  subtitle: string;
  image?: string;
  products: string[];
  description: string;
}

const categories: ProductCategory[] = [
  {
    id: 1,
    title: "Steel Products",
    subtitle: "Structural & Construction Steel",
    image: "/assets/generated/product-steel.dim_800x600.jpg",
    description:
      "Premium quality steel products sourced from certified steel mills. Suitable for construction, infrastructure, and fabrication projects of all scales.",
    products: [
      "Mild Steel (MS) Bars",
      "TMT Steel Rods",
      "Steel Sheets & Plates",
      "Structural Steel (Angles, Channels, Beams)",
      "Stainless Steel Products",
    ],
  },
  {
    id: 2,
    title: "Flour & Grain",
    subtitle: "Premium Milling Products",
    image: "/assets/generated/product-flour.dim_800x600.jpg",
    description:
      "High-quality flour and grain products sourced from trusted mills. Consistent quality for food manufacturers, wholesalers, and FMCG distributors.",
    products: [
      "Wheat Flour (Chakki Atta)",
      "Refined Flour (Maida)",
      "Semolina (Suji / Rawa)",
      "Whole Wheat Atta",
      "Gram Flour (Besan)",
    ],
  },
  {
    id: 3,
    title: "Industrial Supplies",
    subtitle: "Hardware & Maintenance",
    image: "/assets/generated/product-industrial.dim_800x600.jpg",
    description:
      "A comprehensive range of industrial hardware and maintenance supplies for factories, workshops, and construction sites.",
    products: [
      "Nuts, Bolts & Fasteners",
      "Pipes & Pipe Fittings",
      "Industrial Hardware",
      "Safety Equipment & PPE",
      "Packaging Materials",
    ],
  },
  {
    id: 4,
    title: "Commercial Goods",
    subtitle: "Everyday Essentials",
    image: undefined,
    description:
      "Essential commercial goods for retailers, wholesalers, and B2B buyers. Reliable supply of daily-use products at competitive bulk rates.",
    products: [
      "Edible Oils (Refined & Cold Press)",
      "Sugar & Salt",
      "Pulses & Dried Grains",
      "Packaging Supplies",
      "Cleaning & Hygiene Products",
    ],
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ProductsPage() {
  return (
    <main className="pt-16">
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="relative py-28 px-4 overflow-hidden bg-[oklch(0.115_0.03_253.1)]">
        <div className="absolute inset-0 industrial-grid opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

        <div className="fm-container relative z-10 px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="section-label"
            >
              What We Supply
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="fm-heading text-5xl sm:text-6xl md:text-7xl text-foreground leading-none"
            >
              Our Products & <span className="fm-gold">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mt-5 max-w-xl"
            >
              Four core product categories, hundreds of SKUs — all available in
              bulk quantities with nationwide delivery. Click "Enquire Now" to
              request pricing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Product Categories ────────────────────────────── */}
      <section className="fm-section">
        <div className="fm-container px-4 sm:px-6">
          <div className="space-y-10">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold hover:shadow-card-hover transition-all duration-300"
                data-ocid={`products.category_card.${cat.id}`}
              >
                <div
                  className={`grid grid-cols-1 ${
                    cat.image ? "lg:grid-cols-2" : ""
                  }`}
                >
                  {/* Image column */}
                  {cat.image && (
                    <motion.div
                      variants={fadeUpVariants}
                      transition={{ duration: 0.6 }}
                      className={`relative overflow-hidden ${
                        index % 2 === 1 ? "lg:order-last" : ""
                      }`}
                    >
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[oklch(0.165_0.035_253.1/0.6)] to-transparent" />
                    </motion.div>
                  )}

                  {/* Content column */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <motion.div
                      variants={fadeUpVariants}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <span className="text-gold font-heading text-xs tracking-[0.2em] uppercase">
                            {cat.subtitle}
                          </span>
                          <h2 className="fm-heading text-3xl sm:text-4xl text-foreground mt-1">
                            {cat.title}
                          </h2>
                        </div>
                        {!cat.image && (
                          <div className="w-14 h-14 bg-[oklch(0.22_0.025_253.1)] rounded-sm flex items-center justify-center flex-shrink-0">
                            <ShoppingBag size={26} className="text-gold" />
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {cat.description}
                      </p>
                    </motion.div>

                    {/* Product list */}
                    <motion.ul variants={stagger} className="space-y-2 mb-8">
                      {cat.products.map((product) => (
                        <motion.li
                          key={product}
                          variants={fadeUpVariants}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-3 text-sm text-foreground"
                        >
                          <div className="w-5 h-5 rounded-full bg-[oklch(0.22_0.025_253.1)] flex items-center justify-center flex-shrink-0">
                            <Check
                              size={11}
                              className="text-gold"
                              strokeWidth={2.5}
                            />
                          </div>
                          {product}
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      variants={fadeUpVariants}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        to="/contact"
                        className="fm-btn-primary inline-flex"
                        data-ocid={`products.enquire_button.${cat.id}`}
                      >
                        Enquire Now
                        <ArrowRight size={16} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[oklch(0.115_0.03_253.1)] border-t border-border">
        <div className="fm-container px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="fm-heading text-3xl sm:text-4xl text-foreground mb-3"
            >
              Don't See What You Need?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground mb-6 max-w-md mx-auto"
            >
              We source a wide range of industrial and commercial products. Get
              in touch and we'll find the right solution for you.
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.4 }}
            >
              <Link to="/contact" className="fm-btn-outline">
                Talk to Our Team
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
