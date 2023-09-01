/// <reference types="Cypress" />

export default class LoginPage {
    constructor() {
        this.emailInputField = () => cy.get('input#username');
        this.passwordInputField = () => cy.get('input#password');
        this.signInButton = () => cy.get('button[type="submit"]');
        this.continueWithEmail = () => cy.get('button[type="submit"]');
        this.popUpOnHomePage = () => cy.get('div[role="dialog"] button[aria-label="Dismiss"]')
    }

    userPerformLogin({email, password}) {
        this.emailInputField().should('be.visible').type(email);
        this.continueWithEmail().should('be.visible').click();
        this.passwordInputField().should('be.visible').type(password);
        this.signInButton().should('be.visible').type(password);
    }
}