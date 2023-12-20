import { test, expect } from '@playwright/test';
import { BasicInfoPage, BasicInfoForm } from '../pages/basic.info.page';

test('code challenge', async ({ page }) => {
  const formData: BasicInfoForm = {
    firstName: 'Eduardo',
    lastName: 'Valdez',
    email: 'edvaldez117@gmail.com',
    street: 'Forjadores',
    city: 'Aguascalientes',
    zipCode: '20180'
  };

  const basicInfoPage = new BasicInfoPage(page);

  await basicInfoPage.goto();
  await basicInfoPage.verifyPageLoads();
  await basicInfoPage.fillForm(formData);
  
  const questionsPage = await basicInfoPage.clickSubmitButton();
  await questionsPage.verifyPageLoads();
  await questionsPage.selectNoQuestions();
  
  const additionalInfoPage = await questionsPage.clickSubmitButton();
  await additionalInfoPage.verifyPageLoads();
  await additionalInfoPage.verifyInputValue(`${formData.firstName} ${formData.lastName}`);

});