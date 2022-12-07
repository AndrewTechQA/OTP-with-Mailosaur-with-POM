const { test, expect } = require("@playwright/test");
const assert = require("chai").assert;
const MailosaurClient = require("mailosaur");
const { LoginPage } = require("../page_objects/mailosaur.page.js");

let loginPage;
test.describe("Login with verification", () => {
  test("Login with 6-digit verification", async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.telephoneInput.fill("3103128029");
    await loginPage.arrorBtn.click();

    const mailosaur = new MailosaurClient("H2yRxCiU2PXTDkm4");
    const serverId = "vguknwcc";
    const serverDomain = "vguknwcc.mailosaur.net";
    const testStart = new Date();
    const searchCriteria = {
      sentTo: "gigturbo@" + serverDomain,
    };
    const message = await mailosaur.messages.get(serverId, searchCriteria, {
      receivedAfter: testStart,
    });
    assert.equal(message.subject, "New text message from (310) 312-8029");

    console.log(message.text.body);

    const regEx = new RegExp("([0-9]{6})");
    const matches = regEx.exec(message.text.body);
    const arr = matches[0];

    await loginPage.firstBox.fill(arr[0]);
    await loginPage.secondBox.fill(arr[1]);
    await loginPage.thirdBox.fill(arr[2]);
    await loginPage.fourthBox.fill(arr[3]);
    await loginPage.fifthBox.fill(arr[4]);
    await loginPage.sixthBox.fill(arr[5]);
    await expect(page).toHaveURL("https://dev.gigturbo.com/onboarding/inital");
  });
});
