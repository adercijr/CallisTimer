import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Title = props => {
    return(
        <View style={[stylesTitle.container, props.style]}>
            <Text style={stylesTitle.title}>{props.title}</Text>
            <Text style={stylesTitle.subtitle}>{props.subtitle}</Text>
        </View>
    )
}

const stylesTitle = StyleSheet.create({
    container : {
        alignItems: 'center'
    }, 
    title: {
        fontSize: 48,
        fontFamily: 'Ubuntu-Bold',
        color: '#FFF'
    },
    subtitle: {
        color: '#FFF',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14
    }
})

export default Title