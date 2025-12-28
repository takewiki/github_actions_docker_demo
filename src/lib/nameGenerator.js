const racePrefixes = {
  Human: ['Jon', 'Ari', 'Mar', 'Cal', 'Eli', 'Dar', 'Sam', 'Tom', 'Nia', 'Leo'],
  Elf: ['Ela', 'Fin', 'Gal', 'Sil', 'Ael', 'Tho', 'Lir', 'Vel', 'Zir', 'Nil'],
  Dwarf: ['Bor', 'Dur', 'Thro', 'Gim', 'Kil', 'Uth', 'Var', 'Bri', 'Kaz', 'Mol']
};

const classSuffixes = {
  Warrior: [
    'the Strong',
    'Shieldbearer',
    'of the Blade',
    'Ironfist',
    'Battleborn',
    'the Relentless'
  ],
  Mage: ['Fireweaver', 'Arclight', 'the Spellbound', 'the Mystic', 'Stormbringer', 'Voidwalker'],
  Rogue: [
    'of the Shadows',
    'Whispercloak',
    'the Quick',
    'Nightstalker',
    'Daggerfall',
    'Silentblade'
  ]
};

export function generateName(race, charClass) {
  const prefix = racePrefixes[race][Math.floor(Math.random() * racePrefixes[race].length)];
  const suffix =
    classSuffixes[charClass][Math.floor(Math.random() * classSuffixes[charClass].length)];
  return `${prefix} ${suffix}`;
}

export const availableRaces = Object.keys(racePrefixes);
export const availableClasses = Object.keys(classSuffixes);
