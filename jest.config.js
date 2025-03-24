import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

const config = {
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app/**',
    '!src/lib/**',
    '!src/styles/**',
    '!src/types/**',
    '!src/**/stories.tsx'
  ],
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
