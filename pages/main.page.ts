import { type Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { BasicInfoPage } from "./basic-info.page";
import { QuestionsPage } from "./questions.page";

export class MainPage extends BasePage {
    private readonly nextButton: Locator;
    readonly basicInfoPage: BasicInfoPage;
    readonly questionsPage: QuestionsPage;

    constructor(page: Page) {
        super(page);
        this.nextButton = page.locator('#SurveyControl_SurveySubmit');
        this.basicInfoPage = new BasicInfoPage(page);
        this.questionsPage = new QuestionsPage(page);
    }

    async verifyPageLoads() {
        await expect(this.page.locator('#Form1')).toBeVisible();
    }

    async goto() {
        await this.page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
    }

    async clickSubmitButton() {
        await this.nextButton.click();
    }
}