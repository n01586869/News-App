import { useRef, useState } from 'react'
import { StyleSheet, Button, SafeAreaView, DrawerLayoutAndroid, View } from 'react-native';
import Stories from './Stories'
import Header from './Header'

export default function App() {

  // default headlines shown is main
  const [headlines, setHeadlines] = useState("main")
  const drawer = useRef(null)

  // view inside drawer
  drawerView = () => {
    return (
    <View style={styles.drawerView}>
      <View>
        <Button title="Main headlines" onPress={()=>{

          setHeadlines("main")
          drawer.current.closeDrawer()
          }}>
          
        </Button>
      </View>

      <View style={{marginTop: 40}}>
        <Button title="Tech headlines" onPress={()=>{

          setHeadlines("tech")
          drawer.current.closeDrawer()
          }}>
        </Button>
      </View>
    </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <DrawerLayoutAndroid ref={drawer} drawerWidth={200} drawerPosition={"left"} renderNavigationView={drawerView}>

        <View style={styles.header}>
          <Header drawer={drawer} headlines={headlines}/>
        </View>
        
        <Stories style={styles.stories} headlines={headlines}/>
        
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  stories: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1FA1C1'
  },
  drawerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C9EEF7'
  }
});
