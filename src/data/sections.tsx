import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { Hoverable } from "@/components/annotations";
import { HumanBodyDiagram } from "./sections/HumanBodyDiagram";
import { AnatomicalTerms } from "./sections/AnatomicalTerms";
import { HeadNeckInteractive } from "./sections/HeadNeckDiagram";

/**
 * Human Body Anatomy Lesson
 * Target Audience: University Medical Students
 * Learning Objective: Identify and name external body parts
 */

export const sections: ReactElement[] = [
  // Section 1: Introduction
  <FullWidthLayout key="intro" maxWidth="xl">
    <Section id="intro-header" padding="lg">
      <div className="text-center mb-8">
        <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "hsl(200 85% 45%)" }}>
          Medical Anatomy
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          External Human Body Anatomy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive guide to identifying and naming the external anatomical regions of the human body.
        </p>
      </div>
    </Section>
  </FullWidthLayout>,

  <FullWidthLayout key="intro-text" maxWidth="lg">
    <Section id="intro-importance" padding="md">
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/90 leading-relaxed">
          Understanding external anatomy is fundamental to clinical practice. Surface anatomy allows clinicians to{" "}
          <Hoverable tooltip="The act of examining a patient by touch to identify anatomical structures and detect abnormalities.">
            palpate
          </Hoverable>{" "}
          underlying structures, perform accurate{" "}
          <Hoverable tooltip="The physical examination of a patient to assess their overall health and identify signs of disease.">
            physical examinations
          </Hoverable>
          , and identify landmarks for medical procedures. The human body is divided into distinct regions, each with specific anatomical terminology derived from{" "}
          <Hoverable tooltip="Latin and Greek terms form the foundation of anatomical nomenclature, providing a universal language for medical professionals worldwide.">
            classical languages
          </Hoverable>
          .
        </p>
      </div>
    </Section>
  </FullWidthLayout>,

  <FullWidthLayout key="body-diagram" maxWidth="xl">
    <Section id="interactive-body" padding="lg">
      <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
        <h2 className="text-2xl font-semibold mb-2 text-center">Interactive Body Map</h2>
        <p className="text-muted-foreground text-center mb-6">
          Explore the major anatomical regions and their proper terminology
        </p>
        <HumanBodyDiagram />
      </div>
    </Section>
  </FullWidthLayout>,

  <FullWidthLayout key="terminology" maxWidth="lg">
    <Section id="anatomical-terminology" padding="lg">
      <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
        <h2 className="text-2xl font-semibold mb-2">Anatomical Directional Terms</h2>
        <p className="text-muted-foreground mb-6">
          These paired terms describe the relative positions of body structures. Mastering them is essential for precise anatomical communication.
        </p>
        <AnatomicalTerms />
      </div>
    </Section>
  </FullWidthLayout>,

  // Section 2: Head and Neck
  <FullWidthLayout key="head-neck-header" maxWidth="xl">
    <Section id="head-neck-title" padding="lg">
      <div className="border-t border-border/30 pt-8">
        <p className="text-sm font-medium tracking-wider uppercase mb-3" style={{ color: "hsl(175 70% 40%)" }}>
          Section 2
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Head and Neck
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          The head (<Hoverable tooltip="Latin term for head, encompassing the entire cranial region.">caput</Hoverable>) and neck (<Hoverable tooltip="Latin term for neck, the cervical region connecting the head to the trunk.">collum</Hoverable>) contain numerous anatomical regions essential for clinical examination and diagnosis.
        </p>
      </div>
    </Section>
  </FullWidthLayout>,

  <FullWidthLayout key="head-neck-diagram" maxWidth="xl">
    <Section id="head-neck-interactive" padding="lg">
      <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
        <h3 className="text-xl font-semibold mb-2 text-center">Interactive Head & Neck Regions</h3>
        <p className="text-muted-foreground text-center mb-6">
          Click on the markers to explore each anatomical region with clinical notes
        </p>
        <HeadNeckInteractive />
      </div>
    </Section>
  </FullWidthLayout>,

  <FullWidthLayout key="head-neck-summary" maxWidth="lg">
    <Section id="head-neck-key-points" padding="md">
      <div className="prose prose-lg max-w-none">
        <p className="text-foreground/90 leading-relaxed">
          The head is divided into the{" "}
          <Hoverable tooltip="The skull portion containing and protecting the brain.">cranium</Hoverable>{" "}
          and the{" "}
          <Hoverable tooltip="The facial skeleton, including the bones of the orbits, nose, and jaw.">viscerocranium (face)</Hoverable>
          . Key surface landmarks include the{" "}
          <Hoverable tooltip="The bony arch on the lateral aspect of the skull, formed by the temporal and zygomatic bones.">zygomatic arch</Hoverable>
          , the{" "}
          <Hoverable tooltip="The bony prominence at the back of the skull, also known as the inion.">external occipital protuberance</Hoverable>
          , and the{" "}
          <Hoverable tooltip="The point where the frontal, parietal, temporal, and sphenoid bones meet - the thinnest part of the skull.">pterion</Hoverable>
          . The neck is clinically divided into anterior and posterior triangles by the{" "}
          <Hoverable tooltip="A major neck muscle that allows head rotation and flexion, running from the mastoid process to the sternum and clavicle.">sternocleidomastoid muscle</Hoverable>
          .
        </p>
      </div>
    </Section>
  </FullWidthLayout>,
];
