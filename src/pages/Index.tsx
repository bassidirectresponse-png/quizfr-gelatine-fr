import { QuizProvider, useQuiz } from "@/contexts/QuizContext";
import { Suspense } from "react";
import { QuizPixelTracker } from "@/components/tracking/QuizPixelTracker";

import Step1Landing from "@/components/quiz/steps/Step1Landing";
import Step2Transition from "@/components/quiz/steps/Step2Transition";
import Step3Age from "@/components/quiz/steps/Step3Age";
import Step4Body from "@/components/quiz/steps/Step4Body";
import Step5Zones from "@/components/quiz/steps/Step5Zones";
import Step6SocialProof from "@/components/quiz/steps/Step6SocialProof";
import Step7Name from "@/components/quiz/steps/Step7Name";
import Step8Objective from "@/components/quiz/steps/Step8Objective";
import Step9Emotional from "@/components/quiz/steps/Step9Emotional";
import Step10Satisfaction from "@/components/quiz/steps/Step10Satisfaction";
import Step11Barriers from "@/components/quiz/steps/Step11Barriers";
import Step12Aspirations from "@/components/quiz/steps/Step12Aspirations";
import Step13Mechanism from "@/components/quiz/steps/Step13Mechanism";
import Step14Weight from "@/components/quiz/steps/Step14Weight";
import Step15Height from "@/components/quiz/steps/Step15Height";
import Step16TargetWeight from "@/components/quiz/steps/Step16TargetWeight";
import Step17Confirmation from "@/components/quiz/steps/Step17Confirmation";
import Step18Pregnancies from "@/components/quiz/steps/Step18Pregnancies";
import Step19Routine from "@/components/quiz/steps/Step19Routine";
import Step20Sleep from "@/components/quiz/steps/Step20Sleep";
import Step21Water from "@/components/quiz/steps/Step21Water";
import Step22DreamBody from "@/components/quiz/steps/Step22DreamBody";
import Step23BMI from "@/components/quiz/steps/Step23BMI";
import Step24Instructions from "@/components/quiz/steps/Step24Instructions";
import Step25VSL1 from "@/components/quiz/steps/Step25VSL1";
import Step26Engagement from "@/components/quiz/steps/Step26Engagement";
import Step27Loading1 from "@/components/quiz/steps/Step27Loading1";
import Step28Validation from "@/components/quiz/steps/Step28Validation";
import Step29Proofs from "@/components/quiz/steps/Step29Proofs";
import Step30Loading2 from "@/components/quiz/steps/Step30Loading2";
import Step30bVSL2 from "@/components/quiz/steps/Step30bVSL2";
import Step31Loading3 from "@/components/quiz/steps/Step31Loading3";
import Step32Sales from "@/components/quiz/steps/Step32Sales";

const steps = [
  Step1Landing,
  Step2Transition,
  Step3Age,
  Step4Body,
  Step5Zones,
  Step6SocialProof,
  Step7Name,
  Step8Objective,
  Step9Emotional,
  Step10Satisfaction,
  Step11Barriers,
  Step12Aspirations,
  Step13Mechanism,
  Step14Weight,
  Step15Height,
  Step16TargetWeight,
  Step17Confirmation,
  Step18Pregnancies,
  Step19Routine,
  Step20Sleep,
  Step21Water,
  Step22DreamBody,
  Step23BMI,
  Step24Instructions,
  Step27Loading1,
  Step25VSL1,
  Step26Engagement,
  Step28Validation,
  Step29Proofs,
  Step30Loading2,
  Step30bVSL2,
  Step31Loading3,
  Step32Sales,
];

const QuizRenderer = () => {
  const { state } = useQuiz();
  const StepComponent = steps[state.currentStep - 1];

  return <StepComponent />;
};

const Index = () => (
  <QuizProvider>
    <QuizPixelTracker />
    <QuizRenderer />
  </QuizProvider>
);

export default Index;
