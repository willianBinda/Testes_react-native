import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native"
export default () => {
    const windowDimensions = Dimensions.get('window').width;
    const screenDimensions = Dimensions.get('screen').height;
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
    });
    console.log(dimensions.window/3)
    console.log(dimensions.screen/3)
    return (
        <View style={styles.container}>
            <View style={[styles.div,styles.div1]}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'orange'
    },
    div:{
        width:Dimensions.get('window').width/4,
        height:Dimensions.get('screen').height/8,
    },
    div1:{
        backgroundColor:'red'
    }
})