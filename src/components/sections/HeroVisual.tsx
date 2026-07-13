import { motion } from "framer-motion";
import { Database, BrainCircuit, Code2, BarChart3, Sparkles, Smartphone } from "lucide-react";
import { profile } from "@/data/portfolio";

const orbitIcons = [
  { icon: Database, angle: 20, radius: 158, label: "SQL", glow: "#06B6D4" },
  { icon: BrainCircuit, angle: 130, radius: 158, label: "ML", glow: "#8B5CF6" },
  { icon: Code2, angle: 250, radius: 158, label: "Python", glow: "#2563EB" },
  { icon: BarChart3, angle: 320, radius: 224, label: "Analytics", glow: "#06B6D4" },
  { icon: Sparkles, angle: 70, radius: 224, label: "AI", glow: "#8B5CF6" },
  { icon: Smartphone, angle: 195, radius: 224, label: "Mobile", glow: "#2563EB" },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] items-center justify-center">
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl" />

      {/* orbit rings */}
      <div className="absolute h-[316px] w-[316px] sm:h-[316px] sm:w-[316px] rounded-full border border-primary/15 dark:border-secondary/20 animate-spin-slow" />
      <div className="absolute h-[448px] w-[448px] rounded-full border border-accent/15 dark:border-accent/20 animate-spin-slow-reverse" />

      {/* connecting lines (decorative data graph) */}
      <svg className="absolute h-full w-full" viewBox="-224 -224 448 448" aria-hidden="true">
        {orbitIcons.map((node, i) => {
          const p = polarToXY(node.angle, node.radius);
          return (
            <line
              key={i}
              x1={0}
              y1={0}
              x2={p.x}
              y2={p.y}
              stroke="currentColor"
              className="text-primary/15 dark:text-secondary/20"
              strokeWidth={1}
              strokeDasharray="4 5"
            />
          );
        })}
      </svg>

      {/* center: profile */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-36 w-36 sm:h-40 sm:w-40 overflow-hidden rounded-full ring-4 ring-white dark:ring-slate-800 shadow-2xl"
      >
        <img
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          className="h-full w-full object-cover"
          width={160}
          height={160}
        />
      </motion.div>

      {/* orbiting skill nodes */}
      {orbitIcons.map((node, i) => {
        const p = polarToXY(node.angle, node.radius);
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="absolute z-10 flex flex-col items-center gap-1"
            style={{ left: "50%", top: "50%" }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: p.x - 22,
              y: p.y - 22,
            }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl glass shadow-lg"
              style={{ boxShadow: `0 0 24px -6px ${node.glow}55` }}
            >
              <Icon size={19} style={{ color: node.glow }} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
