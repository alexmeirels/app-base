module.exports = {
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testMatch: ['**/?(*.)+(e2e).js'],
  testTimeout: 120000,
  rootDir: '..',
  setupFilesAfterEnv: ['<rootDir>/e2e/init.js'],
};
