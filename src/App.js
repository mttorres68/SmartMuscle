import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SmartMuscle
        </Text>
      <StatusBar style="auto" backgroundColor='#F65006'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F65006',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
  },
  title:{
    color: '#FFF',
    fontSize: 70,
  }
});
