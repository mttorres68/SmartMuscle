import React, { useEffect } from "react";
import { View, Text, StatusBar,TouchableOpacity } from "react-native";
import styles from "./style";
import {  onAuthStateChanged } from "firebase/auth";
import auth from "../../config/firebase.js";


export default function Home({navigation}){

    useEffect(() =>{        
        onAuthStateChanged(auth, (user) => {
            if (user) {                
                navigation.navigate("PageTrainig", {idUser: user.id})                
            }
            });
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F65006"/>
            <Text style={styles.title}>
                SmartMuscle
            </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.buttonSingUp}
                    onPress={() => navigation.navigate("SingUp")}
                    
                >
                    <Text style={styles.textButtonSingUp}>
                        Sing Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.textButtonLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}