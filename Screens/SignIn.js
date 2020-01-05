import React, { Component,useState } from 'react'
import { View,Image,KeyboardAvoidingView} from 'react-native'
import { Button } from 'react-native-elements';
import Input from "../Input" 
import {apiKey} from "../Url"
import styles from"./ٍStyels/style"

const SignInScreen = props=> {
var name,email,password = '';
var Create = ()=>{
    if(name!=''&&email!=''&&password!=''){
        debugger;
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+apiKey,{
           method:'POST',
           headers:{
               'content-Type':'application/json'
           },
           body: JSON.stringify({
               email:email,
               password:password,
               returnSecureToken:true
           }) 
        }).then((resp) => resp.json()).then((e)=>{
            setToken(e.idToken ,e.expiresIn ,e.localId)
            console.log(e)
            props.navigation.navigate("HomeScreen")
        }).catch((e)=>{console.log(e)})
    }
}       

return (
<KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={{flex:1}}
    >
    <View style={styles.screen}>
        <View style={styles.picContainer}>
            <Image
                style={{ width: '100%', height: '100%' ,borderRadius:50}}
                source={require('../facebook.png')}
            />
        </View>
        <View style={styles.authContainer}>
            <Input
                id="email"
                required
                icon="email"
                email
                placeHolder="Email"
                keyboardType="email-address"
                onInputChange={(t) => { email = t }}
                errorText="enterValed;elwfskd;l"
            />
            <Input
                icon="alarm"
                id="userName"
                required

                placeholder="UserName"
                keyboardType="email-address"
                onInputChange={(t) => { name = t }}
                errorText="enterValed;elwfskd;l"
            />
            <Input
                id="Password"
                icon="textbox-password"
                required
                placeHolder="Password"
                secureTextEntry
                onInputChange={(t) => { password = t }}
                errorText="enterValed;elwfskd;l"
            />
            </View>

            <View style={styles.buttonContainer}  >
                <Button buttonStyle={{width:'100%',height:50,backgroundColor:"#1b262c",color:"#ffffff"}} title="Create new account" onPress={Create}></Button>
        </View>
    </View>
    </KeyboardAvoidingView>
        )
    }


export default SignInScreen