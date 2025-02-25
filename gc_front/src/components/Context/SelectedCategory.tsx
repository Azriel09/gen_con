import { createContext, useState, useContext, ReactNode } from "react";

type SelectedCategoryContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};
interface SelectedCategoryProviderProps {
  children: ReactNode;
}

const SelectedCategoryContext = createContext<
  SelectedCategoryContextType | undefined
>(undefined);

export const SelectedCategoryProvider = ({
  children,
}: SelectedCategoryProviderProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export const useSelectedCategory = () => {
  const context = useContext(SelectedCategoryContext);
  if (!context) {
    throw new Error(
      "useSelectedCategoryContext must be used within a SelectedTalentProvider"
    );
  }
  return context;
};
