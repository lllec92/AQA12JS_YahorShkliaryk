import { Locator, Page } from "@playwright/test";

export class Dashboard {
    public constructor(private page: Page) { }

    public getAddProjectButton(): Locator {
        return this.page.getByTestId("sidebarProjectsAddButton");
    }
}
