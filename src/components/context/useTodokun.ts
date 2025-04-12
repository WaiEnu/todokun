import { createContext, ReactNode, useState } from "react";

interface IdContextType {
  id: number;
  generateId: () => number;
}

const IdContext = createContext<IdContextType>();

export const IdProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [id, setId] = useState(0);
  const generateId = (length) => {
      const id = Math.floor(Math.random() * (length - 1));
      setId(id)
      return id;
  };

  const value = {
    id,
    generateId
  };

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};

export const useTodokun = () => {
  const context = useContext(IdContext);
  if (context === undefined) {
    throw new Error("useTodokun must be used within a IdProvider");
  }
  return context;
};