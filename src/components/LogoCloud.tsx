import { motion } from "framer-motion"
import { Sparkles, Zap, Globe, Hexagon, Diamond, Star, Circle, Square } from "lucide-react"

const companies = [
  { name: "TechFlow", icon: Zap },
  { name: "Quantum", icon: Hexagon },
  { name: "Alpine", icon: Diamond },
  { name: "Stellar", icon: Star },
  { name: "Nova", icon: Sparkles },
  { name: "Nimbus", icon: Globe },
  { name: "Prism", icon: Circle },
  { name: "Vertex", icon: Square },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Сохраняя память о каждом.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            От первых участников до последних встреч.
          </motion.p>
        </div>
      </div>
    </div>
  )
}