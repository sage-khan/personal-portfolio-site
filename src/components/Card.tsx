import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-panel-border bg-panel p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}
