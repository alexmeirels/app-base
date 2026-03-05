import { StatusBar, useColorScheme } from 'react-native';
import { AppProviders } from './providers';
import { RootNavigator } from '../navigation/RootNavigator';
import { useMemo } from 'react';

const App = () => {
  const colorScheme = useColorScheme();
  const barStyle = useMemo(
    () => (colorScheme === 'dark' ? 'light-content' : 'dark-content'),
    [colorScheme],
  );

  return (
    <AppProviders>
      <StatusBar barStyle={barStyle} />
      <RootNavigator />
    </AppProviders>
  );
};

export default App;
