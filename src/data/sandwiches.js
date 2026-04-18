export const SANDWICHES = [
  { id: "blue-slate", name: "Blue Slate", price: 13.79, category: "poultry", desc: "Smoked all-natural turkey breast, havarti, lettuce, tomato, ancho lime mayo on country bread.", veg: false, shopifyHandle: "blue-slate" },
  { id: "italian", name: "Italian", price: 13.79, category: "pork", desc: "Sopressata & Genoa salami, provolone, diced peppers, lettuce, house-made Italian vinaigrette on baguette.", veg: false, shopifyHandle: "italian" },
  { id: "landrance", name: "Landrance", price: 13.79, category: "pork", desc: "Prosciutto, roasted tomatoes, arugula, fresh mozzarella on baguette.", veg: false, vegOption: true, shopifyHandle: "landrance" },
  { id: "wessex", name: "Wessex", price: 13.99, category: "pork", desc: "Edwards' Virginia ham, brie, house-made apple chutney on ciabatta.", veg: false, shopifyHandle: "wessex" },
  { id: "devon", name: "Devon", price: 12.99, category: "beef", desc: "All-natural roast beef, horseradish-chive spread, arugula on focaccia.", veg: false, shopifyHandle: "devon" },
  { id: "araucana", name: "Araucana", price: 10.49, category: "egg", desc: "House-made farm-fresh egg salad with bacon and local tomato on country bread.", veg: false, vegOption: true, shopifyHandle: "araucana" },
  { id: "brahma", name: "Brahma", price: 12.99, category: "poultry", desc: "Curried chicken salad, Farmstead Ferments kraut, romaine, chutney raita on whole wheat.", veg: false, allergens: ["almonds"], shopifyHandle: "brahma" },
  { id: "chester", name: "Chester", price: 12.79, category: "pork", desc: "Black Forest ham, provolone, spicy-sweet mustard, roasted peppers on focaccia, grilled.", veg: false, shopifyHandle: "chester" },
  { id: "melrose", name: "Melrose", price: 11.79, category: "veg", desc: "Roasted portobellos, red onions, house-made pimento cheese, arugula on country bread, grilled.", veg: true, shopifyHandle: "melrose" },
  { id: "galloway", name: "Galloway", price: 12.79, category: "beef", desc: "Pastrami, Swiss, coarse mustard, coleslaw on rye, grilled.", veg: false, shopifyHandle: "galloway" },
  { id: "riviera", name: "Riviera", price: 14.79, category: "fish", desc: "House-made Italian tuna salad, capers, roasted tomatoes, olive oil, mixed greens on country bread.", veg: false, shopifyHandle: "riviera" },
  { id: "berkshire", name: "Berkshire", price: 14.99, category: "pork", desc: "Roasted Double H Farm pork, pickled fennel, romaine, charred onion-miso mayo on ciabatta.", veg: false, shopifyHandle: "berkshire" },
  { id: "cuban", name: "Cuban", price: 13.79, category: "pork", desc: "Mortadella, Swiss, cornichons, hot peppers, pickled onions, roasted garlic mayo on brioche bun.", veg: false, shopifyHandle: "cuban" },
  { id: "beauregard", name: "Beauregard", price: 11.99, category: "veg", desc: "Grilled sweet potato, chili-cilantro spread, saut\u00e9ed shiitakes, house kim chi on sourdough.", veg: true, vegan: true, shopifyHandle: "grilled-sweet-potato-sandwich" },
  { id: "vittoria", name: "Vittoria", price: 11.79, category: "veg", desc: "House-made eggplant caponata, hummus, arugula on focaccia.", veg: true, allergens: ["pine nuts"], shopifyHandle: "vittoria" },
  { id: "kids-turkey", name: "Kid's Turkey", price: 6.50, category: "kids", desc: "Smoked turkey breast, havarti, mayo on wheat.", veg: false, shopifyHandle: "kids-turkey-sandwich" },
  { id: "kids-pbj", name: "Kid's PB&J", price: 6.00, category: "kids", desc: "Peanut butter and local grape jelly on Goodwin Creek Farm wheat bread.", veg: true, shopifyHandle: "kids-pb-j" },
  { id: "kids-ham", name: "Kid's Ham", price: 7.50, category: "kids", desc: "Black Forest ham, provolone, mayo on wheat.", veg: false, shopifyHandle: "kids-ham-sandwich" },
];

export const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "veg", label: "Vegetarian" },
  { id: "poultry", label: "Poultry" },
  { id: "beef", label: "Beef" },
  { id: "pork", label: "Pork" },
  { id: "fish", label: "Fish" },
  { id: "kids", label: "Kids" },
];

export const filterSandwiches = (sandwiches, filter) => {
  if (filter === "all") return sandwiches;
  if (filter === "veg") return sandwiches.filter((s) => s.veg || s.vegOption);
  return sandwiches.filter((s) => s.category === filter);
};

export const fmt = (n) => `$${n.toFixed(2)}`;
