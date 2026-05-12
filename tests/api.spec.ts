import { test, expect } from '@playwright/test';

test('GET products returns 200', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products');

  expect(response.status()).toBe(200);

});

test('products response contains items', async ({ request }) => {

  const response = await request.get('https://dummyjson.com/products');

  const body = await response.json();

  expect(body.products.length).toBeGreaterThan(0);

});