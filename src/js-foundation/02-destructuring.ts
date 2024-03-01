//console.log(process.env.PORT);

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

export const characters = [
  "Puck",
  "Guts",
  "PimPim",
  "Casca",
  "Isidro",
  "Schierke",
  "Griffith",
];

console.table(characters);

const [, , , , , schierke] = characters;

console.log(schierke);


const itemsOnMyRoom = ["Action figure", "Asuka", "Keyboard", "Hard disk"];

const [, , , storage] = itemsOnMyRoom;
console.table(itemsOnMyRoom);
console.log(storage);

