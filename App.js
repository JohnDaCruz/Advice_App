import { StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/components/Advice/main'

export default function App() {

  return (

    <View style={styles.container}>
      <StatusBar style={"dark"} backgroundColor="#F5F5F5" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFBD44',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
