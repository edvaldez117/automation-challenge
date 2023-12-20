import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { AdditionalInfoPage } from "./additiona.info.page";

/**
 * Represents the Questions Page
 */
export class QuestionsPage extends BasePage {
    private readonly noButtons: Locator;     // Buttons to answer NO for all the questions
    private readonly submitButton: Locator;  // Submit button

    constructor(page: Page) {
        super(page);

        // Locate the NO buttons by xpath (actually getting the labels since the inputs are hidden)
        this.noButtons = page.locator("//*[@class='row']//label[.//input[@text='No']]");

        // Locate submit button by id
        this.submitButton = page.locator('#SurveyControl_SurveySubmit');
    }

    async verifyPageLoads() {
        await expect(this.page.getByText('At this time, please answer Yes or No to the following questions:')).toBeVisible();
    }

    /**
     * Clicks the button to answer NO for all the questions in {@link QuestionsPage}
     */
    async clickNoButtons() {
        // Using forEach to iterate over all the NO buttons and using dispatchEvent('click') to trigger a click event.
        // Tried to use click() and click({ force: true }) methods but got failures while running in headed mode
        // and also the behavior is not consistent through different browsers, so dispatchEvent('click') is the method
        // that provides a consistent behavior even if headed mode is used.
        (await this.noButtons.all()).forEach(async (noBtn: Locator) => await noBtn.dispatchEvent('click'));
    }

    /**
     * Clicks the submit button and returns a new instance of
     * {@link AdditionalInfoPage}, which is the next page to be displayed.
     * @returns an instance of {@link AdditionalInfoPage}
     */
    async clickSubmitButton() {
        await this.submitButton.click();
        return new AdditionalInfoPage(this.page);
    }
}
