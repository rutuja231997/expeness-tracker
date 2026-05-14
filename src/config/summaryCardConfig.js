import { Coins, UtensilsCrossed, Plane, Layers } from "lucide-react";

export const summaryCardConfig = {
  total: {
    label: "Total Expenses",
    categories: null,
    icon: Coins,
    bgColor: "bg-emerald-100",
    iconColor: "#059669",
  },
  food: {
    label: "Food",
    categories: ["food"],
    icon: UtensilsCrossed,
    bgColor: "bg-yellow-100",
    iconColor: "#ea580c",
  },

  travel: {
    label: "Travel",
    categories: ["travel"],
    icon: Plane,
    bgColor: "bg-blue-100",
    iconColor: "#2563eb",
  },

  other: {
    label: "Other",
    categories: ["other", "marketing", "utilities"],
    icon: Layers,
    bgColor: "bg-violet-100",
    iconColor: "#7c3aed",
  },
};
