import { test } from '@playwright/test';
import { BasicInfoPage, BasicInfoForm } from '../pages/basic.info.page';

test('automation challenge', async ({ page }) => {
  // Form data to be used in Basic Info Page
  const formData: BasicInfoForm = {
    firstName: 'Eduardo',
    lastName: 'Valdez',
    email: 'edvaldez117@gmail.com',
    street: 'Forjadores',
    city: 'Aguascalientes',
    zipCode: '20180'
  };

  // Open the page in the browser and fill the form
  const basicInfoPage = new BasicInfoPage(page);
  await basicInfoPage.goto();
  await basicInfoPage.verifyPageLoads();
  await basicInfoPage.fillForm(formData);
  
  // Answer NO to all the questions
  const questionsPage = await basicInfoPage.clickSubmitButton();
  await questionsPage.verifyPageLoads();
  await questionsPage.clickNoButtons();
  
  // Verify name in verification input matches the data used to fill the form in Basic Info Page
  const additionalInfoPage = await questionsPage.clickSubmitButton();
  await additionalInfoPage.verifyPageLoads();
  await additionalInfoPage.verifyInputValue(`${formData.firstName} ${formData.lastName}`);
  
  // Verify redirection to following page https://www.experian.com/employer-services
  const employerServices = await additionalInfoPage.clickSubmitButton();
  await employerServices.verifyPageLoads();
  await employerServices.verifyUrl();
});
