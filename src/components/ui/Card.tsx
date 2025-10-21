import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
  hover?: boolean;
}

export default function Card({ 
  children, 
  className, 
  variant = "default",
  hover = false 
}: CardProps) {
  const baseClasses = "rounded-xl transition-all duration-300";
  
  const variants = {
    default: "bg-white border border-gray-200 shadow-sm",
    glass: "glass-card",
    elevated: "bg-white shadow-lg border border-gray-100"
  };
  
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <div className={cn(baseClasses, variants[variant], hoverClasses, className)}>
      {children}
    </div>
  );
}