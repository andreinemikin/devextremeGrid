module.exports = {
  testEnvironment: 'jsdom',
  reporters: ["default", "jest-junit"],
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl|svg)$": "<rootDir>/node_modules/jest-css-modules"
  },
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
  ]
};