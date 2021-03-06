const config = {
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.ts",

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.ts",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@middleware/(.*)$": "<rootDir>/middleware/$1",
    "^@layout/(.*)$": "<rootDir>/layout/$1",
    "^@models/(.*)$": "<rootDir>/models/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
    "^@customTypes/(.*)$": "<rootDir>/types/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

export default config;
