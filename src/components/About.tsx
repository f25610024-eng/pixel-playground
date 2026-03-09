import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Globe, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable solutions" },
    { icon: Zap, label: "Performance", desc: "Optimizing for speed and efficiency" },
    { icon: Globe, label: "Open Source", desc: "Contributing to the dev community" },
    { icon: Coffee, label: "Problem Solver", desc: "Tackling complex challenges daily" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-sm text-primary mb-2 block">// about me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            README<span className="text-primary">.md</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="github-card p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-github-orange" />
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">about.md</span>
              </div>
              <div className="space-y-4 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-primary"># </span>
                  <span className="text-foreground font-semibold">Hello World! 👋</span>
                </p>
                <p className="text-muted-foreground">
                  I'm a passionate full-stack developer with over 5 years of experience
                  building web applications that make a difference. I specialize in
                  React, TypeScript, and Node.js ecosystems.
                </p>
                <p className="text-muted-foreground">
                  When I'm not pushing commits, you'll find me exploring new technologies,
                  contributing to open-source projects, or mentoring aspiring developers.
                </p>
                <p className="text-muted-foreground">
                  I believe in writing code that is not just functional, but also
                  <span className="text-primary"> elegant</span>,
                  <span className="text-accent"> accessible</span>, and
                  <span className="text-github-orange"> maintainable</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="github-card p-5 group cursor-default"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
