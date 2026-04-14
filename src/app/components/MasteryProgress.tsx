import { Progress } from './ui/progress';

interface MasteryProgressProps {
  hours: number;
  maxHours?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function MasteryProgress({ 
  hours, 
  maxHours = 1000, 
  showLabel = true,
  size = 'md'
}: MasteryProgressProps) {
  const percentage = Math.min((hours / maxHours) * 100, 100);
  const isMastered = hours >= maxHours;

  const heightClass = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }[size];

  const getStatusColor = () => {
    if (isMastered) return 'text-accent';
    if (percentage >= 75) return 'text-primary';
    if (percentage >= 50) return 'text-chart-4';
    return 'text-muted-foreground';
  };

  const getProgressColor = () => {
    if (isMastered) return 'bg-accent';
    return 'bg-primary';
  };

  return (
    <div className="space-y-2">
      <div className={`relative ${heightClass} w-full overflow-hidden rounded-full bg-muted/30`}>
        <div
          className={`h-full ${getProgressColor()} transition-all duration-500 ease-out relative`}
          style={{ width: `${percentage}%` }}
        >
          {isMastered && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          )}
        </div>
      </div>
      
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <span className={`font-medium ${getStatusColor()}`}>
            {hours.toLocaleString()} / {maxHours.toLocaleString()} horas
          </span>
          <span className={`font-semibold ${getStatusColor()}`}>
            {percentage.toFixed(1)}%
          </span>
        </div>
      )}
      
      {isMastered && showLabel && (
        <div className="flex items-center gap-2 text-accent font-semibold animate-pulse">
          <span className="text-xl">🏆</span>
          <span>¡Maestría Alcanzada!</span>
        </div>
      )}
    </div>
  );
}
