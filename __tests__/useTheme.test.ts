import { renderHook } from '@testing-library/react-native';
import { useTheme } from '../src/hooks/useTheme';

describe('useTheme', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns dark when the device uses dark mode', () => {
    const reactNative = require('react-native');

    jest.spyOn(reactNative, 'useColorScheme').mockReturnValue('dark');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toBe('dark');
  });

  it('returns light when the device does not use dark mode', () => {
    const reactNative = require('react-native');

    jest.spyOn(reactNative, 'useColorScheme').mockReturnValue('light');

    const { result } = renderHook(() => useTheme());

    expect(result.current).toBe('light');
  });
});
