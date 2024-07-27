export interface Inventory {
  name: string;
  consumable: boolean;
  keyItem: boolean;
  quantity: number;
}

export interface Equipment {
  name: string;
  durability: number;
  magical: boolean
  type: string;
  quantity: number;
}

export type BottomlessBoxItem = (Inventory | Equipment);
export type BottomlessBox = BottomlessBoxItem[];

export const equipments: Equipment[] = [
  { name: "Longsword", type: "Weapon", durability: 100, magical: false, quantity: 1 },
  { name: "Knight Shield", type: "Shield", durability: 120, magical: false, quantity: 1 },
  { name: "Sorcerer's Catalyst", type: "Staff", durability: 80, magical: true, quantity: 1 },
  { name: "Black Iron Armor", type: "Armor", durability: 200, magical: false, quantity: 1 },
  { name: "Ring of Favor and Protection", type: "Accessory", durability: Infinity, magical: true, quantity: 1 },
  { name: "Dragon Slayer Bow", type: "Weapon", durability: 90, magical: false, quantity: 1 },
  { name: "Pyromancer Flame", type: "Glove", durability: 75, magical: true, quantity: 1 },
  { name: "Silver Knight Helmet", type: "Helmet", durability: 150, magical: false, quantity: 1 },
  { name: "Cleric's Sacred Chime", type: "Chime", durability: 70, magical: true, quantity: 1 },
  { name: "Lightning Spear", type: "Weapon", durability: 85, magical: true, quantity: 1 }
];

export const darkSoulsInventoryItems: Inventory[] = [{
  name: "Estus Flask",
  consumable: true,
  keyItem: false,
  quantity: 1
}, {name: "Humanity", consumable: true, keyItem: false, quantity: 1}, {
  name: "Homeward Bone",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Firebomb", consumable: true, keyItem: false, quantity: 20}, {
  name: "Gold Pine Resin",
  consumable: true,
  keyItem: false,
  quantity: 5
}, {name: "Black Firebomb", consumable: true, keyItem: false, quantity: 10}, {
  name: "Lloyd's Talisman",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Dung Pie", consumable: true, keyItem: false, quantity: 10}, {
  name: "Purple Moss Clump",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Blooming Purple Moss Clump", consumable: true, keyItem: false, quantity: 10}, {
  name: "Bloodred Moss Clump",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Repair Powder", consumable: true, keyItem: false, quantity: 5}, {
  name: "Green Blossom",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Throwing Knife", consumable: true, keyItem: false, quantity: 99}, {
  name: "Fire Keeper Soul",
  consumable: false,
  keyItem: true,
  quantity: 1
}, {name: "Divine Blessing", consumable: true, keyItem: false, quantity: 1}, {
  name: "Dragon Head Stone",
  consumable: false,
  keyItem: true,
  quantity: 1
}, {name: "Dragon Torso Stone", consumable: false, keyItem: true, quantity: 1}, {
  name: "Cracked Red Eye Orb",
  consumable: true,
  keyItem: false,
  quantity: 10
}, {name: "Red Eye Orb", consumable: false, keyItem: true, quantity: 1}];

export const darkSoulsClasses = ["Warrior", "Knight", "Wanderer", "Thief", "Bandit", "Hunter", "Sorcerer", "Pyromancer", "Cleric", "Deprived"];

export const npcNames = [
  "Solaire of Astora",
  "Siegmeyer of Catarina",
  "Sieglinde of Catarina",
  "Patches the Hyena",
  "Griggs of Vinheim",
  "Big Hat Logan",
  "Petrus of Thorolund",
  "Lautrec of Carim",
  "Rhea of Thorolund"
];
