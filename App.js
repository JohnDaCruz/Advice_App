import { StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/components/Advice/main'

export default function App() {

  return (

    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFBD44',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#FFBD44" />
      <Main />
    </View>
  );
}
