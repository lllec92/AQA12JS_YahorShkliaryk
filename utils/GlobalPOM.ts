import { LoginPage } from "./components/loginPage";
import { Page } from "@playwright/test";
import { TopPanel } from "./components/topPanel";
import { Dashboard } from "./components/dashboard";

/*
* Common actions for common Abstract Game functionality
* */
export class TestRailPage {
    public loginPage: LoginPage;
    public topPanel: TopPanel;
    public dashboard: Dashboard;


    public constructor(private page: Page) {
        this.loginPage = new LoginPage(page);
        this.topPanel = new TopPanel(page);
        this.dashboard = new Dashboard(page);
    }

}
