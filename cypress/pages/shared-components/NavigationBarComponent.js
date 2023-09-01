export default class NavigationBarComponent {
    
    constructor() {
        this.registerBtn = () => cy.get('a[data-testid="header-sign-up-button"]').should('be.visible');
        this.loginBtn = () => cy.get('a[data-testid="header-sign-in-button"]').should('be.visible');
    }
    
    clickOnRegisterBtn() {
        this.registerButton().should('have.text', 'Register').click();
    }

    clickOnLoginBtn() {
        this.loginBtn().should('have.text', 'Sign in').click({ force: true });
    }
    
}