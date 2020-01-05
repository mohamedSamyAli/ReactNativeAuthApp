import React, { Component } from 'react'
import { Text, View ,Button} from 'react-native'
import{DeleteToken}from "../Token"

export default  HomeScreen=(props)=> {
 const logOut = async()=>{
    await DeleteToken()
    props.navigation.navigate("LoginScreen")
 }
        return (
            <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
                <Text style={{fontSize:50}}>HOME</Text>
                <Button title="LOG OUT" onPress={logOut}></Button>
            </View>
        )
    
}
