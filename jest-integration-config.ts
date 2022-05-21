export default {
  preset: 'ts-jest',
  testMatch: [
    '**/*.test.ts'
  ],
  roots: [
    '<rootDir>/src'
  ],
  verbose: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
