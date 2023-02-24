import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar,FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Ionicons} from '@expo/vector-icons';

import db from "../../config/database.js";

import { collection, getDocs, query, where, collectionGroup, setDoc, doc, orderBy } from "firebase/firestore"; 

import auth from "../../config/firebase";

export default function TrainigDetails({navigation}){    
    const [treino, setTreino] = useState([])
    const uid = auth.currentUser.uid;
    let i;
    const teste = []
    const renderItem = ({item}) => <Item {...item} />

    for(i = 0; i < 3; i++ ){
        teste.push(`rept${i}` )
    }

    console.log(teste);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#DE4217"                
            />
            <View style={styles.viewTitle}>
                <Text style={styles.title}>
                    SmartMuscle
                </Text>
            </View>
            <View style={styles.viewTreinos}>
                <Text style={styles.textTreinos}>
                    Treinos
                </Text>
            </View>
            <View style={styles.containerTrainig}>
                <View style={styles.containerTextSmarMuscle}>
                    <Text style={styles.textTreinoSmartMuscle}>
                        Treino SmartMuscle
                    </Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                />
            </View>      
            <View style={styles.containerTrainig}>
            <View style={styles.containerTextSmarMuscle}>
                    <Text style={styles.textTreinoSmartMuscle}>
                        Meu Treino 
                    </Text>
            </View>
                <FlatList
                />
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                    >
                        <Ionicons name='add-circle' size={40} color="#F65006"  />
                    </TouchableOpacity>
                </View>
            </View>      
            
        </SafeAreaView>

    )
}