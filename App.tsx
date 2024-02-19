
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';



function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;
