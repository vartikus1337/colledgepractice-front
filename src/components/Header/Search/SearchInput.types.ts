// https://github.com/kouts/vue-search-input/tree/main

export const fieldType = ['search', 'text', 'password'] as const

export type FieldType = (typeof fieldType)[number]