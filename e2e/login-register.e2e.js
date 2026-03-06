/* eslint-env jest */
/* global by, element, waitFor */

describe('Auth flow', () => {
  it('navigates from Login to Register', async () => {
    await waitFor(element(by.text('Login'))).toBeVisible().withTimeout(30000);
    await waitFor(element(by.text('Criar conta'))).toBeVisible().withTimeout(30000);
    await element(by.text('Criar conta')).tap();
    await waitFor(element(by.text('Cadastro'))).toBeVisible().withTimeout(30000);
  });
});
