import BookingPage from '../../pages/Booking/BookingPage';
import DashBoardPage from '../../pages/Dashboard/DashboardPage';
import { BOOKING_DETAILS_DATA } from '../../support/constants';

describe('Happy path Flow of Booking a room', () => {
  const dashBoardPage = new DashBoardPage();
  const searchResultPage = new SearchResultPage();
  const hotelPage = new HotelPage();
  const bookingPage = new BookingPage();

  before(() => {
    dashBoardPage.visit();
    //Define test data
    cy.fixture(BOOKING_DETAILS_DATA).then((bookingdetails) => {
      cy.wrap({
        ...bookingdetails.validBookingDetails
      }).as('validBookingDetails');
    });
  });

  it('Verify user is able to book a room', () => {
    cy.get('@validSignUpCredentials').then((validBookingDetails) => {
      dashBoardPage.searchBoxComponent.searchForDestination({
        destination: 'New Delhi',
        date: '2023-09-01'
      })

      searchResultPage.validateAllSearchResultsContainsDestination('New Delhi');
      searchResultPage.selectHotel();

      hotelPage.hotelName().should('be.visible');
      hotelPage.reserveRoom({numberofRooms: 2});
      
      bookingPage.bookRoomAndVerify({...validBookingDetails})
    });
  });
});
