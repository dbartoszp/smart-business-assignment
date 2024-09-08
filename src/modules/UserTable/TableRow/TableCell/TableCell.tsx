import { ReactNode } from "react";

export const TableCell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 min-w-64 overflow-hidden whitespace-normal border border-slate-300 p-2">
      {children}
    </div>
  );
};
