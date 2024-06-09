export const SECTIONS = {
  ALL: "Все",
  PC: "PC",
  XBOX: "Xbox",
  PLAYSTATION: "PlayStation",
  NINTENDO: "Nintendo",
} as const;

export type typeSections = typeof SECTIONS[keyof typeof SECTIONS];