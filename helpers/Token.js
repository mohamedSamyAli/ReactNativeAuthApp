//import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-community/async-storage';



 export const setToken = async (token,expire,userId) => {
     debugger
const expirDate = new Date(new Date().getTime() +parseInt(expire)*1000)


    await AsyncStorage.setItem( 'secure_token', JSON.stringify({
        token,
        userId,
        expirDate:expirDate.toISOString()
    }));
};

 export const getToken = async () => {
    return  await AsyncStorage.getItem('secure_token');
};

 export const DeleteToken = async (token) => {
    await AsyncStorage.removeItem('secure_token');
};

// setToken('#your_secret_token');
// getToken().then(token => console.log(token)); // output '#your_secret_token'