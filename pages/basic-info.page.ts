import { type Locator, Page, expect } from "@playwright/test";

export class BasicInfoPage {
    private page: Page;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private emailInput: Locator;
    private streetInput: Locator;
    private cityInput: Locator;
    private zipCodeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.emailInput = page.getByLabel('Email Address');
        this.streetInput = page.getByLabel('Street Address');
        this.cityInput = page.getByLabel('City');
        this.zipCodeInput = page.getByLabel('Zip Code');
    }

    async verifyPageLoaded() {
        await expect(this.page.getByText('Let’s begin by getting some basic information!')).toBeVisible();
    }

    async fillForm(formData: { firstName: string, lastName: string, email: string, street: string, city: string, zipCode: string }) {
        await this.firstNameInput.fill(formData.firstName);
        await this.lastNameInput.fill(formData.lastName);
        await this.emailInput.fill(formData.email);
        await this.streetInput.fill(formData.street);
        await this.cityInput.fill(formData.city);
        await this.zipCodeInput.fill(formData.zipCode);
    }
    
}