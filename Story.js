import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'



export default Story = (props) => {
    return(
    <SafeAreaView style={styles.container}>
        <Image
        style={styles.img}
        source={{
            uri: "https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        ></Image>
        <View style={styles.textView}>
            <Text style={styles.title}>{props.title}</Text>
            {styles.description && <Text style={styles.description}>{props.description}</Text>}
            <Text style={styles.source}>Source: {props.source}</Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: "95%",
        alignSelf: 'center',
        marginTop: 40,
        flexDirection: "row",
        // borderColor: 'black',
        // borderWidth: 1,
        backgroundColor: '#EEFFDB',
        borderRadius: 20,
        shadowColor: "black",
        elevation: 5
    },
    img: {
        marginRight: 5,
        width: 140,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderRadius: 10,
        flex: 1,

        // borderColor: "black",
        // borderWidth: 1,
    },
    textView: {
        // borderColor: "black",
        // borderWidth: 1,
        width: "100%",
        flex: 1.9,
        justifyContent: "space-between"
    },
    title: {
        // borderColor: "black",
        // borderWidth: 1,
        marginTop: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    description: {
        // borderColor: "black",
        // borderWidth: 1,
        fontSize: 15
    },
    source: {
        // borderColor: "black",
        // borderWidth: 1,
        // fontSize: 14
        color: '#66101F'
    },

})