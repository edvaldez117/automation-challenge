import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class EmployerServicesPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyPageLoads() {
        await expect(this.page.locator('#global-nav')).toBeVisible();
    }

    async verifyUrl() {
        await expect(this.page).toHaveURL(new RegExp("https://www\.experian\.com/employer-services"));
    }
}