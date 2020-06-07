import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Time = props => {
    const minutes = parseInt(props.time / 60)
    const seconds = props.time % 60
    const format = num => {
        if(num < 10) {
            return '0'+num
        } return num
    }

    return(
        <Text style={styles[props.type ? props.type : 'timer']}>
            {format(minutes)}:{format(seconds)}{' '}{props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    timer: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 96,
        textAlign: 'center',
        color: '#FFF'    
    },
    timer2: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        color: '#FFF',
        textAlign: 'center'

    }
})
export default Time