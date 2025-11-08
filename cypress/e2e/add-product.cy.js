// Clean class-based test structure like Playwright
import { DashboardLogin } from '../support/add-product';

let dashboardLogin;
describe('Dashboard Login Tests - Class Based', () => {
  beforeEach(() => {
    // Load test data
    cy.fixture('users.json').as('userData');
    dashboardLogin = new DashboardLogin();
  });

  it('Add Product to Cart', function() {
    const { validUser } = this.userData;

    // Clean and readable test flow
    dashboardLogin.gotoUrl();
    dashboardLogin.clickTopRightLoginButton();
    dashboardLogin.clickMasuk();
    dashboardLogin.inputPhone(validUser.phoneNumber);
    dashboardLogin.inputPassword(validUser.password);
    dashboardLogin.clickSubmitButton();
    dashboardLogin.verifySuccessfulLogin();
    dashboardLogin.clickProdukTitle();
    dashboardLogin.clickButtonBuyNow();
    dashboardLogin.verifyPopUpSuccessAddProduct();
    dashboardLogin.verifyCekPesananTitle();
  });


});