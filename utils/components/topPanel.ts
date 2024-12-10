import { Locator, Page } from "@playwright/test";

export class TopPanel {
    public constructor(private page: Page) { }

    public getTopPanel(): Locator {
        return this.page.locator("id=top");
    }
}
