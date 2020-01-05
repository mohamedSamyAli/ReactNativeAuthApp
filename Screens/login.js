import React, { Component,useState } from 'react'
import { View,ActivityIndicator,StyleSheet,Image} from 'react-native'
import { Button } from 'react-native-elements';
import Input from "../Input" 
import {apiKey} from "../Url"
import{setToken}from "../Token"
import styles from"./ٍStyels/style"



const LoginScreen = props=> {
    var email,password = '';
    const [loadind,setLoading] = useState(false)
     Login = ()=>{
         debugger
        setLoading(true)
        if(email!=''&&password!=''){
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+apiKey,{
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
                if(!e.error){

                    setToken(e.idToken ,e.expiresIn ,e.localId)
                    props.navigation.navigate("HomeScreen")
                }else{
                    alert("you have Rntered invalid email or password")
                }
                setLoading(false)
            }).catch((e)=>{
                    setLoading(false)
                    alert("try agin")
            })
        }else{
            alert("Please Enter valid Email and password")
            setLoading(false)
        }
    } 
        return (
            <View style={styles.screen}>
                <View style={styles.picContainer}>
                <Image
          style={{width: '100%', height: '100%'}}
          source={require('../facebook.png')}
        />
            </View>
            <View style={styles.authContainer}>
               <Input 
               id="email"
               icon="email"
               required
               email
               placeHolder = "Email"
               keyboardType="email-address"
               onInputChange={(t)=>{email=t}}
               /> 
                <Input 
               id="Password"
               icon="textbox-password"
               required
               placeHolder = "Password"
               secureTextEntry
               onInputChange={(t)=>{password=t}}
               /> 
                  </View>
                {loadind? <ActivityIndicator></ActivityIndicator> :(
                <View style={styles.buttonContainer}  >
                <Button buttonStyle={{width:'100%',height:50,backgroundColor:"#1b262c"}}  title="Login" onPress={Login}></Button>
                <Button buttonStyle={{width:'100%',height:50}} type="clear" titleStyle={{color:"#1b262c"}} title="Sign up" onPress={()=>{ props.navigation.navigate("SignScreen")}}></Button>
                </View>
                )}
            </View>
        )
    }
export default LoginScreen


