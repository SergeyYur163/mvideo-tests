import { test, expect } from '@playwright/test';

test('cart page opens', async ({ page }) => {

  await page.goto('https://www.mvideo.ru');

  await page.waitForLoadState('domcontentloaded');

  await page.getByText('Корзина').click();

  await expect(page).toHaveURL(/cart/);

});