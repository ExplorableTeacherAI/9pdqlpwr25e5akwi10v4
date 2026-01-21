import { useState } from "react";
import { motion } from "framer-motion";

interface TermPair {
  term1: string;
  meaning1: string;
  term2: string;
  meaning2: string;
  color: string;
}

const termPairs: TermPair[] = [
  {
    term1: "Anterior (Ventral)",
    meaning1: "Front of the body",
    term2: "Posterior (Dorsal)",
    meaning2: "Back of the body",
    color: "hsl(200 85% 45%)"
  },
  {
    term1: "Superior (Cranial)",
    meaning1: "Toward the head / Upper",
    term2: "Inferior (Caudal)",
    meaning2: "Away from head / Lower",
    color: "hsl(175 70% 40%)"
  },
  {
    term1: "Medial",
    meaning1: "Toward the midline",
    term2: "Lateral",
    meaning2: "Away from the midline",
    color: "hsl(145 65% 40%)"
  },
  {
    term1: "Proximal",
    meaning1: "Closer to trunk/origin",
    term2: "Distal",
    meaning2: "Farther from trunk/origin",
    color: "hsl(265 60% 55%)"
  },
  {
    term1: "Superficial",
    meaning1: "Toward the surface",
    term2: "Deep",
    meaning2: "Away from the surface",
    color: "hsl(0 70% 55%)"
  }
];

export const AnatomicalTerms = () => {
  const [activePair, setActivePair] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground mb-6">
        Click on each pair of terms to understand their relationship:
      </p>

      <div className="grid gap-3">
        {termPairs.map((pair, index) => (
          <motion.div
            key={index}
            className="rounded-lg border overflow-hidden cursor-pointer"
            style={{
              borderColor: activePair === index ? pair.color : "hsl(200 30% 85%)",
              backgroundColor: activePair === index ? `${pair.color}08` : "transparent"
            }}
            onClick={() => setActivePair(activePair === index ? null : index)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Terms header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: pair.color }}
                />
                <span className="font-medium">{pair.term1}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium">{pair.term2}</span>
                <div
                  className="w-3 h-3 rounded-full opacity-50"
                  style={{ backgroundColor: pair.color }}
                />
              </div>
            </div>

            {/* Expanded content */}
            <motion.div
              initial={false}
              animate={{
                height: activePair === index ? "auto" : 0,
                opacity: activePair === index ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 flex justify-between text-sm">
                <div className="flex-1 pr-4">
                  <p style={{ color: pair.color }} className="font-medium">{pair.meaning1}</p>
                </div>
                <div className="flex-1 pl-4 text-right">
                  <p style={{ color: pair.color }} className="font-medium opacity-70">{pair.meaning2}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnatomicalTerms;
