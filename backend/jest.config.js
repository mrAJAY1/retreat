module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  clearMocks: true,
  collectCoverage: true,
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
