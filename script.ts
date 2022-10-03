import { UnionType, EnumType } from "./definitions";

const unionTypeArray: UnionType[] = ["a", "b", "c"];

const enumTypeArray: EnumType[] = Object.values(EnumType);

const mapUnionType: Record<UnionType, string> = {
  a: "1",
  b: "2",
  c: "3",
};

const mapEnumType: Record<EnumType, string> = {
  [EnumType.A]: "1",
  [EnumType.B]: "2",
  [EnumType.C]: "3",
};

const mapUnionTypeValue: Record<number, UnionType> = {
  1: 'a',
  2: 'b',
  3: 'c',
};

const mapEnumTypeValue: Record<number, EnumType> = {
  1: EnumType.A,
  2: EnumType.B,
  3: EnumType.C,
};

function switchCaseUnionType(unionType: UnionType) {
  switch (unionType) {
    case "a":
      break;
    case "b":
      break;
    case "c":
      break;
  }
}

function switchCaseEnumType(enumType: EnumType) {
  switch (enumType) {
    case EnumType.A:
      break;
    case EnumType.B:
      break;
    case EnumType.C:
      break;
  }
}

function ifUnionType(unionType: UnionType) {
  if (unionType === "a") {
  } else if (unionType === "b") {
  } else if (unionType === "c") {
  } else if (unionType === "d") {
  }
}

function ifEnumType(enumType: EnumType) {
  if (enumType === EnumType.A) {
  } else if (enumType === EnumType.B) {
  } else if (enumType === EnumType.C) {
  } else if (enumType === "d") {
  }
}
