/* eslint-env jest */
/* global by, element, waitFor */

describe('Auth flow', () => {
  it('navigates from Login to Register', async () => {
    await waitFor(element(by.id('login-screen-title'))).toBeVisible().withTimeout(30000);
    await waitFor(element(by.id('go-to-register-button'))).toBeVisible().withTimeout(30000);
    await element(by.id('go-to-register-button')).tap();
    await waitFor(element(by.id('register-screen-title'))).toBeVisible().withTimeout(30000);
  });
});
