import { type Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class QuestionsPage extends BasePage {
    private readonly questionButtons: Locator;

    constructor(page: Page) {
        super(page);
        this.questionButtons = page.locator("//*[@class='row']//label[.//input[@text='No']]");
    }

    async verifyPageLoads() {
        await expect(this.page.getByText('At this time, please answer Yes or No to the following questions:')).toBeVisible();
    }

    async selectNoQuestions() {
        (await this.questionButtons.all()).forEach(async (noBtn: Locator) => {
            await noBtn.dispatchEvent('click');
        });
    }
}