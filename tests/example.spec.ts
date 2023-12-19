import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page';

test('code challenge', async ({ page }) => {
  const formData = {
    firstName: 'Jose',
    lastName: 'Valdez',
    email: 'edvaldez117@gmail.com',
    street: 'Forjadores',
    city: 'Aguascalientes',
    zipCode: '20180'
  };

  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.basicInfoPage.verifyPageLoads();
  await mainPage.basicInfoPage.fillForm(formData);
  await mainPage.clickSubmitButton();
  await mainPage.questionsPage.verifyPageLoads();
  await mainPage.questionsPage.selectNoQuestions();
  await mainPage.clickSubmitButton();

  await expect(page.getByText('Additional Information')).toBeVisible();
});