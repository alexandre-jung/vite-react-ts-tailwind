// https://jestjs.io/docs/configuration
// https://www.npmjs.com/package/jest-html-reporter
// https://github.com/Hazyzh/jest-html-reporters

// At this time, jest-html-reporter has incompatible peer-deps,
// update it when the following issue is solved
// https://github.com/Hargne/jest-html-reporter/issues/146

module.exports = {
  // globals: {
  //   'ts-jest': {
  //     isolatedModules: true,
  //   },
  // },
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  transform: {
    // Here we can use either babel-jest or ts-jest for jsx files.
    // Use ts-jest to type-check the code during tests.
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/jest/transforms/svgTransform.js',
    '^.+\\.module.s?css$': '<rootDir>/jest/transforms/scssTransform.js',
  },
  testPathIgnorePatterns: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^mocks/(.*)$': '<rootDir>/src/mocks/$1',
  },
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
    '!src/public/mockServiceWorker.js',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/stories/',
    '<rootDir>/src/utils/',
    '<rootDir>/src/mocks/',
    '<rootDir>/src/data.js',
  ],
  reporters: [
    'default',
    // [
    //   'jest-html-reporter',
    //   {
    //     pageTitle: 'Vite + React template project test report',
    //     logo: '../src/assets/favicon.svg',
    //     outputPath: './report/test-report.html',
    //   },
    // ],
    [
      'jest-html-reporters',
      {
        publicPath: './html-report',
        filename: 'report.html',
        logoImgPath: './etc/vite.jpg',
        // openReport: true,
      },
    ],
  ],
  testEnvironment: 'jsdom',
};
