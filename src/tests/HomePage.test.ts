import { expect, test } from '@playwright/test';

test('expect welcome message', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h2')).toBe(
    'Welcome to Zustand, Immer, and React Query Course 🧑‍🏫 💻',
  );
});
