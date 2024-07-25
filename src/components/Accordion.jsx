import { createContext, useContext, useState } from "react";
import { AccordionItem } from "./AccordionItem";


const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error('Accordion related components must be wrapped by <Accordion>.');
  }

  return ctx;
}

export const Accordion = ({ children, className }) => {

  const [openItemId, setOpenItemId] = useState();

  
  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id);
  }

  const ctxValue = {
    openItemId,
    toggleItem
  }

  return (
    <AccordionContext.Provider value={ctxValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;