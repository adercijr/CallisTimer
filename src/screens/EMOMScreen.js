import React , { Component } from 'react'
import {Keyboard, ScrollView, View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView} from 'react-native'
import Select from '../components/Select'
import Title from '../components/Title'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Time from '../components/Time'
import ProgressBar from '../components/ProgressBar'
import BackgroundProgress from '../components/BackgroundProgess'
import Sound from 'react-native-sound'

const alert = require('../../assets/sounds/alert.wav')

class EMOMScreen extends Component {

    state = {
        keyboardIsVisible: false,
        alerts: [15],
        coutdown: 1,
        coutdownValue: 5,
        count : 0,
        time: '5',
        isRunning: false
    }

    componentDidMount(){
        Sound.setCategory('Playback', true)
        this.alert = new Sound(alert)

        this.KbShow = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({ keyboardIsVisible: true })
        })
        this.KbHide = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({ keyboardIsVisible: false })
        })        
    }

    componentWillUnmount(){
        this.KbShow.remove()
        this.KbHide.remove()
    }        

    play = () => {
        this.setState({
            count: this.state.time*60
        })
        const countTimer = () => {
            this.setState({ x: parseInt(this.state.time)*60 })
            const Count = setInterval(() => {
                this.setState({ count: this.state.count -1 }, () => {
                    if(this.state.count % this.state.alerts === 0){
                        this.alert.play()
                    }
                    if(this.state.count === 0 ){
                        clearInterval(Count)
                    }
                })
            }, 1000)
        }        
        this.setState({ isRunning: true })
        if(this.state.coutdown === 1){            
            const countDownTimer = setInterval(() => {                
                this.setState({ coutdownValue: this.state.coutdownValue - 1 }, () => {                    
                    this.alert.play()
                    if(this.state.coutdownValue === 0){
                        countTimer()                        
                        clearInterval(countDownTimer)
                    }
                })                                   
            }, 1000)            
        } else {
            countTimer()
        }
    }

    render() {
        const percMinute = (this.state.count % 60)/60*100
        const perctTime = (this.state.count/60) / parseInt(this.state.time)*100

        if(this.state.isRunning){
            return(
                <BackgroundProgress percentage={percMinute}>
                    <View style={{flex: 1}}>
                        <Title title={'EMOM'} subtitle={'Every minutes  on the minutes'} 
                        style={{ paddingTop: this.state.keyboardIsVisible ? 10 : 100 }}/>                    
                        <Time time={parseInt(this.state.time)*60 - this.state.count} />
                        <ProgressBar percentage={perctTime}/>
                        <Time time={this.state.count} type='timer2' text='restantes'/>
                        <Text>{this.state.coutdownValue}</Text>
                        <Text style={{color: '#fff'}}>Minute: {percMinute}</Text>
                        <Text>Time: {perctTime}</Text>
                    </View>
                </BackgroundProgress>
            )
        }       

        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
            <ScrollView style={styles.container}>
                <Title title={'EMOM'} subtitle={'Every minutes  on the minutes'} 
                    style={{ paddingTop: this.state.keyboardIsVisible ? 10 : 100 }}/>
                <Image source={require('../../assets/settings-cog.png')} 
                    style={{ alignSelf: 'center', margin: this.state.keyboardIsVisible ? 10 : 30}}/>
                <Select label={'Alertas'}
                    current={this.state.alerts}
                    options={[{
                        id: 0,
                        label: '0s'
                    },{
                        id: 15,
                        label:'15s'
                    }, {
                        id: 30,
                        label: '30s'
                    }, {
                        id: 45,
                        label: '45s'
                    }
                ]}
                    onSelect={ opt => this.setState({ alerts: opt}) }
                />
                <Select label={'Contagem regressiva'}
                    current={this.state.coutdown}
                    options={[{id: 1, label: 'sim'}, {id: 0, label: 'não'}]}
                    onSelect={ opt => this.setState({ coutdown: opt }) }
                />
                <View style={styles.content}>
                    <Text style={styles.label}>Tempo em Minutos</Text>
                    <TextInput style={styles.number} keyboardType='numeric' value={this.state.time} 
                        onChangeText={ text => this.setState({ time: text })}/>
                </View>
                <TouchableOpacity onPress={this.play} 
                    style={{ alignSelf: 'center', marginBottom: this.state.keyboardIsVisible ? 60 : 0,
                    marginTop: this.state.keyboardIsVisible ? 10 : 0}}>
                    <Image source={require('../../assets/btn-play.png')}/>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#3DADF2'        
    },


    content: {
        alignItems: 'center'
    },
    label: {
        color: '#FFF',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24
    },
    number: {
        fontSize: 54,
        fontFamily: 'Ubuntu-Regular',
        color: '#0F3236'
    }
    
  })


export default EMOMScreen

