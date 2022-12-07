exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.telephoneInput = page.locator('[id="telephone"]');
      this.arrorBtn = page.locator(
        '[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]'
      );
      this.firstBox = page.locator('[name="otp-0"]');
      this.secondBox = page.locator('[name="otp-1"]');
      this.thirdBox = page.locator('[name="otp-2"]');
      this.fourthBox = page.locator('[name="otp-3"]');
      this.fifthBox = page.locator('[name="otp-4"]');
      this.sixthBox = page.locator('[name="otp-5"]');
    }
    async navigate() {
      await this.page.goto("https://dev.gigturbo.com/login");
    }
  };
  