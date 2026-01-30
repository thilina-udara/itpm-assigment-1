# ITPM Assignment 1 - Singlish to Sinhala Translator Test Automation (TypeScript)

**Student:** IT23247086  
**Course:** IT3040 - ITPM  
**Assignment:** Assignment 1  
**Application Under Test:** https://www.swifttranslator.com/  
**Language:** TypeScript

## 📋 Overview

This project contains automated tests for the Singlish to Sinhala translator web application using **Playwright with TypeScript**. The test suite includes:

- **24 Positive Functional Tests** (Pos_Fun_0001 to Pos_Fun_0024)
- **10 Negative Functional Tests** (Neg_Fun_0001 to Neg_Fun_0010)
- **1 UI Test** (Pos_UI_0001)

## 🔧 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## 📦 Installation

Follow these steps to set up the project:

### Step 1: Extract the project files
```bash
unzip IT23247086.zip
cd IT23247086
```

### Step 2: Install dependencies
```bash
npm install
```

This will install:
- Playwright Test framework
- TypeScript compiler
- Type definitions
- Browser binaries

### Step 3: Install Playwright browsers
```bash
npx playwright install
```

This downloads the required browser binaries for testing.

## 🚀 Running the Tests

### Run all tests (headless mode)
```bash
npm test
```

### Run tests with browser visible (headed mode)
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run specific test file
```bash
npx playwright test tests/translator.spec.ts
npx playwright test tests/example.spec.ts
```

### Run a specific test case
```bash
npx playwright test -g "Pos_Fun_0001"
```

## 📊 Viewing Test Results

### HTML Report
After running tests, view the HTML report:
```bash
npm run test:report
```

This opens an interactive HTML report showing:
- Test results (Pass/Fail)
- Screenshots of failures
- Test execution timeline
- Detailed logs

### Console Output
Test results are displayed in the console during execution with:
- ✓ for passed tests
- ✗ for failed tests
- Execution time for each test

## 📁 Project Structure

```
playwright-itpm-project/
├── tests/
│   ├── translator.spec.ts     # Main test file (35 tests) - TypeScript
│   └── example.spec.ts        # Example tests - TypeScript
├── test-results/              # Generated after test runs
├── playwright-report/         # HTML test report
├── package.json               # Node.js dependencies
├── playwright.config.ts       # Playwright config - TypeScript
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎯 TypeScript Benefits

### Why TypeScript?

1. **Type Safety**: Catch errors before running tests
2. **Better IDE Support**: Auto-completion and IntelliSense
3. **Code Quality**: Enforces best practices
4. **Maintainability**: Easier to refactor and update

### Example Type Safety:

```typescript
// TypeScript ensures correct types
const inputField = page.locator('textarea').first();
const testInput: string = 'mama gedhara yanavaa';
await inputField.fill(testInput);

// TypeScript prevents errors like:
await inputField.fill(123);  // ❌ Error: number is not assignable to string
```

## 🧪 Test Case Categories

The test suite covers all assignment requirements:

1. **Sentence Structures** - Simple, compound, complex
2. **Grammar** - Tenses, negations, pronouns
3. **Daily Language** - Greetings, requests, responses
4. **Mixed Language** - English terms, places, abbreviations
5. **Input Variations** - Short, medium, long inputs
6. **Formatting** - Punctuation, numbers, dates
7. **Informal Language** - Slang and colloquialisms
8. **UI Testing** - Real-time updates

## ⚙️ Configuration Files

### tsconfig.json
TypeScript compiler configuration:
- Target: ES2020
- Module: CommonJS
- Strict type checking enabled
- Type definitions for Node.js and Playwright

### playwright.config.ts
Playwright test configuration (TypeScript):
- Base URL: https://www.swifttranslator.com/
- Timeout: 60 seconds per test
- Retries: 2 in CI environment
- Workers: 1 (sequential execution)
- Browser: Chromium

## 🐛 Troubleshooting

### Issue: TypeScript compilation errors
**Solution:** 
```bash
npx tsc --noEmit  # Check for type errors
```

### Issue: Tests fail with "Browser not found"
**Solution:** 
```bash
npx playwright install
```

### Issue: Type definition errors
**Solution:** 
```bash
npm install --save-dev @types/node @playwright/test
```

### Issue: Cannot find module
**Solution:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📝 Writing Tests in TypeScript

### Basic Test Structure:
```typescript
import { test, expect, Page } from '@playwright/test';

test('My test name', async ({ page }) => {
  // Type-safe test code
  await page.goto('https://example.com');
  
  const element = page.locator('button');
  await element.click();
  
  // TypeScript ensures correct usage
  expect(await element.textContent()).toBe('Click me');
});
```



## 📧 Contact

For questions or issues:
- **Student:** IT23247086
- **Assignment:** ITPM Assignment 1

## 📄 License

This project is created for academic purposes as part of ITPM coursework.

---

## 🎓 Learning TypeScript with Playwright

### Key Differences from JavaScript:

1. **Type Annotations:**
```typescript
// TypeScript
const output: string = await element.textContent() || '';

// JavaScript
const output = await element.textContent() || '';
```

2. **Function Types:**
```typescript
// TypeScript
async function helper(page: Page): Promise<void> {
  // ...
}

// JavaScript
async function helper(page) {
  // ...
}
```

3. **Compilation:**
TypeScript compiles to JavaScript before execution. Playwright handles this automatically!

### Resources:
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- Playwright TypeScript Guide: https://playwright.dev/docs/test-typescript

---

**Note:** This automation project uses TypeScript for better type safety and code quality. All test cases are documented in the accompanying Excel file `IT23247086.xlsx`.
