import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import QuestionCard from "@/components/QuestionCard";
import { Operation, Question } from "@/lib/mathUtils";

interface PracticeScreenProps {
  operation: Operation;
  questions: Question[];
  wholeNumbersOnly: boolean;
  cumulativeScore: { correct: number; incorrect: number };
  onBack: () => void;
  onReset: () => void;
  onAnswer: (questionId: number, answer: string) => void;
}

const operationColors = {
  addition: "bg-addition",
  subtraction: "bg-subtraction",
  multiplication: "bg-multiplication",
  division: "bg-division",
};

const PracticeScreen = ({
  operation,
  questions,
  wholeNumbersOnly,
  cumulativeScore,
  onBack,
  onReset,
  onAnswer,
}: PracticeScreenProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Use cumulative score instead of calculating from current questions
  const correctCount = cumulativeScore.correct;
  const incorrectCount = cumulativeScore.incorrect;
  const totalAnswered = correctCount + incorrectCount;

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-practice px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Score Display */}
          <div className="flex items-center gap-3 md:gap-6 text-base md:text-xl font-bold">
            <span className="flex items-center gap-1">
              {correctCount}
              <Check className="w-4 h-4 md:w-6 md:h-6 text-success" strokeWidth={3} />
            </span>
            <span className="flex items-center gap-1">
              {incorrectCount}
              <X className="w-4 h-4 md:w-6 md:h-6 text-destructive" strokeWidth={3} />
            </span>
            <span className="text-muted-foreground">{totalAnswered}</span>
          </div>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className={`${operationColors[operation]} text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-sm md:text-base hover:opacity-90 transition-opacity`}
          >
            Reset
          </button>
        </div>

        {/* Questions - Grid on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {currentQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              wholeNumbersOnly={wholeNumbersOnly}
              onAnswer={(answer) => onAnswer(question.id, answer)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 max-w-md mx-auto">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`
              flex-1 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2
              ${currentPage === 0
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-muted hover:bg-border text-muted-foreground"
              }
              transition-colors
            `}
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`
              flex-1 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2
              ${currentPage === totalPages - 1
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : `${operationColors[operation]} text-white hover:opacity-90`
              }
              transition-all
            `}
          >
            Next
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeScreen;
