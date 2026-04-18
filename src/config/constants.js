export const BREADS = ["Sourdough", "Ciabatta", "Baguette", "Whole Wheat", "Gluten-Free (+$2)"];

export const MODS = [
  { id: "no-mayo", label: "No mayo" },
  { id: "no-mustard", label: "No mustard" },
  { id: "no-onion", label: "No onion" },
  { id: "add-lettuce", label: "Add lettuce" },
  { id: "add-tomato", label: "Add tomato" },
  { id: "sub-mayo", label: "Sub plain mayo" },
];

export const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "veg", label: "Vegetarian" },
  { id: "turkey", label: "Turkey" },
  { id: "chicken", label: "Chicken" },
  { id: "beef", label: "Beef" },
  { id: "pork", label: "Pork" },
  { id: "fish", label: "Fish" },
  { id: "kids", label: "Kids" },
];

export const fmt = (n) => `$${n.toFixed(2)}`;
