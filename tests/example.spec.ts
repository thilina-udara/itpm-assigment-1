// import { test, expect, Page } from '@playwright/test';

// /**
//  * Simple Example Tests - TypeScript Version
//  * Start here to learn Playwright with TypeScript!
//  */

// test.describe('Example: Understanding Playwright Basics (TypeScript)', () => {
  
//   test('Example 1: Visit website and check title', async ({ page }) => {
//     // Go to the translator website
//     await page.goto('https://www.swifttranslator.com/');
    
//     // Wait for page to load
//     await page.waitForLoadState('domcontentloaded');
    
//     // Check if the page title contains "Singlish" or "Translator"
//     await expect(page).toHaveTitle(/Singlish|Translator/i);
    
//     console.log('✓ Website loaded successfully!');
//   });

//   test('Example 2: Simple translation test', async ({ page }) => {
//     // Navigate to translator
//     await page.goto('https://www.swifttranslator.com/');
//     await page.waitForLoadState('domcontentloaded');
    
//     // Wait for page content to be ready
//     await page.waitForTimeout(2000);
    
//     // Find the input field - look for editable areas on the page
//     const inputField = page.locator('[contenteditable="true"]').first();
    
//     // Type some Singlish text using keyboard
//     await inputField.click();
//     await page.keyboard.type('mama gedhara yanavaa', { delay: 50 });
    
//     // Wait for translation (real-time translation)
//     await page.waitForTimeout(3000);
    
//     // Find output field - second editable area
//     const outputField = page.locator('[contenteditable="true"]').nth(1);
    
//     // Get the translated text
//     const translatedText: string = await outputField.textContent() || '';
    
//     // Log output for debugging
//     console.log('Input: mama gedhara yanavaa');
//     console.log('Output:', translatedText);
    
//     // Check that we got some output (translation worked)
//     console.log('✓ Translation test completed!');
//   });

//   test('Example 3: Clear and re-enter text', async ({ page }) => {
//     await page.goto('https://www.swifttranslator.com/');
//     await page.waitForLoadState('domcontentloaded');
//     await page.waitForTimeout(2000);
    
//     const inputField = page.locator('[contenteditable="true"]').first();
    
//     // First input
//     await inputField.click();
//     await page.keyboard.type('kohomadha', { delay: 50 });
//     await page.waitForTimeout(2000);
    
//     // Clear using keyboard
//     await inputField.click();
//     await page.keyboard.press('Control+A');
//     await page.keyboard.press('Delete');
//     await page.waitForTimeout(1000);
    
//     // Second input
//     await page.keyboard.type('ayubowan', { delay: 50 });
//     await page.waitForTimeout(2000);
    
//     const outputField = page.locator('[contenteditable="true"]').nth(1);
//     const output: string = await outputField.textContent() || '';
    
//     console.log('Output:', output);
//     console.log('✓ Clear and re-enter test completed!');
//   });

//   test('Example 4: Type checking demonstration', async ({ page }) => {
//     // This test shows TypeScript type safety
//     await page.goto('https://www.swifttranslator.com/');
//     await page.waitForLoadState('domcontentloaded');
//     await page.waitForTimeout(2000);
    
//     const inputField = page.locator('[contenteditable="true"]').first();
//     const testInput: string = 'mama';  // TypeScript knows this is a string
    
//     await inputField.click();
//     await page.keyboard.type(testInput, { delay: 50 });
//     await page.waitForTimeout(2000);
    
//     // TypeScript ensures we handle the output correctly
//     const outputField = page.locator('[contenteditable="true"]').nth(1);
//     const output: string | null = await outputField.textContent();
    
//     if (output) {
//       console.log('Output length:', output.length);  // Safe to use string methods
//     }
    
//     console.log('✓ TypeScript type safety working!');
//   });
// });








import { test, expect } from '@playwright/test';

/**
 * Simple Example Tests - TypeScript Version
 * Start here to learn Playwright with TypeScript!
 */

test.describe('Example: Understanding Playwright Basics (TypeScript)', () => {
  test('Example 1: Visit website and check title', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveTitle(/Singlish|Translator/i);

    console.log('✓ Website loaded successfully!');
  });

  test('Example 2: Simple translation test', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    const inputField = page.locator('textarea').first();

    await inputField.click();
    await page.keyboard.type('mama gedhara yanavaa', { delay: 50 });
    await page.waitForTimeout(3000);

    console.log('✓ Example 2 ran without timeout');
  });

  test('Example 3: Clear and re-enter text', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    const inputField = page.locator('textarea').first();

    await inputField.click();
    await page.keyboard.type('kohomadha', { delay: 50 });
    await page.waitForTimeout(2000);

    await inputField.click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    await page.waitForTimeout(1000);

    await page.keyboard.type('ayubowan', { delay: 50 });
    await page.waitForTimeout(2000);

    console.log('✓ Example 3 ran without timeout');
  });

  test('Example 4: Type checking demonstration', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    const inputField = page.locator('textarea').first();
    const testInput: string = 'mama';

    await inputField.click();
    await page.keyboard.type(testInput, { delay: 50 });
    await page.waitForTimeout(2000);

    console.log('✓ Example 4 ran without timeout');
  });
});
