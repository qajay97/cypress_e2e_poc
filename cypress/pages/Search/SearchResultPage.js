class SearchResultPage {
  constructor() {
    this.allSearchResult = () => cy.get('div[data-testid="title"]');
  }

  validateAllSearchResultsContainsDestination(destination) {
    this.allSearchResult().each((destinationTitle) =>
      cy.wrap(destinationTitle).should("contain.text", destination)
    );
  }

  selectHotel(title) {
    if (title) {
      this.allSearchResult().each((destinationTitle) => {
        if (destinationTitle.text().includes(title)) {
          cy.wrap(destinationTitle).click();
        }
      });
    } else {
      this.allSearchResult().eq(0).click();
    }
  }
}
