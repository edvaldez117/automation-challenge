import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

/**
 * Basic representation of EmployerServicesPage
 */
export class EmployerServicesPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyPageLoads() {
        await expect(this.page.locator('#global-nav')).toBeVisible();
    }

    /**
     * Verifies current URL corresponds to {@link https://www.experian.com/employer-services}
     */
    async verifyUrl() {
        // Using regular expression here to avoid issues with query params
        await expect(this.page).toHaveURL(new RegExp("https://www\.experian\.com/employer-services"));
    }
}
