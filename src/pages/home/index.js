import React from "react";
import { View, Text } from "react-native";
import firebase from "../../config/firebase";

export default function Home(){
    const database = firebase.firestore()


    return (
        <View>
            <Text>
                Page inicial!
            </Text>
        </View>
    )
}