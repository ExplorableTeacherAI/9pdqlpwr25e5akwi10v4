import { useState } from "react";
import { motion } from "framer-motion";

interface HeadRegion {
  id: string;
  name: string;
  latinName: string;
  description: string;
  clinicalNote?: string;
  cx: number;
  cy: number;
  color: string;
}

const headRegions: HeadRegion[] = [
  {
    id: "frontal",
    name: "Frontal Region",
    latinName: "Regio frontalis",
    description: "The forehead area, overlying the frontal bone. Contains the frontal belly of occipitofrontalis muscle.",
    clinicalNote: "Used to assess facial nerve (CN VII) function by asking patient to raise eyebrows.",
    cx: 150,
    cy: 45,
    color: "hsl(200 85% 45%)"
  },
  {
    id: "orbital",
    name: "Orbital Region",
    latinName: "Regio orbitalis",
    description: "The eye socket area containing the eyeball and associated structures.",
    clinicalNote: "Examine for ptosis, pupil size, and extraocular movements.",
    cx: 120,
    cy: 85,
    color: "hsl(175 70% 40%)"
  },
  {
    id: "nasal",
    name: "Nasal Region",
    latinName: "Regio nasalis",
    description: "The nose, including the nasal bridge, dorsum, apex, and nares (nostrils).",
    clinicalNote: "Assess for deviated septum and nasal patency.",
    cx: 150,
    cy: 115,
    color: "hsl(145 65% 40%)"
  },
  {
    id: "oral",
    name: "Oral Region",
    latinName: "Regio oralis",
    description: "The mouth area including lips (labium superius and inferius) and surrounding structures.",
    clinicalNote: "Check for symmetry when smiling to assess facial nerve function.",
    cx: 150,
    cy: 155,
    color: "hsl(0 70% 55%)"
  },
  {
    id: "mental",
    name: "Mental Region",
    latinName: "Regio mentalis",
    description: "The chin area, overlying the mental protuberance of the mandible.",
    clinicalNote: "Mental foramen lies below the second premolar - important for dental anesthesia.",
    cx: 150,
    cy: 190,
    color: "hsl(25 90% 55%)"
  },
  {
    id: "zygomatic",
    name: "Zygomatic Region",
    latinName: "Regio zygomatica",
    description: "The cheekbone area, overlying the zygomatic bone and arch.",
    clinicalNote: "Palpate for fractures following facial trauma.",
    cx: 95,
    cy: 110,
    color: "hsl(265 60% 55%)"
  },
  {
    id: "buccal",
    name: "Buccal Region",
    latinName: "Regio buccalis",
    description: "The cheek area, containing the buccinator muscle and buccal fat pad.",
    clinicalNote: "Contains parotid duct opening opposite upper second molar.",
    cx: 85,
    cy: 145,
    color: "hsl(200 85% 45%)"
  },
  {
    id: "temporal",
    name: "Temporal Region",
    latinName: "Regio temporalis",
    description: "The temple area, overlying the temporal bone and temporalis muscle.",
    clinicalNote: "Superficial temporal artery palpable here - used for temporal artery biopsy.",
    cx: 75,
    cy: 70,
    color: "hsl(175 70% 40%)"
  },
  {
    id: "auricular",
    name: "Auricular Region",
    latinName: "Regio auricularis",
    description: "The external ear (auricle/pinna) including helix, antihelix, tragus, and lobule.",
    clinicalNote: "Examine for signs of infection, trauma, or developmental abnormalities.",
    cx: 55,
    cy: 105,
    color: "hsl(145 65% 40%)"
  },
  {
    id: "parotid",
    name: "Parotid Region",
    latinName: "Regio parotideomasseterica",
    description: "Area containing the parotid gland and masseter muscle, anterior to the ear.",
    clinicalNote: "Swelling here may indicate mumps or parotid gland pathology.",
    cx: 60,
    cy: 140,
    color: "hsl(0 70% 55%)"
  },
  {
    id: "occipital",
    name: "Occipital Region",
    latinName: "Regio occipitalis",
    description: "The back of the head, overlying the occipital bone.",
    clinicalNote: "External occipital protuberance (inion) is a key landmark.",
    cx: 220,
    cy: 80,
    color: "hsl(25 90% 55%)"
  },
  {
    id: "anterior-neck",
    name: "Anterior Cervical Region",
    latinName: "Regio cervicalis anterior",
    description: "Front of the neck, containing the anterior triangle with carotid vessels, thyroid, and larynx.",
    clinicalNote: "Carotid pulse palpable at anterior border of sternocleidomastoid.",
    cx: 150,
    cy: 250,
    color: "hsl(265 60% 55%)"
  },
  {
    id: "sternocleidomastoid",
    name: "Sternocleidomastoid Region",
    latinName: "Regio sternocleidomastoidea",
    description: "Overlies the sternocleidomastoid muscle, a key landmark dividing anterior and posterior triangles.",
    clinicalNote: "Assess by having patient turn head against resistance.",
    cx: 100,
    cy: 240,
    color: "hsl(200 85% 45%)"
  },
  {
    id: "posterior-neck",
    name: "Posterior Cervical Region",
    latinName: "Regio cervicalis posterior",
    description: "Back of the neck, containing the posterior triangle and cervical vertebrae.",
    clinicalNote: "C7 spinous process (vertebra prominens) is palpable at base of neck.",
    cx: 220,
    cy: 200,
    color: "hsl(175 70% 40%)"
  }
];

