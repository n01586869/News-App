import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'



export default Header = (props) => {

  const [headerTitle, setHeaderTitle] = useState("");

  // each time headline gets set (by button in drawer), change the header text
  useEffect(()=>{
        
    switch(props.headlines){

        case "main":
            setHeaderTitle("TrueNews - Latest")
            break
        case "tech":
          setHeaderTitle("TrueNews - Latest in Tech")
            break

    }
    
  }, [props.headlines])

    return (
    <View style={styles.container}>
      {/* menu is just hamburger icon */}
      <MaterialIcons name='menu' color={'white'} size={28} onPress={()=>{props.drawer.current.openDrawer()}} />
      <Text style={styles.headerText}>{headerTitle}</Text>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },

    headerText: {
      marginLeft: 40,
      fontSize: 20,
      color: 'white'
    }

  })