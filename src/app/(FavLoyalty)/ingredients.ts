// ingredients.ts

import FAQs from "././ReferScreen/FAQsScreen";

export interface ReferScreens {
  content: React.ReactNode;
  label: string;
}

export const allScreens: ReferScreens[] = [
  { content: "Refer", label: "Refer" },
  { content: "History", label: "History" },
  { content: "FAQs", label: "FAQs" },
];

const [Refer, History, fAQs] = allScreens;
export const initialTabs = [Refer, History, fAQs];

export function getNextIngredient(
  ingredients: ReferScreens[]
): ReferScreens | undefined {
  const existing = new Set(ingredients);
  return allScreens.find((screen) => !existing.has(screen));
}
