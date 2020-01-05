import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import{DeleteToken}from "../Token"

export default  HomeScreen=(props)=> {
 const logOut = async()=>{
    await DeleteToken()
    props.navigation.navigate("LoginScreen")
 }
        return (
            <View>
                <Text> Home </Text>
                <Button title="home" onPress={logOut}></Button>
            </View>
        )
    
}
