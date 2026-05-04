import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface QuizState {
  currentStep: number;
  userName: string;
  age: string;
  bodyType: string;
  targetZones: string[];
  objective: string;
  emotionalImpact: string;
  satisfaction: string;
  barriers: string[];
  aspirations: string[];
  currentWeight: number;
  height: number;
  targetWeight: number;
  pregnancies: string;
  routine: string[];
  sleep: string;
  water: string;
  dreamBody: string;
  engagement: string;
}

interface QuizContextType {
  state: QuizState;
  totalSteps: number;
  progress: number;
  goNext: () => void;
  goBack: () => void;
  goTo: (step: number) => void;
  set: <K extends keyof QuizState>(key: K, value: QuizState[K]) => void;
  weightDiff: number;
}

const initialState: QuizState = {
  currentStep: 1,
  userName: "",
  age: "",
  bodyType: "",
  targetZones: [],
  objective: "",
  emotionalImpact: "",
  satisfaction: "",
  barriers: [],
  aspirations: [],
  currentWeight: 75,
  height: 165,
  targetWeight: 65,
  pregnancies: "",
  routine: [],
  sleep: "",
  water: "",
  dreamBody: "",
  engagement: "",
};

const QuizContext = createContext<QuizContextType | null>(null);

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within QuizProvider");
  return ctx;
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<QuizState>(initialState);
  const totalSteps = 33;
  const progress = (state.currentStep / totalSteps) * 100;

  const goNext = useCallback(() => {
    window.scrollTo({ top: 0 });
    setState(s => ({ ...s, currentStep: Math.min(s.currentStep + 1, totalSteps) }));
  }, []);
  const goBack = useCallback(() => {
    window.scrollTo({ top: 0 });
    setState(s => ({ ...s, currentStep: Math.max(s.currentStep - 1, 1) }));
  }, []);
  const goTo = useCallback((step: number) => {
    window.scrollTo({ top: 0 });
    setState(s => ({ ...s, currentStep: step }));
  }, []);

  const set = useCallback(<K extends keyof QuizState>(key: K, value: QuizState[K]) => {
    setState(s => ({ ...s, [key]: value }));
  }, []);

  const weightDiff = state.currentWeight - state.targetWeight;

  return (
    <QuizContext.Provider value={{ state, totalSteps, progress, goNext, goBack, goTo, set, weightDiff }}>
      {children}
    </QuizContext.Provider>
  );
};
