import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import{getToken}from "../Token"
import { Button } from 'react-native-elements';
import styles from"./ٍStyels/style"

const startScreen= props => {

const start =async()=>{
    debugger
const TokenData = await getToken();
console.log(TokenData)
debugger
if(!TokenData){
    props.navigation.navigate("LoginScreen")
return;
}
const {token,userId,expirDate} = JSON.parse(TokenData)
const date_experition = new Date(expirDate)
if(date_experition <= new Date() || !token || !userId){
    props.navigation.navigate("LoginScreen")
    return;
}
    props.navigation.navigate("HomeScreen")
}
        return (
            <View style={{alignItems: 'center',justifyContent:'space-between',flex:1,backgroundColor:"red"}}>
                <View style={styles.picContainer}>
                <Image
          style={{width: '100%', height: '100%'}}
          source={require('../facebook.png')}
        />
                </View>
                <View style={styles.buttonContainer}  >
                <Button buttonStyle={{width:'100%',backgroundColor:"#1b262c",color:"#ffffff"}} type="solid" title="Start" onPress={start}></Button>
                </View>
            </View>
        )
    }


export default  startScreen