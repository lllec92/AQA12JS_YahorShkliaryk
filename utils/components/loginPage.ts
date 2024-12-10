import test, { Locator, Page } from "@playwright/test";

export class LoginPage {
    public constructor(private page: Page) { }

    public getContainer(): Locator {
        return this.page.locator("id=form-inner");
    }

    public getLoginInput(): Locator {
        return this.page.getByTestId("loginIdName");
    }

    public getPasswordInput(): Locator {
        return this.page.getByTestId("loginPasswordFormDialog");
    }

    public getLoginButton(): Locator {
        return this.page.getByTestId("loginButtonPrimary");
    }
    
    public async setLogin(name: string): Promise<void> {
        await test.step("Set Login on input", async () => {
            await this.getLoginInput().fill(name);
        });
    }

    public async setPassword(pass: string): Promise<void> {
        await test.step("Set Password on input", async () => {
            await this.getPasswordInput().fill(pass);
        });
    }

    public async clickOnLoginButton(): Promise<void> {
        await test.step("Click on Login button", async () => {
            await this.getLoginButton().click();
        });
    }
}
