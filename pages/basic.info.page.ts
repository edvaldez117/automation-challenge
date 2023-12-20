import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { QuestionsPage } from "./questions.page";

/**
 * Represents the Basic Info Page
 */
export class BasicInfoPage extends BasePage {
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly streetInput: Locator;
    private readonly cityInput: Locator;
    private readonly zipCodeInput: Locator;
    private readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);

        // Gets the form inputs by label text
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.emailInput = page.getByLabel('Email Address');
        this.streetInput = page.getByLabel('Street Address');
        this.cityInput = page.getByLabel('City');
        this.zipCodeInput = page.getByLabel('Zip Code');

        // Gets the submit button by id
        this.submitButton = page.locator('#SurveyControl_SurveySubmit');
    }

    
    async verifyPageLoads() {
        await expect(this.page.getByText('Let’s begin by getting some basic information!')).toBeVisible();
    }

    /**
     * Opens the URL {@link https://surveyrc.taxcreditco.com/automation-challenge} in the web browser
     */
    async goto() {
        await this.page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
    }

    /**
     * Fills the form contained in {@link BasicInfoPage}
     * @param formData The data needed to fill the form, should contain all properties of {@link BasicInfoForm}
     */
    async fillForm(formData: BasicInfoForm) {
        await this.firstNameInput.fill(formData.firstName);
        await this.lastNameInput.fill(formData.lastName);
        await this.emailInput.fill(formData.email);
        await this.streetInput.fill(formData.street);
        await this.cityInput.fill(formData.city);
        await this.zipCodeInput.fill(formData.zipCode);
    }

    /**
     * Clicks the submit button and returns a new instance of
     * {@link QuestionsPage}, which is the next page to be displayed.
     * @returns an instance of {@link QuestionsPage}
     */
    async clickSubmitButton() {
        await this.submitButton.click();
        return new QuestionsPage(this.page);
    }
}

/**
 * Represents the data needed to fill the form
 * contained in {@link BasicInfoPage}
 */
export interface BasicInfoForm {
    firstName: string,
    lastName: string,
    email: string,
    street: string,
    city: string,
    zipCode: string
};
