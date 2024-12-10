import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { TestRailPage } from '../../utils/GlobalPOM';

test('logIn to testrail', { tag: "@smoke" }, async ({ page }) => {
  const tr = new TestRailPage(page)
  await page.goto('https://yshkliaryk.testrail.io/');

  await tr.loginPage.setLogin(process.env.LOGIN!);
  await tr.loginPage.setPassword(process.env.VALID_PASS!);
  await tr.loginPage.clickOnLoginButton();
  await expect(await tr.topPanel.getTopPanel()).toBeVisible()
  await expect(await tr.dashboard.getAddProjectButton()).toBeVisible()
});
