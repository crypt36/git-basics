import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023 – Present",
    role: "Senior Digital Marketing Officer",
    company: "Sulove Shrestha — Freelance",
    desc: "Leading digital strategy, managing multi-channel campaigns, and driving 200%+ ROI across paid and organic channels.",
  },
  {
    year: "2021 – 2023",
    role: "Digital Marketing Specialist",
    company: "Marketing Agency",
    desc: "Managed SEO, social media, and content strategies that increased organic traffic by 150% and engagement by 300%.",
  },
  {
    year: "2019 – 2021",
    role: "Marketing Coordinator",
    company: "Digital Agency",
    desc: "Coordinated campaign execution across multiple clients, specializing in PPC and email marketing automation.",
  },
  {
    year: "2018 – 2019",
    role: "Marketing Intern",
    company: "Startup Studio",
    desc: "Supported social media management and content creation for early-stage startups.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-mesh-alt relative overflow-hidden">
      <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-accent/6 blur-2xl animate-float-reverse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-display">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            A track record of growing brands through digital excellence.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-border md:-translate-x-px origin-top"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 80 }}
              className={`relative flex flex-col md:flex-row items-start gap-4 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"} pl-10 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="glass-card rounded-2xl p-5 hover:glow-coral-sm transition-shadow duration-300"
                >
                  <span className="inline-block bg-coral/15 text-coral text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground font-display">{item.role}</h3>
                  <p className="text-sm text-coral font-medium">{item.company}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-coral rounded-full -translate-x-1/2 border-2 border-background shadow-sm glow-coral-sm"
              />

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
