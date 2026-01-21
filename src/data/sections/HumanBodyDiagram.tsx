import { useState } from "react";
import { motion } from "framer-motion";

interface BodyRegion {
  id: string;
  name: string;
  description: string;
  path: string;
  color: string;
}

const bodyRegions: BodyRegion[] = [
  {
    id: "head",
    name: "Head (Caput)",
    description: "Contains the brain, sensory organs, and the beginning of the digestive and respiratory systems.",
    path: "M 150 30 Q 120 30 115 60 Q 110 90 120 110 Q 140 130 150 130 Q 160 130 180 110 Q 190 90 185 60 Q 180 30 150 30",
    color: "hsl(200 85% 45%)"
  },
  {
    id: "neck",
    name: "Neck (Collum)",
    description: "Connects the head to the trunk, contains the cervical vertebrae, trachea, and major blood vessels.",
    path: "M 135 130 L 135 160 L 165 160 L 165 130 Q 150 140 135 130",
    color: "hsl(175 70% 40%)"
  },
  {
    id: "thorax",
    name: "Thorax (Chest)",
    description: "Houses the heart, lungs, and major blood vessels. Protected by the ribcage.",
    path: "M 105 160 Q 100 180 100 220 Q 100 250 110 270 L 150 280 L 190 270 Q 200 250 200 220 Q 200 180 195 160 L 165 160 L 135 160 Z",
    color: "hsl(0 70% 55%)"
  },
  {
    id: "abdomen",
    name: "Abdomen",
    description: "Contains digestive organs, kidneys, and other vital structures.",
    path: "M 110 270 Q 105 300 110 340 L 130 360 L 150 365 L 170 360 L 190 340 Q 195 300 190 270 L 150 280 Z",
    color: "hsl(25 90% 55%)"
  },
  {
    id: "upper-arm-left",
    name: "Upper Arm (Brachium)",
    description: "Extends from shoulder to elbow, contains the humerus bone and biceps/triceps muscles.",
    path: "M 100 165 Q 85 170 75 200 Q 65 240 70 270 L 85 275 Q 90 245 95 215 Q 100 185 105 165 Z",
    color: "hsl(145 65% 40%)"
  },
  {
    id: "upper-arm-right",
    name: "Upper Arm (Brachium)",
    description: "Extends from shoulder to elbow, contains the humerus bone and biceps/triceps muscles.",
    path: "M 200 165 Q 215 170 225 200 Q 235 240 230 270 L 215 275 Q 210 245 205 215 Q 200 185 195 165 Z",
    color: "hsl(145 65% 40%)"
  },
  {
    id: "forearm-left",
    name: "Forearm (Antebrachium)",
    description: "Extends from elbow to wrist, contains the radius and ulna bones.",
    path: "M 70 275 Q 60 310 55 350 L 50 380 L 70 385 Q 75 350 80 315 L 85 280 Z",
    color: "hsl(175 70% 40%)"
  },
  {
    id: "forearm-right",
    name: "Forearm (Antebrachium)",
    description: "Extends from elbow to wrist, contains the radius and ulna bones.",
    path: "M 230 275 Q 240 310 245 350 L 250 380 L 230 385 Q 225 350 220 315 L 215 280 Z",
    color: "hsl(175 70% 40%)"
  },
  {
    id: "hand-left",
    name: "Hand (Manus)",
    description: "Contains 27 bones including carpals, metacarpals, and phalanges. Enables fine motor control.",
    path: "M 50 385 Q 40 400 35 420 Q 35 435 50 435 Q 55 420 60 410 L 70 390 Z",
    color: "hsl(265 60% 55%)"
  },
  {
    id: "hand-right",
    name: "Hand (Manus)",
    description: "Contains 27 bones including carpals, metacarpals, and phalanges. Enables fine motor control.",
    path: "M 250 385 Q 260 400 265 420 Q 265 435 250 435 Q 245 420 240 410 L 230 390 Z",
    color: "hsl(265 60% 55%)"
  },
  {
    id: "thigh-left",
    name: "Thigh (Femoral Region)",
    description: "Contains the femur, the longest bone in the body, and powerful quadriceps muscles.",
    path: "M 130 365 Q 120 400 115 450 Q 112 490 115 520 L 135 525 Q 138 490 140 450 Q 142 400 145 370 Z",
    color: "hsl(200 85% 45%)"
  },
  {
    id: "thigh-right",
    name: "Thigh (Femoral Region)",
    description: "Contains the femur, the longest bone in the body, and powerful quadriceps muscles.",
    path: "M 170 365 Q 180 400 185 450 Q 188 490 185 520 L 165 525 Q 162 490 160 450 Q 158 400 155 370 Z",
    color: "hsl(200 85% 45%)"
  },
  {
    id: "leg-left",
    name: "Leg (Crural Region)",
    description: "Extends from knee to ankle, contains the tibia and fibula bones.",
    path: "M 115 525 Q 112 570 115 620 Q 118 660 120 690 L 140 690 Q 138 660 136 620 Q 134 570 135 530 Z",
    color: "hsl(0 70% 55%)"
  },
  {
    id: "leg-right",
    name: "Leg (Crural Region)",
    description: "Extends from knee to ankle, contains the tibia and fibula bones.",
    path: "M 185 525 Q 188 570 185 620 Q 182 660 180 690 L 160 690 Q 162 660 164 620 Q 166 570 165 530 Z",
    color: "hsl(0 70% 55%)"
  },
  {
    id: "foot-left",
    name: "Foot (Pes)",
    description: "Contains 26 bones arranged in arches for weight-bearing and locomotion.",
    path: "M 120 695 Q 105 700 100 715 Q 100 730 120 730 L 145 725 L 145 695 Z",
    color: "hsl(25 90% 55%)"
  },
  {
    id: "foot-right",
    name: "Foot (Pes)",
    description: "Contains 26 bones arranged in arches for weight-bearing and locomotion.",
    path: "M 180 695 Q 195 700 200 715 Q 200 730 180 730 L 155 725 L 155 695 Z",
    color: "hsl(25 90% 55%)"
  }
];