export const HeadNeckDiagram = () => {
  const [selectedRegion, setSelectedRegion] = useState<HeadRegion | null>(null);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 280 300"
        className="w-full h-auto max-w-sm mx-auto"
        style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
      >
        {/* Head outline - front view */}
        <ellipse
          cx="150"
          cy="100"
          rx="70"
          ry="85"
          fill="hsl(200 20% 92%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1.5"
        />

        {/* Neck */}
        <path
          d="M 110 175 Q 100 200 95 250 L 95 285 L 205 285 L 205 250 Q 200 200 190 175"
          fill="hsl(200 20% 92%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1.5"
        />

        {/* Ear left hint */}
        <ellipse
          cx="75"
          cy="105"
          rx="12"
          ry="25"
          fill="hsl(200 20% 88%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1"
        />

        {/* Simple facial features for orientation */}
        {/* Eyes */}
        <ellipse cx="125" cy="90" rx="12" ry="7" fill="hsl(200 30% 80%)" />
        <ellipse cx="175" cy="90" rx="12" ry="7" fill="hsl(200 30% 80%)" />
        <circle cx="125" cy="90" r="4" fill="hsl(200 40% 30%)" />
        <circle cx="175" cy="90" r="4" fill="hsl(200 40% 30%)" />

        {/* Nose */}
        <path
          d="M 150 95 L 145 125 Q 140 130 145 132 L 150 130 L 155 132 Q 160 130 155 125 Z"
          fill="hsl(200 20% 85%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1"
        />

        {/* Mouth */}
        <path
          d="M 130 155 Q 150 165 170 155"
          fill="none"
          stroke="hsl(0 50% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Eyebrows */}
        <path d="M 110 75 Q 125 70 140 75" fill="none" stroke="hsl(200 30% 50%)" strokeWidth="2" />
        <path d="M 160 75 Q 175 70 190 75" fill="none" stroke="hsl(200 30% 50%)" strokeWidth="2" />

        {/* Interactive points */}
        {headRegions.map((region) => (
          <g key={region.id}>
            <motion.circle
              cx={region.cx}
              cy={region.cy}
              r={selectedRegion?.id === region.id ? 10 : 7}
              fill={selectedRegion?.id === region.id ? region.color : "white"}
              stroke={region.color}
              strokeWidth={2}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
              whileHover={{ scale: 1.3 }}
              animate={{
                r: selectedRegion?.id === region.id ? 10 : 7,
              }}
              transition={{ duration: 0.2 }}
            />
            {selectedRegion?.id === region.id && (
              <motion.circle
                cx={region.cx}
                cy={region.cy}
                r={16}
                fill="none"
                stroke={region.color}
                strokeWidth={2}
                strokeOpacity={0.4}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0.4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </g>
        ))}
      </svg>

      <p className="text-center text-sm text-muted-foreground mt-4">
        Click on the markers to explore each region
      </p>
    </div>
  );
};

export const HeadNeckInfo = ({ selectedRegion }: { selectedRegion: HeadRegion | null }) => {
  if (!selectedRegion) {
    return (
      <div className="h-full flex items-center justify-center p-6 rounded-xl border border-dashed border-border">
        <p className="text-muted-foreground text-center">
          Select a marker on the diagram to view detailed anatomical information
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={selectedRegion.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-xl border"
      style={{
        borderColor: selectedRegion.color,
        backgroundColor: `${selectedRegion.color}08`
      }}
    >
      <div
        className="w-3 h-3 rounded-full mb-3"
        style={{ backgroundColor: selectedRegion.color }}
      />
      <h3 className="text-xl font-semibold mb-1" style={{ color: selectedRegion.color }}>
        {selectedRegion.name}
      </h3>
      <p className="text-sm text-muted-foreground italic mb-3">
        {selectedRegion.latinName}
      </p>
      <p className="text-foreground/85 leading-relaxed mb-4">
        {selectedRegion.description}
      </p>
      {selectedRegion.clinicalNote && (
        <div className="p-3 rounded-lg bg-background/50 border border-border/50">
          <p className="text-sm font-medium mb-1" style={{ color: selectedRegion.color }}>
            Clinical Note:
          </p>
          <p className="text-sm text-foreground/75">
            {selectedRegion.clinicalNote}
          </p>
        </div>
      )}
    </motion.div>
  );
};

// Combined component for external use
export const HeadNeckSection = () => {
  const [selectedRegion, setSelectedRegion] = useState<HeadRegion | null>(null);

  return {
    diagram: <HeadNeckDiagramWithState selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />,
    info: <HeadNeckInfoPanel selectedRegion={selectedRegion} />
  };
};

// Internal components with shared state
const HeadNeckDiagramWithState = ({
  selectedRegion,
  setSelectedRegion
}: {
  selectedRegion: HeadRegion | null;
  setSelectedRegion: (region: HeadRegion | null) => void;
}) => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 280 300"
        className="w-full h-auto max-w-xs mx-auto"
        style={{ filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.1))" }}
      >
        {/* Head outline - front view */}
        <ellipse
          cx="150"
          cy="100"
          rx="70"
          ry="85"
          fill="hsl(200 20% 92%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1.5"
        />

        {/* Neck */}
        <path
          d="M 110 175 Q 100 200 95 250 L 95 285 L 205 285 L 205 250 Q 200 200 190 175"
          fill="hsl(200 20% 92%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1.5"
        />

        {/* Ear left hint */}
        <ellipse
          cx="75"
          cy="105"
          rx="12"
          ry="25"
          fill="hsl(200 20% 88%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1"
        />

        {/* Simple facial features for orientation */}
        <ellipse cx="125" cy="90" rx="12" ry="7" fill="hsl(200 30% 80%)" />
        <ellipse cx="175" cy="90" rx="12" ry="7" fill="hsl(200 30% 80%)" />
        <circle cx="125" cy="90" r="4" fill="hsl(200 40% 30%)" />
        <circle cx="175" cy="90" r="4" fill="hsl(200 40% 30%)" />

        <path
          d="M 150 95 L 145 125 Q 140 130 145 132 L 150 130 L 155 132 Q 160 130 155 125 Z"
          fill="hsl(200 20% 85%)"
          stroke="hsl(200 30% 70%)"
          strokeWidth="1"
        />

        <path
          d="M 130 155 Q 150 165 170 155"
          fill="none"
          stroke="hsl(0 50% 65%)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path d="M 110 75 Q 125 70 140 75" fill="none" stroke="hsl(200 30% 50%)" strokeWidth="2" />
        <path d="M 160 75 Q 175 70 190 75" fill="none" stroke="hsl(200 30% 50%)" strokeWidth="2" />

        {/* Interactive points */}
        {headRegions.map((region) => (
          <g key={region.id}>
            <motion.circle
              cx={region.cx}
              cy={region.cy}
              r={selectedRegion?.id === region.id ? 10 : 7}
              fill={selectedRegion?.id === region.id ? region.color : "white"}
              stroke={region.color}
              strokeWidth={2}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            />
            {selectedRegion?.id === region.id && (
              <motion.circle
                cx={region.cx}
                cy={region.cy}
                r={16}
                fill="none"
                stroke={region.color}
                strokeWidth={2}
                strokeOpacity={0.4}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: [0.4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </g>
        ))}
      </svg>

      <p className="text-center text-sm text-muted-foreground mt-4">
        Click on the markers to explore each region
      </p>
    </div>
  );
};

const HeadNeckInfoPanel = ({ selectedRegion }: { selectedRegion: HeadRegion | null }) => {
  if (!selectedRegion) {
    return (
      <div className="h-full min-h-[200px] flex items-center justify-center p-6 rounded-xl border border-dashed border-border">
        <p className="text-muted-foreground text-center">
          Select a marker on the diagram to view detailed anatomical information
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={selectedRegion.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="p-5 rounded-xl border"
      style={{
        borderColor: selectedRegion.color,
        backgroundColor: `${selectedRegion.color}08`
      }}
    >
      <div
        className="w-3 h-3 rounded-full mb-3"
        style={{ backgroundColor: selectedRegion.color }}
      />
      <h3 className="text-xl font-semibold mb-1" style={{ color: selectedRegion.color }}>
        {selectedRegion.name}
      </h3>
      <p className="text-sm text-muted-foreground italic mb-3">
        {selectedRegion.latinName}
      </p>
      <p className="text-foreground/85 leading-relaxed mb-4">
        {selectedRegion.description}
      </p>
      {selectedRegion.clinicalNote && (
        <div className="p-3 rounded-lg bg-background/50 border border-border/50">
          <p className="text-sm font-medium mb-1" style={{ color: selectedRegion.color }}>
            Clinical Note:
          </p>
          <p className="text-sm text-foreground/75">
            {selectedRegion.clinicalNote}
          </p>
        </div>
      )}
    </motion.div>
  );
};

// Export a wrapper that provides shared state
export const HeadNeckInteractive = () => {
  const [selectedRegion, setSelectedRegion] = useState<HeadRegion | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <HeadNeckDiagramWithState
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <HeadNeckInfoPanel selectedRegion={selectedRegion} />
    </div>
  );
};

export default HeadNeckInteractive;
