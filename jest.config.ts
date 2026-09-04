import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Caminho do projeto para carregar o next.config.js e variáveis de ambiente no teste
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Mapeamento de alias para garantir que o `@/` do TS funcione nos testes
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)