// XPath Selectors for Beyondly Recruitment Portal
export const selectors = {
  // Main Landing Page
  landingPage: {
    textMasuk: `//a[text()='Masuk']`
  },

  // Login Page
  loginPage: {
    emailInput: "//input[@id='page-login__tabs-number__input-number']",
    phoneInput: "//input[@type='number']",
    passwordInput: "//input[@type='password']",
    submitButton: "//button[@type='button' and text()='Masuk']",
    formContainer: "//form",
    errorMessage: "//p[contains(@style, 'color: red')]",
    rememberMeCheckbox: "//input[@type='checkbox' and contains(@name, 'remember')]",
    forgotPasswordLink: "//a[contains(@href, 'forgot-password')]"
  },

  // Common Elements
  common: {
    popup: "//section[@class='chakra-modal__content styles_container__spO5w css-hxtskf']"
  },

  // Produk Page
  produkPage: {
    produkTitle: "//a[text()='Produk']",
    buttonBuyNow: "//p[text()='package QA']//following::button[text()='Beli sekarang'][1]",
    popUpCommisionProduct: "//section[@id='chakra-modal-74']",
    checkboxCommisionProduct: "//section[@id='chakra-modal-74']//input[@type='checkbox']",
    buttonBeliSekarang: "//section[@id='chakra-modal-74']//button[text()='Beli sekarang']",
    popUpSuccessAddProduct: "//ul[@id='chakra-toast-manager-top']//p[text()='Paket ditambah ke keranjang']",
  },

  // Cek Pesanan Page
  cekPesananPage: {
    cekPesananTitle: "//p[text()='Cek Pesanan']",
  }
};

// Helper function to get selector by key path
export const getSelector = (path) => {
  const keys = path.split('.');
  let current = selectors;
  for (const key of keys) {
    current = current[key];
  }
  return current;
};