import { Page } from "@playwright/test";

/**
 * Contains the needed property and method
 * that all pages should have.
 */
export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    /**
     * Verifies if page loaded by checking for
     * the presence of an element.
     */
    abstract verifyPageLoads(): void;
}
