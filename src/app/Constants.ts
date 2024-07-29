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

export interface Magic {
  name: string,
  type: "miracle" | "pyromancy" | "sorcery",
  intelligence: number | null,
  faith: number | null,
  slots: number,
  spell_uses: number,
  description: string;
}

export type BottomlessBoxItem = (Inventory | Equipment);
export type BottomlessBox = BottomlessBoxItem[];

export const equipments: Equipment[] = [
  {name: "Longsword", type: "Weapon", durability: 100, magical: false, quantity: 1},
  {name: "Knight Shield", type: "Shield", durability: 120, magical: false, quantity: 1},
  {name: "Sorcerer's Catalyst", type: "Staff", durability: 80, magical: true, quantity: 1},
  {name: "Black Iron Armor", type: "Armor", durability: 200, magical: false, quantity: 1},
  {name: "Ring of Favor and Protection", type: "Accessory", durability: Infinity, magical: true, quantity: 1},
  {name: "Dragon Slayer Bow", type: "Weapon", durability: 90, magical: false, quantity: 1},
  {name: "Pyromancer Flame", type: "Glove", durability: 75, magical: true, quantity: 1},
  {name: "Silver Knight Helmet", type: "Helmet", durability: 150, magical: false, quantity: 1},
  {name: "Cleric's Sacred Chime", type: "Chime", durability: 70, magical: true, quantity: 1},
  {name: "Lightning Spear", type: "Weapon", durability: 85, magical: true, quantity: 1}
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

export const darkSoulsSpells: Magic[] = [
  {
    name: "Soul Arrow",
    type: "sorcery",
    intelligence: 10,
    faith: null,
    slots: 1,
    spell_uses: 30,
    description: "A standard sorcery that fires a soul arrow. The first sorcery learned by those who glimpse into the art of magic. Lore: Crafted by the Vinheim Dragon School."
  },
  {
    name: "Great Fireball",
    type: "pyromancy",
    intelligence: null,
    faith: null,
    slots: 2,
    spell_uses: 8,
    description: "Hurls a giant fireball. Primal pyromancy taught by Quelana of Izalith. Lore: Evolved from an ancient spell once wielded by the Witches of Izalith."
  },
  {
    name: "Lightning Spear",
    type: "miracle",
    intelligence: null,
    faith: 20,
    slots: 1,
    spell_uses: 10,
    description: "Miracle passed down to those bound by the Warrior of Sunlight covenant. Hurls a spear of lightning. Lore: The legacy of the god of war, a descendant of the sun god."
  },
  {
    name: "Crystal Soul Spear",
    type: "sorcery",
    intelligence: 36,
    faith: null,
    slots: 1,
    spell_uses: 5,
    description: "Fires a piercing crystal soul spear. Superior to the Soul Arrow and Homing Soulmass. Lore: An advanced sorcery of the Crystal Sages, said to be their greatest achievement."
  },
  {
    name: "Combustion",
    type: "pyromancy",
    intelligence: null,
    faith: null,
    slots: 1,
    spell_uses: 16,
    description: "Pyromancy that ignites fire within the caster's hand. Effective against close-range foes. Lore: A basic pyromancy of the Great Swamp."
  },
  {
    name: "Heal",
    type: "miracle",
    intelligence: null,
    faith: 12,
    slots: 1,
    spell_uses: 5,
    description: "Elementary miracle cast by clerics. Restores HP. Lore: Gradually learned by those who face the trials of the gods in order to deepen their faith."
  },
  {
    name: "Homing Soulmass",
    type: "sorcery",
    intelligence: 18,
    faith: null,
    slots: 1,
    spell_uses: 10,
    description: "Sorcery that creates multiple homing soulmasses. These sorceries are on the opposite spectrum of the soul arrow. Lore: Developed by the master sorcerer Big Hat Logan."
  },
  {
    name: "Great Chaos Fireball",
    type: "pyromancy",
    intelligence: null,
    faith: null,
    slots: 2,
    spell_uses: 4,
    description: "Art of the Flame of Chaos, which engulfed the Witch of Izalith and her daughters. Hurls a giant chaos fireball that leaves a lava pool. Lore: The fires of chaos can even twist life itself."
  },
  {
    name: "Wrath of the Gods",
    type: "miracle",
    intelligence: null,
    faith: 28,
    slots: 1,
    spell_uses: 3,
    description: "Primal form of Force, creating a powerful shockwave. Lore: Originally an epic tale of the gods, but later passed down as a miracle."
  },
  {
    name: "Dark Bead",
    type: "sorcery",
    intelligence: 16,
    faith: null,
    slots: 1,
    spell_uses: 6,
    description: "Fires a barrage of small dark orbs. In contrast to standard soul sorceries, the orbs are massed in quantity over quality. Lore: Abyss sorcery discovered by an Oolacile sorcerer on the brink of madness."
  }
];
