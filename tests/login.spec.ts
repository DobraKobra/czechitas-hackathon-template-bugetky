import { expect, test } from "@playwright/test";
import { AllPages } from "../pages/allpages";
// Co testuju
test.describe("Login functionality", () => {
let pages: AllPages;
test.beforeEach(async ({ page }) => {
pages = new AllPages(page);
await pages.visit("login?back=my-account");
});
// jak to testuju
test("Log in user with correct credentials", async ({ page }) => {
await page.locator('#email').click();
await page.locator('#email').fill('strelec@email.cz');
await page.locator('#email').press('Tab');
await page.getByLabel('Password').fill('Bugetky123');
await page.locator('#SubmitLogin').click();
await page.getByText('My account').waitFor();
expect(await page.getByText('My account').isVisible()).toBe(true);
});
});