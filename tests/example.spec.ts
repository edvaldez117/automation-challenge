import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

test('code challenge', async ({ page }) => {
  const formData = {
    firstName: 'Jose',
    lastName: 'Valdez',
    email: 'edvaldez117@gmail.com',
    street: 'Forjadores',
    city: 'Aguascalientes',
    zipCode: '20180'
  };

  const basePage = new BasePage(page);

  await basePage.goto();
  await basePage.basicInfoPage.verifyPageLoaded();
  await basePage.basicInfoPage.fillForm(formData);
  await basePage.clickSubmitButton();
  await basePage.questionsPage.verifyPageLoaded();
  await basePage.questionsPage.selectNoQuestions();
  await basePage.clickSubmitButton();

  await expect(page.getByText('Additional Information')).toBeVisible();
});