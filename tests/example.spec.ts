import { test, expect } from '@playwright/test';


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
