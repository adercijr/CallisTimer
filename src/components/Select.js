import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Select extends Component {

    state = {
        current: ''
    }

    componentDidMount(){
        this.setState({
            current: this.props. current
        })
    }

    handleSelect = (opt) => () => {
        this.setState({
            current: opt
        })
        if(this.props.onSelect){
            this.props.onSelect(opt)
        }
    }

    render() {      

        const { options, label } = this.props
        const { current } = this.state
        return(
            <View style={styleSelect.conteiner}>
                <Text style={styleSelect.label}>{label}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        {options.map( opt => {
                            let id = ''
                            let label = ''
                            if(typeof opt === 'string'){
                                id = opt,
                                label = opt 
                            } else if(typeof opt === 'object'){
                                id = opt.id
                                label = opt.label
                            }
                            return (
                                <TouchableOpacity key={id} onPress={this.handleSelect(id)}
                                    style={[id === current ? styleSelect.optSelect : null, styleSelect.opt]}>
                                    <Text style={styleSelect.optLabel}>{label}</Text>  
                                 </TouchableOpacity>
                            )
                        } )}                                                    
                     </View>
                </View>
            </View>
        )
    }
}

const styleSelect = StyleSheet.create({
    conteiner: {
        alignItems: 'center',
        padding: 25
    },
    label: {
        color: '#FFF',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    opt: {
        padding: 10,
        borderRadius: 5
    },
    optSelect: {
        backgroundColor: 'rgba(255,255,255, 0.8)'        
    },
    optLabel: {
        color: '#0F3236',
        fontSize: 18
    }
})

export default Select