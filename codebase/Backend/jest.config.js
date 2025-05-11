export default {
    preset: "ts-jest", // Use ts-jest to handle TypeScript files
    testEnvironment: "node", // Use Node.js environment for backend testing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Recognize these file extensions
    testMatch: ["**/__tests__/**/*.(ts|tsx)", "**/?(*.)+(spec|test).(ts|tsx)"], // Match test files
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Transform TypeScript files using ts-jest
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports (if needed)
    },
  };