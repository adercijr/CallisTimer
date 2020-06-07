import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = props => {
    return(
        <TouchableOpacity onPress={props.onPress} style={props.style}>
            <Text style={styles.HomeButton}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    HomeButton: {
        fontSize: 24, 
        color: '#FFF',
        fontFamily: 'Ubuntu-Regular'        
    }
})

export default Button