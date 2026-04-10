import { motion } from "framer-motion";
import contactClipart from "@/assets/contact-clipart.png";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-coral/8 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-accent/8 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            Let's <span className="text-gradient">Talk</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to elevate your digital presence? Let's discuss how I can help grow your brand with strategic marketing.
          </p>

          <div className="mt-8 space-y-5">
            {[
              { icon: "✉️", label: "Email", value: "sulove.shrest07@gmail.com" },
              { icon: "📍", label: "Location", value: "Nepal" },
              { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/suloveshrestha" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 cursor-default"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="animate-float">
            <img
              src={contactClipart}
              alt="Contact and communication illustration"
              loading="lazy"
              width={800}
              height={800}
              className="w-full max-w-xs"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="glass-card rounded-2xl p-6 w-full hover:glow-coral-sm transition-shadow duration-500"
          >
            <h3 className="font-display font-bold text-foreground mb-4">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl glass-input text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-coral transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl glass-input text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-coral transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl glass-input text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-coral resize-none transition-all duration-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coral-gradient text-coral-foreground py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity glow-coral"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
