/// <reference types="Cypress" />

export default class RegisterPage {
    constructor() {
        this.emailInputField = () => cy.get('input#username');
        this.continueWithEmailButton = () => cy.get('button[type="submit"]');
        this.passwordInputField = () => cy.get('#new_password');
        this.confirmPasswordInputField = () => cy.get('#confirmed_password');
        this.createAccountButton = () => cy.get('button[type="submit"]');
        this.popUpOnHomePage = () => cy.get('div[role="dialog"] button[aria-label="Dismiss"]')
        this.profileIconOnHomePage = () => cy.get('button[data-testid="header-profile"]');
        this.signOutTabUnderProfileIcon = () => cy.get('button[form="header-mfe-sign-out"] div:nth-child(2) span');
    }

    userPerformSignUpAndVerify({email, password}) {
        this.emailInputField().should('be.visible').type(email);
        this.continueWithEmailButton().click();
        this.passwordInputField().should('be.visible').type(password);
        this.confirmPasswordInputField().click();
        this.createAccountButton().click();

        this.popUpOnHomePage().should('be.visible').click();
        this.profileIconOnHomePage().should('be.visible').click();
        this.signOutTabUnderProfileIcon().should('have.text', 'Sign out');
    }
}