export const HumanBodyDiagram = () => {
  const [hoveredRegion, setHoveredRegion] = useState<BodyRegion | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);

  const activeRegion = selectedRegion || hoveredRegion;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-4">
      {/* SVG Body Diagram */}
      <div className="relative">
        <svg
          viewBox="0 0 300 760"
          className="w-64 h-auto md:w-80"
          style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
        >
          {/* Body outline for context */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200 30% 95%)" />
              <stop offset="100%" stopColor="hsl(200 20% 90%)" />
            </linearGradient>
          </defs>

          {/* Render each body region */}
          {bodyRegions.map((region) => (
            <motion.path
              key={region.id}
              d={region.path}
              fill={activeRegion?.id === region.id ? region.color : "hsl(200 20% 88%)"}
              stroke={activeRegion?.id === region.id ? region.color : "hsl(200 30% 70%)"}
              strokeWidth={activeRegion?.id === region.id ? 2 : 1}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredRegion(region)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: activeRegion?.id === region.id ? 1 : 0.85,
                scale: activeRegion?.id === region.id ? 1.02 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </svg>

        {/* Instruction text */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Click or hover on a body region to learn more
        </p>
      </div>

      {/* Info Panel */}
      <motion.div
        className="w-full lg:w-72 min-h-[180px] rounded-xl p-6 border"
        style={{
          backgroundColor: activeRegion ? `${activeRegion.color}10` : "hsl(200 30% 97%)",
          borderColor: activeRegion ? activeRegion.color : "hsl(200 30% 85%)",
        }}
        animate={{
          borderColor: activeRegion ? activeRegion.color : "hsl(200 30% 85%)",
        }}
        transition={{ duration: 0.3 }}
      >
        {activeRegion ? (
          <motion.div
            key={activeRegion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-4 h-4 rounded-full mb-3"
              style={{ backgroundColor: activeRegion.color }}
            />
            <h3 className="text-xl font-semibold mb-2" style={{ color: activeRegion.color }}>
              {activeRegion.name}
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {activeRegion.description}
            </p>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p className="text-center">
              Select a body region to see its anatomical name and description
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HumanBodyDiagram;
