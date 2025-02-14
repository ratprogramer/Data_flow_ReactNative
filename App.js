import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ 
        color: '#ccc', 
        fontSize: 30, 
        fontFamily: 'System', 
        fontWeight: 'bold' 
      }}
      >
          Data Flow Analytics
      </Text>
      <Text style={{ color: '#ccc', fontSize: 30 }}>In Progress...</Text>
      <Ejem />
    </View>

  );
}

const Ejem = () => {
  return (
    <View>
      <Text style={{ color: '#ccc', fontSize: 5 }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
