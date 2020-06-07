import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import Button from '../components/Button'

const HomeScreen = props => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.HomeContent}>CalisTimer</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>
                <Button style={styles.btn} onPress={() => props.navigation.navigate('AMRAP')}>AMRAP</Button>
                <Button style={styles.btn} onPress={() => props.navigation.navigate('Isometria')}>Isometria</Button>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1, 
        backgroundColor: '#3DADF2', 
        justifyContent: 'space-around', 
        alignItems: 'center',        
    },
    HomeContent: {
        fontFamily: 'Ubuntu-Bold', 
        fontSize: 48, 
        textAlign: 'center',
        color: '#FFF'        
    },
    btn: {         
        padding: 24
    },
  })

export default HomeScreen