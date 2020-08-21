import * as firebase from 'firebase';
import { presentToast } from './toats';

const config = {
    apiKey: "AIzaSyAlxDVrYReJG0osLDM2Mh75IocGr8MRb8w",
    authDomain: "very-deli.firebaseapp.com",
    databaseURL: "https://very-deli.firebaseio.com",
    projectId: "very-deli",
    storageBucket: "very-deli.appspot.com",
    messagingSenderId: "624271224338",
    appId: "1:624271224338:web:c4d08340333836f2f432cb"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string){
    // build email address from username
    const email = `${username}@verydeli.com`;

    try{
        const res = await firebase.auth().signInWithEmailAndPassword( email, password);
        console.log(res);
        return true;
    }catch(error){
        presentToast(error.message,4000)
        return false;
    }

}

export async function registerUser(username: string, password: string){
    // build email adsress from username
    const email = `${username}@verydeli.com`;

    try{
        const res = await firebase.auth().createUserWithEmailAndPassword( email, password )
        return true;
    }catch(error){
        presentToast(error.message,4000)
        return false;
    }

}