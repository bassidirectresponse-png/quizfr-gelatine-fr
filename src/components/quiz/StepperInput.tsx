import { Minus, Plus } from "lucide-react";

interface StepperInputProps {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  unit: string;
}

const StepperInput = ({ value, onChange, min, max, unit }: StepperInputProps) => (
  <div className="flex items-center justify-center gap-6">
    <button
      onClick={() => onChange(Math.max(min, value - 1))}
      className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center text-foreground hover:border-primary transition-colors"
    >
      <Minus size={24} />
    </button>
    <div className="text-center">
      <span className="text-5xl font-extrabold quiz-gradient-text">{value}</span>
      <span className="block text-muted-foreground text-sm mt-1">{unit}</span>
    </div>
    <button
      onClick={() => onChange(Math.min(max, value + 1))}
      className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center text-foreground hover:border-primary transition-colors"
    >
      <Plus size={24} />
    </button>
  </div>
);

export default StepperInput;
