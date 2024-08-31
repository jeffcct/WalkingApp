import {ActivityIndicator, Text, View, TextInput, Button} from "react-native";
// import React from 'react';
import {FIREBASE_AUTH } from '../FirebaseConfig.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";

const LoginScreen = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;



    const login = async () => {
        setLoading(true);
        try {
            const response = signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error.message);
            alert("Login Failed: " + error.message);
        }
    }

    const register = async () => {
        setLoading(true);
        console.log(password);
        console.log(email);
        try { 
            const response = await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert("failed: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
    <View>
        <TextInput value={email} placeholder="Email" onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput secureTextEntry={true} value={password} placeholder="Password" onChangeText={(text) => setPassword(text)}></TextInput>
        {loading ? (<ActivityIndicator size="large"/>) :
        (<>
            <Button title='Login' onPress={() => login()} />
            <Button title='Register' onPress={() => register()} />
        </>)
        }
    </View>);
}

export default LoginScreen;
