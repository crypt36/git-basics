import { motion } from "framer-motion";
import aboutClipart from "@/assets/about-clipart.png";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Campaigns Launched" },
  { value: "200%", label: "Avg. ROI Increase" },
  { value: "15+", label: "Brands Served" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-mesh-alt relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-coral/6 blur-2xl animate-float-reverse" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center"
        >
          <div className="glass-card rounded-3xl p-6 hover:glow-coral-sm transition-shadow duration-500">
            <div className="animate-float-slow">
              <img
                src={aboutClipart}
                alt="Creative digital marketing workspace"
                loading="lazy"
                width={800}
                height={800}
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I'm a passionate digital marketing professional with expertise in crafting comprehensive marketing strategies. From SEO and content marketing to paid advertising and social media management, I bring a holistic approach to digital growth.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My focus is on delivering data-driven results that make a real impact — growing audiences, increasing conversions, and building brand authority across all digital channels.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-2xl p-4 cursor-default hover:glow-coral-sm transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-coral font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
