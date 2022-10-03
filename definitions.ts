export type UnionType = "a" | "b" | "c";

export enum EnumType {
  A = "a",
  B = "b",
  C = "c",
}

export type UnionTypeWithoutA = Exclude<UnionType, "a">
export type EnumTypeWithoutA = Exclude<EnumType, EnumType.A>