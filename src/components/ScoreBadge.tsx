interface ScoreBadgeProps {
  score: number;
  size?: "sm" | "md" | "lg";
}

function getScoreColor(score: number): string {
  if (score >= 40) return "bg-emerald-600";
  if (score >= 30) return "bg-primary";
  if (score >= 20) return "bg-amber-500";
  return "bg-gray-400";
}

function getScoreLabel(score: number): string {
  if (score >= 40) return "Excellent";
  if (score >= 30) return "Very Good";
  if (score >= 20) return "Good";
  return "Rated";
}

const sizes = {
  sm: "w-10 h-10 text-sm",
  md: "w-14 h-14 text-lg",
  lg: "w-20 h-20 text-2xl",
};

export function ScoreBadge({ score, size = "md" }: ScoreBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizes[size]} ${getScoreColor(score)} rounded-xl flex items-center justify-center text-white font-heading font-bold shadow-sm`}
      >
        {score}
      </div>
      {size !== "sm" && (
        <span className="text-xs text-gray-500 font-medium">{getScoreLabel(score)}/45</span>
      )}
    </div>
  );
}
