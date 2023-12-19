import { type Locator, Page, expect } from "@playwright/test";

export class QuestionsPage {
    private page: Page;
    private questionButtons: Locator;

    constructor(page: Page) {
        this.page = page;
        this.questionButtons = page.locator("//*[@class='row']//label[.//input[@text='No']]");
    }

    async verifyPageLoaded() {
        await expect(this.page.getByText('At this time, please answer Yes or No to the following questions:')).toBeVisible();
    }

    async selectNoQuestions() {
        (await this.questionButtons.all()).forEach(async (noBtn: Locator) => {
            await noBtn.dispatchEvent('click');
        });
    }
}