import React, { Component } from 'react'
import { View, Animated, Text } from 'react-native'

class BackgroundProgress extends Component {    
    constructor(props){
        super(props)
        this.height = new Animated.Value(0)
    }
    componentDidUpdate(prevProps){
        if(prevProps.percentage !== this.props.percentage){
            Animated.timing(this.height, {
                toValue: this.props.percentage,
                duration: 500
            }).start()
        }
    }

    render(){
        const { percentage, children } = this.props
        const h = this.height.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%'] 
        })      
        const h2 = this.height.interpolate({
            inputRange: [0, 100],
            outputRange: ['100%', '0%']
        })      
        
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Animated.View style={{height: h, backgroundColor: '#3DADF2'}}/>   
                    {percentage !== 0 &&
                        <Animated.View style={{height: h2, backgroundColor: '#050101'}}/>                    
                    }                 
                </View>
                <View style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}>
                    {children}
                </View>
            </View>
        )
    }  
      
}
export default BackgroundProgress