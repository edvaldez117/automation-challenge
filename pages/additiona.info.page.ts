import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { EmployerServicesPage } from "./employer.services.page";

export class AdditionalInfoPage extends BasePage {
    private readonly confirmationInput: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.confirmationInput = page.locator('//*[@data-question-id-text="NameConfirmation"]//input');
        this.submitButton = page.locator('#SurveyControl_SurveySubmit');
    }

    async verifyPageLoads() {
        await expect(this.page.getByText('Additional Information')).toBeVisible();
    }

    async verifyInputValue(expectedValue: string) {
        await expect(this.confirmationInput).toHaveValue(expectedValue);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
        return new EmployerServicesPage(this.page);
    }
}