import React from 'react';

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
}

export function CircularText({ text, radius = 60, className = "" }: CircularTextProps) {
  const diameter = radius * 2;
  // Make the path a bit smaller than the SVG viewbox so text isn't cut off
  const pathRadius = radius - 10;
  
  return (
    <svg 
      viewBox={`0 0 ${diameter} ${diameter}`} 
      className={`w-full h-full animate-[spin_20s_linear_infinite] ${className}`}
    >
      <path
        id="textPath"
        d={`
          M ${radius}, ${radius}
          m -${pathRadius}, 0
          a ${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0
          a ${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0
        `}
        fill="none"
      />
      <text className="text-[10px] font-bold tracking-[0.2em] uppercase fill-muted-foreground/80">
        <textPath href="#textPath" startOffset="0%">
          {text} • {text} • {text} • 
        </textPath>
      </text>
    </svg>
  );
}
