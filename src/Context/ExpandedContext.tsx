import { createContext } from "react";

export type ExpandedContextType = {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

export const ExpandedContext = createContext<ExpandedContextType | undefined>(undefined);