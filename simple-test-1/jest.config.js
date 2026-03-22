import { createDefaultPreset } from "ts-jest";

const tsJest = createDefaultPreset();

/** @type {import("jest").Config} */
export default {
  testEnvironment: "node",

  transform: {
    ...tsJest.transform,
  },

  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testPathIgnorePatterns: ["/dist/"], // ✅ IMPORTANT
};
