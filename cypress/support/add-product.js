// Professional Class-based structure for Cypress Login Tests
import { selectors } from '../helper/selector/selectors';

export class DashboardLogin {
  constructor() {
    this.baseUrl = 'https://recruitment-staging-queenbee.paradev.io/';
    this.currentUrl = '';
  }

  // Navigation Methods
  async gotoUrl(url = this.baseUrl) {
    cy.visit(url);
    cy.wait(2000);
    this.currentUrl = url;
    return this;
  }

  async clickTopRightLoginButton() {
    cy.get('body').click('topRight');
    return this;
  }

  // Input Methods
  async inputEmail(email) {
    cy.xpath(selectors.loginPage.emailInput)
      .should('be.visible')
      .clear()
      .type(email);
    return this;
  }

  async inputPhone(phone) {
    console.log(selectors.loginPage.phoneInput);
    cy.xpath(selectors.loginPage.phoneInput)
      .should('be.visible')
      .clear()
      .type(phone);
    return this;
  }

  async inputPassword(password) {
    cy.xpath(selectors.loginPage.passwordInput)
      .should('be.visible')
      .clear()
      .type(password);
    return this;
  }

  // Click Methods
  async clickLoginButton() {
    cy.xpath(selectors.landingPage.loginButton)
      .should('be.visible')
      .click();
    return this;
  }

  async clickSubmitButton() {
    cy.xpath(selectors.loginPage.submitButton)
      .should('be.visible')
      .should('not.be.disabled')
      .click();
    return this;
  }

  async clickMasuk() {
    cy.xpath(selectors.landingPage.textMasuk).should('be.visible').click();
    return this;
  }

  async clickProdukTitle() {
    cy.xpath(selectors.produkPage.produkTitle).should('be.visible').click();
    return this;
  }

  async clickButtonBuyNow() {
    cy.xpath(selectors.produkPage.buttonBuyNow).should('be.visible').click();
    return this;
  }

  async verifyPopUpSuccessAddProduct() {
    cy.xpath(selectors.produkPage.popUpSuccessAddProduct).should('be.visible');
    return this;
  }

  async verifyLoginPageLoaded() {
    cy.xpath(selectors.loginPage.formContainer).should('be.visible');
    cy.xpath(selectors.loginPage.emailInput).should('be.visible');
    cy.xpath(selectors.loginPage.passwordInput).should('be.visible');
    return this;
  }

  async verifyErrorMessage(expectedText) {
    cy.xpath(selectors.loginPage.errorMessage)
      .should('be.visible')
      .should('contain.text', expectedText);
    return this;
  }

  async waitForPageLoad(timeout = 3000) {
    cy.wait(timeout);
    return this;
  }

  async waitForElement(selector, timeout = 5000) {
    cy.xpath(selector, { timeout }).should('be.visible');
    return this;
  }

  // Validation Methods

  async verifySuccessfulLogin() {
    cy.xpath(selectors.produkPage.produkTitle).should('be.visible');
    return this;
  }

  async verifyCekPesananTitle() {
    cy.xpath(selectors.cekPesananPage.cekPesananTitle).should('be.visible');
    return this;
  }

  async verifyLoginErrorEmptyPassword() {
    cy.xpath(selectors.loginPage.errorMessage).should('contain.text', 'Mohon lengkapi password kamu');
  }
  async verifyLoginErrorEmptyPhoneNumber() {
    cy.xpath(selectors.loginPage.errorMessage).should('contain.text', 'Mohon lengkapi nomor handphone kamu');
  }

  async verifyLoginErrorEmptyEmail() {
    cy.xpath(selectors.loginPage.errorMessage).should('contain.text', 'Mohon lengkapi email kamu');
  }

  async verifyLoginErrorEmptyAllField() {
    cy.xpath(selectors.loginPage.errorMessage).should('contain.text', 'Please fill in all fields');
  } 

  async verifyLoginErrorWrongPasswordEmailPhone() {
    cy.xpath(selectors.loginPage.errorMessage).should('contain.text', 'Nomor telepon atau password salah. Coba ulangi.');
  }

}

// Export instance for easier usage
module.exports = { DashboardLogin };
