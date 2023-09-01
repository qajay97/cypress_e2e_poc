class HotelPage {
  constructor() {
    this.hotelName = () => cy.get("#hp_hotel_name");
    this.selectRoomsDropdown = () =>
      cy.get('[data-component="hotel/new-rooms-table/select-rooms"]');
    this.reserveButton = () => cy.get("#hp_book_now_button");
  }

  reserveRoom({ numberofRooms }) {
    this.selectRoomsDropdown().select(numberofRooms);
    this.reserveButton().click();
    this.reserveButton().click();
  }
}
