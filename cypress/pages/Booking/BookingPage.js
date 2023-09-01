export default class BookingPage {
    constructor() {
        this.firstSearchResult = () => cy.get('div[data-testid="title"]');
        this.selectRoomCount = () => cy.get('span[data-testid="select-room-trigger"]');
        this.reserveButton = () => cy.get('button#hp_book_now_button');
        this.firstNameField = () => cy.get('input#firstname');
        this.lastNameField = () => cy.get('input#lastname');
        this.mainGuestCheckBox = () => cy.get('input[name="notstayer"]');
        this.finalDetailsButton = () => cy.get('button[name="book"]');
        this.phoneNumberField = () => cy.get('input#phone');
        this.completeButton = () => cy.get('button[name="book"]')
    }

    bookRoomAndVerify({
        firstName,
        lastName,
        email,
        bookingfor,
        phoneNo
    }) {
        this.firstNameField().type(firstName);
        this.lastNameField().type(lastName); 
        this.mainGuestCheckBox().eq(0).click()
        this.finalDetailsButton().click();
        this.phoneNumberField().type(phoneNo); 
    }

    selectDestinationField() {
        cy.get('div[role="dialog"] button').eq(0).click();
        cy.get(this.destinationInput).click();
        cy.get(this.selectDestinationOption).click();
    }
} 