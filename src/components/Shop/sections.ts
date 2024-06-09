export const SECTIONS = {
  ALL: "Все",
  XBOX: "Xbox",
  PLAYSTATION: "PlayStation",
  NINTENDO: "Nintendo",
} as const;

export type typeSections = typeof SECTIONS[keyof typeof SECTIONS];