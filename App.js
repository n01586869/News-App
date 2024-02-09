import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TopCanadianStories from './menus/TopCanadianStories'
import Story from './Story'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TopCanadianStories />
      {/* <Story /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
