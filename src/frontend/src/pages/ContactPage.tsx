import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const businessDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "FM Industries, Industrial Area, Sector 12, New Delhi — 110001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@fmindustries.in",
    href: "mailto:info@fmindustries.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 9:00 AM – 6:00 PM",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { actor } = useActor();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear status on edit
    if (success) setSuccess(null);
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;

    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const confirmationId = await actor.submitContactForm(
        form.name,
        form.email,
        form.phone.trim() || null,
        form.subject,
        form.message,
      );
      setSuccess(confirmationId);
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        "We couldn't send your message right now. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid =
    form.name.trim() &&
    form.email.trim() &&
    form.subject.trim() &&
    form.message.trim();

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
              Get In Touch
            </motion.p>
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="fm-heading text-5xl sm:text-6xl md:text-7xl text-foreground leading-none"
            >
              Contact <span className="fm-gold">FM Industries</span>
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mt-5 max-w-xl"
            >
              Ready to place an order or discuss your requirements? Reach out to
              our team and we'll respond within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ───────────────────────────────── */}
      <section className="fm-section">
        <div className="fm-container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ── Contact Form ─── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="lg:col-span-3"
            >
              <motion.h2
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="fm-heading text-3xl text-foreground mb-6"
              >
                Send Us a Message
              </motion.h2>

              {/* Success state */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-5 bg-[oklch(0.22_0.06_145)] border border-[oklch(0.5_0.15_145)] rounded-sm flex items-start gap-3"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[oklch(0.7_0.18_145)] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="font-heading font-700 text-foreground tracking-wide mb-1">
                      Message Sent Successfully!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Thank you for reaching out. Your confirmation ID is{" "}
                      <code className="font-mono text-gold bg-[oklch(0.18_0.025_253.1)] px-1.5 py-0.5 rounded">
                        {success}
                      </code>
                      . Our team will be in touch soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error state */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-5 bg-[oklch(0.18_0.06_27)] border border-destructive/40 rounded-sm flex items-start gap-3"
                  data-ocid="contact.error_state"
                >
                  <AlertCircle
                    size={20}
                    className="text-destructive flex-shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-muted-foreground">{error}</p>
                </motion.div>
              )}

              <motion.form
                variants={stagger}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <Label
                      htmlFor="name"
                      className="font-heading text-xs tracking-[0.12em] uppercase text-foreground mb-1.5 block"
                    >
                      Full Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={submitting}
                      className="bg-card border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                      data-ocid="contact.name_input"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <Label
                      htmlFor="email"
                      className="font-heading text-xs tracking-[0.12em] uppercase text-foreground mb-1.5 block"
                    >
                      Email Address <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      disabled={submitting}
                      className="bg-card border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                      data-ocid="contact.email_input"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <Label
                      htmlFor="phone"
                      className="font-heading text-xs tracking-[0.12em] uppercase text-foreground mb-1.5 block"
                    >
                      Phone Number{" "}
                      <span className="text-muted-foreground font-body font-400 normal-case tracking-normal text-xs">
                        (Optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      disabled={submitting}
                      className="bg-card border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                      data-ocid="contact.phone_input"
                    />
                  </motion.div>

                  {/* Subject */}
                  <motion.div
                    variants={fadeUpVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <Label
                      htmlFor="subject"
                      className="font-heading text-xs tracking-[0.12em] uppercase text-foreground mb-1.5 block"
                    >
                      Subject <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Steel price enquiry"
                      required
                      disabled={submitting}
                      className="bg-card border-border focus:border-gold focus:ring-gold/20 rounded-sm"
                      data-ocid="contact.subject_input"
                    />
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4 }}
                >
                  <Label
                    htmlFor="message"
                    className="font-heading text-xs tracking-[0.12em] uppercase text-foreground mb-1.5 block"
                  >
                    Message <span className="text-gold">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements — product type, quantity, delivery location, or any other details..."
                    required
                    disabled={submitting}
                    rows={5}
                    className="bg-card border-border focus:border-gold focus:ring-gold/20 rounded-sm resize-none"
                    data-ocid="contact.message_textarea"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  variants={fadeUpVariants}
                  transition={{ duration: 0.4 }}
                >
                  <Button
                    type="submit"
                    disabled={submitting || !isFormValid || !actor}
                    className="fm-btn-primary border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>

            {/* ── Business Details ─── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="fm-heading text-3xl text-foreground mb-6"
              >
                Business Details
              </motion.h2>

              <motion.div variants={stagger} className="space-y-4 mb-8">
                {businessDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <motion.div
                      key={detail.label}
                      variants={fadeUpVariants}
                      transition={{ duration: 0.4 }}
                      className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm"
                    >
                      <div className="w-10 h-10 bg-[oklch(0.22_0.025_253.1)] rounded-sm flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-heading text-xs tracking-[0.15em] uppercase text-muted-foreground mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-foreground text-sm hover:text-gold transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-foreground text-sm">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Map placeholder / decorative area */}
              <motion.div
                variants={fadeUpVariants}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-sm border border-border"
              >
                <div
                  className="h-40 industrial-grid flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.165_0.035_253.1) 0%, oklch(0.12_0.04_253.1) 100%)",
                  }}
                >
                  <div className="text-center">
                    <MapPin size={28} className="text-gold mx-auto mb-2" />
                    <p className="font-heading text-sm tracking-wider uppercase text-foreground">
                      New Delhi, India
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Industrial Area, Sector 12
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
