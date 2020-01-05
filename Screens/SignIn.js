import React, {useState } from 'react'
import { View,Image,ActivityIndicator} from 'react-native'
import { Button } from 'react-native-elements';
import Input from "../Input" 
import {apiKey} from "../Url"
import styles from"./ٍStyels/style"
import{setToken}from "../Token"

const SignInScreen = props=> {
const [loadind,setLoading] = useState(false)

var name,email,password = '';
var Create = ()=>{
    setLoading(true)
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
            if(!e.error){
                setToken(e.idToken ,e.expiresIn ,e.localId)
                props.navigation.navigate("HomeScreen")
            } else {
                alert("error ==> "+e.error.message)
            }
            setLoading(false)
        }).catch((e)=>{ debugger;console.log(e)})
    }else{
        setLoading(false)
        alert("Please Enter valid Values")
    }
}       

return (
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
            {loadind? <ActivityIndicator></ActivityIndicator> :
            <Button buttonStyle={{width:'100%',height:50,backgroundColor:"#1b262c"}} title="Create new account" onPress={Create}></Button>}
        </View>
    </View>
        )
    }


export default SignInScreen