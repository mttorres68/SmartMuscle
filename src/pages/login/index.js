import { 
    View,
    Text,
    TextBase,
    TouchableOpacity,
    KeyboardAvoidingView
    
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = ()=>{

    }

    useEffect

    return (
        <View>
            <Text>
                Page de Login!
            </Text>
        </View>
    )
}