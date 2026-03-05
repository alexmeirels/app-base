/**
 * @format
 */

const { render } = require('@testing-library/react-native');
const App = require('../App').default;

jest.mock('../src/app/providers', () => {
  const ReactLib = require('react');

  const AppProviders = ({ children }: { children: unknown }) =>
    ReactLib.createElement(ReactLib.Fragment, null, children);

  return { AppProviders };
});

jest.mock('../src/navigation/RootNavigator', () => {
  const ReactNative = require('react-native');
  const ReactLib = require('react');

  const RootNavigator = () => ReactLib.createElement(ReactNative.Text, null, 'Root Navigator');

  return { RootNavigator };
});

describe('App', () => {
  it('renders RootNavigator content', () => {
    const ReactLib = require('react');
    const { getByText } = render(ReactLib.createElement(App));

    expect(getByText('Root Navigator')).toBeTruthy();
  });
});
