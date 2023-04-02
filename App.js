import { StyleSheet, View} from 'react-native';
import Main from './src/components/Advice/main'

export default function App() {

  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#FFBD44',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
