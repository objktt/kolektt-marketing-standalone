import * as React from "react";
import { clsx } from "clsx";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ 
  children, 
  className 
}: AnimatedGradientTextProps) {
  return (
    <div
      className={clsx(
        "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient",
        className
      )}
    >
      {children}
    </div>
  );
}