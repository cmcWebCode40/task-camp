/** @type {import('jest').Config} */

const config = {
  preset: "jest-expo",
	setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testEnvironment: 'node',
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

module.exports = config;