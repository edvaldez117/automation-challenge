import { type Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { AdditionalInfoPage } from "./additiona.info.page";

export class QuestionsPage extends BasePage {
    private readonly questionButtons: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.questionButtons = page.locator("//*[@class='row']//label[.//input[@text='No']]");
        this.submitButton = page.locator('#SurveyControl_SurveySubmit');
    }

    async verifyPageLoads() {
        await expect(this.page.getByText('At this time, please answer Yes or No to the following questions:')).toBeVisible();
    }

    async selectNoQuestions() {
        (await this.questionButtons.all()).forEach(async (noBtn: Locator) => {
            await noBtn.dispatchEvent('click');
        });
    }

    async clickSubmitButton() {
        await this.submitButton.click();
        return new AdditionalInfoPage(this.page);
    }
}