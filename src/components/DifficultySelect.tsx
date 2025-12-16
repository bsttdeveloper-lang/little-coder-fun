import { ArrowLeft } from "lucide-react";
import { Operation, getOperationSymbol } from "@/lib/mathUtils";

interface DifficultySelectProps {
  operation: Operation;
  onSelect: (maxNumber: number) => void;
  onBack: () => void;
}

const operationLabels: Record<Operation, string> = {
  addition: "Addition",
  subtraction: "Subtraction",
  multiplication: "Multiplication",
  division: "Division",
};

const operationBorderColors: Record<Operation, string> = {
  addition: "border-addition",
  subtraction: "border-subtraction",
  multiplication: "border-multiplication",
  division: "border-division",
};

const difficulties = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const DifficultySelect = ({ operation, onSelect, onBack }: DifficultySelectProps) => {
  const borderColor = operationBorderColors[operation];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 pb-4">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={onBack}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>
            <div className="flex-1 text-center pr-10 md:pr-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-nunito">
                {operationLabels[operation]}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">Choose your level</p>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Options - Grid on larger screens */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
            {difficulties.map((max) => (
              <button
                key={max}
                onClick={() => onSelect(max)}
                className={`w-full py-4 md:py-5 px-6 bg-card rounded-2xl border-2 ${borderColor} shadow-sm hover:shadow-md transition-all text-lg md:text-xl font-semibold text-foreground hover:scale-[1.02] active:scale-[0.98]`}
              >
                1 to {max}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelect;
