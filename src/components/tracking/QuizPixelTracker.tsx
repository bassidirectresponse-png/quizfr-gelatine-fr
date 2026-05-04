import { useEffect, useRef } from "react";
import { useQuiz } from "@/contexts/QuizContext";
import { initMetaPixel, trackCustomEvent, trackStandardEvent } from "@/lib/metaPixel";

const SALES_STEP_NUMBER = 33;

function getStepLabel(stepNumber: number) {
  if (stepNumber === 1) return "landing";
  if (stepNumber === SALES_STEP_NUMBER) return "sales_page";
  return `step_${stepNumber}`;
}

export function QuizPixelTracker() {
  const { state } = useQuiz();
  const trackedStartRef = useRef(false);
  const lastTrackedStepRef = useRef<number | null>(null);

  useEffect(() => {
    initMetaPixel();
  }, []);

  useEffect(() => {
    if (lastTrackedStepRef.current === state.currentStep) return;

    lastTrackedStepRef.current = state.currentStep;

    if (!trackedStartRef.current) {
      trackCustomEvent("QuizStarted", {
        step_number: state.currentStep,
        step_name: getStepLabel(state.currentStep),
      });
      trackedStartRef.current = true;
    }

    trackCustomEvent("QuizStepView", {
      step_number: state.currentStep,
      step_name: getStepLabel(state.currentStep),
    });

    if (state.currentStep === SALES_STEP_NUMBER) {
      trackStandardEvent("ViewContent", {
        content_name: "Gélatine Mounjaro",
        content_category: "Sales Page",
        currency: "EUR",
        value: 8,
      });
    }
  }, [state.currentStep]);

  return null;
}