import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import * as WebBrowser from 'expo-web-browser'



export default Story = (props) => {

    return(
        // if no image, doesn't render the story
        props.img &&
        // on press, open expo web browser to the url provided by api
        <Pressable style={styles.container} onPress={()=>{WebBrowser.openBrowserAsync(props.url)}}>
            <Image
            style={styles.img}
            source={{
                uri: props.img
            }}/>

            <View style={styles.textView}>
                <Text style={styles.title}>{props.title}</Text>
                {styles.description && <Text style={styles.description} numberOfLines={5}>{props.description}</Text>}
                <Text style={styles.source}>Source: {props.source}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 140,
        width: "95%",
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        flexDirection: "row",
        backgroundColor: '#B8D4E3',
        borderRadius: 20,
        shadowColor: "black",
        elevation: 5
    },
    img: {
        marginRight: 5,
        flexBasis: 140,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderRadius: 10,
    },
    textView: {
        width: "100%",
        flex: 1.9,
        justifyContent: "space-between",
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    description: {
        fontSize: 15,
    },
    source: {
        fontWeight: '500',
        color: '#66101F'
    },

})