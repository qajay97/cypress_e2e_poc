import NavigationBarComponent from "../shared-components/NavigationBarComponent";
import SearchBoxComponent from "../shared-components/SearchBoxComponent";

export default class DashBoardPage {
    constructor() {
        this.navigationBarComponent = new NavigationBarComponent();
        this.searchBoxComponent = new SearchBoxComponent();
    }

    visit() {
        cy.visit('/');
    }

    navigateToLoginPage() {
        this.navigationBarComponent.clickOnLoginBtn();
    } 
}