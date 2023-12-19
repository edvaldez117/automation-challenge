import { type Locator, Page, expect } from "@playwright/test";
import { BasicInfoPage } from "./basic-info.page";
import { QuestionsPage } from "./questions.page";

export class BasePage {
    private page: Page;
    private nextButton: Locator;
    readonly basicInfoPage: BasicInfoPage;
    readonly questionsPage: QuestionsPage;

    constructor(page: Page) {
        this.page = page;
        this.nextButton = page.locator('#SurveyControl_SurveySubmit');
        this.basicInfoPage = new BasicInfoPage(page);
        this.questionsPage = new QuestionsPage(page);
    }

    async goto() {
        await this.page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
    }

    async clickSubmitButton() {
        await this.nextButton.click();
    }
}
