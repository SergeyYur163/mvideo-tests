import { test, expect } from '@playwright/test';

test('main page elements are visible', async ({ page }) => {

  await page.goto('https://www.mvideo.ru');

  await page.waitForLoadState('domcontentloaded');

  const searchInput = page.getByPlaceholder('Поиск в М.Видео');

  await expect(searchInput).toBeVisible();

  const cartButton = page.getByText('Корзина');

  await expect(cartButton).toBeVisible();

});