module.exports = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '(/__test__/.*\\.(test|spec))\\.(ts|tsx|js)$',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  coveragePathIgnorePatterns: ['node_modules'],
  collectCoverageFrom: [
    'src/components/**/*.{tsx,ts,js}',
    '!src/components/index.tsx',
    '!src/components/index.umd.tsx',
    '!src/components/**/index.tsx',
    '!src/components/**/demo/*.tsx',
    '!**/__test__/**',
  ],
  /*
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  */
}
