import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { EmployerServicesPage } from "./employer.services.page";

/**
 * Represents the Additional Info Page
 */
export class AdditionalInfoPage extends BasePage {
    private readonly confirmationInput: Locator; // Confirmation input to check for first name and last name
    private readonly submitButton: Locator;      // Submit button

    constructor(page: Page) {
        super(page);

        // Getting the confirmation input by xpath
        this.confirmationInput = page.locator('//*[@data-question-id-text="NameConfirmation"]//input');

        // Getting submit button by id
        this.submitButton = page.locator('#SurveyControl_SurveySubmit');
    }

    async verifyPageLoads() {
        await expect(this.page.getByText('Additional Information')).toBeVisible();
    }

    /**
     * Verifies if confirmation input contains the given value
     * @param expectedValue A string with the expected value to be displayed in confirmation input
     */
    async verifyInputValue(expectedValue: string) {
        await expect(this.confirmationInput).toHaveValue(expectedValue);
    }

    /**
     * Clicks the submit button and returns a new instance of
     * {@link EmployerServicesPage}, which is the next page to be displayed.
     * @returns an instance of {@link EmployerServicesPage}
     */
    async clickSubmitButton() {
        await this.submitButton.click();
        return new EmployerServicesPage(this.page);
    }
}
