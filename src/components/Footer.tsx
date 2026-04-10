import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="glass py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="font-display text-lg font-bold text-foreground">
          Sulove<span className="text-coral">.</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sulove Shrestha. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["LinkedIn", "Twitter", "Instagram"].map((s) => (
            <motion.a
              key={s}
              href="#"
              whileHover={{ y: -2, scale: 1.05 }}
              className="text-sm text-muted-foreground hover:text-coral transition-colors"
            >
              {s}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
