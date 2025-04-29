import { useState } from "react";
import { ExpandedContext } from "./ExpandedContext";

type Props = {
  children: React.ReactNode;
};

const ExpandedProvider: React.FC<Props> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <ExpandedContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </ExpandedContext.Provider>
  );
};

export default ExpandedProvider;