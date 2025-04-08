import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/js-with-ts', // Use ts-jest preset for TypeScript
  testEnvironment: 'jest-environment-jsdom', // Use jsdom environment
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add jest-dom for custom matchers
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Correct the mapping for .css files
  },
  globals: {
    'ts-jest': {
      isolatedModules: true, // Speed up the process by using isolated modules
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/main.tsx'], // Ignore node_modules and dist
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Don't transform node_modules
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Collect coverage from TypeScript files in the src directory
    '!src/main.tsx', // Exclude main.tsx from coverage
    '!src/vite-env.d.ts', // Exclude vite-env.d.ts from coverage
  ],
  coverageThreshold: {
    global: {
      branches: 80, // Minimum branches coverage percentage
      functions: 80, // Minimum functions coverage percentage
      lines: 80, // Minimum lines coverage percentage
      statements: 80, // Minimum statements coverage percentage
    },
  },
};

export default config;
