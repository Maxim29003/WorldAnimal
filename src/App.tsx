import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@routes/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <SafeAreaProvider>
      <NavigationContainer
        onReady={async () => {
          await BootSplash.hide({ fade: true });
        }}
      >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
    </ErrorBoundary>
  );
}

export default App;
