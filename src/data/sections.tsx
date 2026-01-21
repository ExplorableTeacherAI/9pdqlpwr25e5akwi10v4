import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { Hoverable } from "@/components/annotations";
import { HumanBodyDiagram } from "./sections/HumanBodyDiagram";
import { AnatomicalTerms } from "./sections/AnatomicalTerms";

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
];
