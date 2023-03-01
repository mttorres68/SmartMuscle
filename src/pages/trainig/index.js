import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar,FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Ionicons} from '@expo/vector-icons';
import { collection, getDocs, query, where, collectionGroup, setDoc, doc, orderBy, limit } from "firebase/firestore"; 
import db from "../../config/database.js";
import auth from "../../config/firebase";
import TraingSmart from "./traingSmart";


export default function Trainig({navigation}){    
    const [treino, setTreino] = useState([])
    const uid = auth.currentUser.uid;
    let i;
    const teste = []

    const getDados = async () =>{
        const list = []        

        const querySnapshot =  query(collection(db,`/users/${uid}/treinos`), orderBy('idDay', 'asc'));
        const busca = await getDocs(querySnapshot);
        busca.forEach((b) => {
            list.push({...b.data(), id: b.id});
        })
        setTreino(list)
        console.log(treino);
    }
    console.log('---+---');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#DE4217"                
            />
            <TraingSmart />

            <View style={styles.iconContainer}>
                    <TouchableOpacity
                    onPress={getDados}
                    >
                        <Ionicons name='add-circle' size={40} color="#F65006"  />
                        <Text>Clica</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
            </View> 



            {/* <View style={styles.viewTreinos}>
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
            </View> */}
            
        </SafeAreaView>

    )
}