import { 
    View,
    Text,
    TextBase,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    ImageBackground,
    StatusBar
    
} from "react-native";
import React, { useState, useEffect } from "react";
import auth from "../../config/firebase.js";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = ()=>{
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                // console.log(user);
                navigation.navigate("PageTrainig", {idUser: user.id})
        })
        .catch((error) => {
            console.log(error);
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });
    }

    useEffect(() =>{        
        onAuthStateChanged(auth, (user) => {
            if (user) {                
                navigation.navigate("PageTrainig", {idUser: user.id})                
            }
        });        
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <StatusBar 
            backgroundColor="#DE4217"
            />
            <ImageBackground
                source={require('../../assets/ImageBackground.png')}
                style={styles.imageBackground}
            >            
                <Text style={styles.title}>SmartMuscle</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your email"
                    placeholderTextColor="#F49D1A"
                    type="text"
                    inputMode="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="enter a passaword"
                    placeholderTextColor="#F49D1A"
                    type="text"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                { errorLogin === true
                    ?
                        <View style={styles.contentAlert}>
                            <MaterialCommunityIcons
                                name="alert-circle"
                                size={24}
                                color="#bdbdbd"
                            />
                            <Text style={styles.warningAlert}> Invalid e-mail or password</Text>
                        </View>
                    :
                        <View/>
                }
                { email === "" || password === ""
                    ?
                        <TouchableOpacity
                            disabled={true}
                            style={styles.buttonLogin}
                        >
                            <Text style={styles.textButtonLogin}> Login </Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity
                            style={styles.buttonLogin}
                            onPress={loginFirebase}
                        >
                            <Text style={styles.textButtonLogin}> Login </Text>
                        </TouchableOpacity>
                }
                <Text style={styles.registration}>
                    Don't have a registration?
                    <Text                        
                        style={styles.linkSubscribe}
                        onPress={() => navigation.navigate("SingUp")}
                    >
                        subscribe now...
                    </Text>
                </Text>
                <View style={{height: 100}}/>
        </ImageBackground>

        </KeyboardAvoidingView>
    );
}