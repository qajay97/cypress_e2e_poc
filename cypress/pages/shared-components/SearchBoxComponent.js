export default class SearchBoxComponent {
    constructor() {
        this.destinationInput = () => cy.get('input[name="ss"]');
        this.selectDestinationOption = () => cy.get('div[data-testid="autocomplete-results"] li:nth-child(2)');
        this.selectDateInput = () => cy.get('div[data-testid="searchbox-dates-container"]')
        this.searchButton = () => cy.get('button[type="submit"] span');
        this.dateToSelect = (date) => cy.get(`[data-date="${date}"]`);
    }
    selectDestinationField(destination) {
        this.destinationInput().type(destination);
        this.selectDestinationOption().click();
    }

    selectDate(date) {
        this.dateToSelect(date);
    }

    searchForDestination({destination, date}) {
        this.selectDestinationField(destination);
        this.selectDestinationField(date);
    }
}