{/*

import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar,FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import {Ionicons} from '@expo/vector-icons';

import db from "../../config/database.js";

import { collection, getDocs, query, where, collectionGroup, setDoc, doc, orderBy } from "firebase/firestore"; 

import auth from "../../config/firebase";

export default function TrainigDetails({navigation}){
    const Cards = [
        {
            id:'1',
            diaSemana: 'Segunda',
            exercicio:'treino 01',
            treinoa:[
                {
                    nomeTreino: 'supino',
                    serei:{
                        rept: '12kg',
                        rept: '10kg',
                        rept: '10kg'
                    },
                },
            ],

        },
        {
            id:'2',
            diaSemana: 'Terca',
            exercicio:'treino 02'
        },
    ]
    
    // const database = auth.app.
    const [treino, setTreino] = useState([])

    const Item = ({diaSemana, treinoa, nomeTreino, exercicio}) => (
            <View style={styles.cardTrainig}>
                <Text style={styles.diaSemana}>{diaSemana}</Text>
                <Text>{nomeTreino}</Text>
                {treinoa && treinoa.map((x, index) => (                    
                    <View>
                        <Text key={index}>{x.nomeTreino}</Text>
                        <Text key={`${index+1}`}>{x.serei.rept}</Text>
                    </View>
                    
                ))}
                <Text>{exercicio}</Text>
                
            </View>        
    )

    const uid = auth.currentUser.uid;
    let i;
    const teste = []
    for(i = 0; i < 3; i++ ){
        teste.push(`rept${i}` )
    }

    console.log(teste);

    const addDados = async ()=>{

        const test = doc(collection(db, 'users', uid, 'treinos', 'segunda', 'treino'))

        const msg = {
            diaSemana: 'seg',
            nomeTreino: 'Supino reto',
            teste,
            serie:[
                {
                    rept10: '10kg',
                    rept12: '12kg',
                    rept15: '14kg',
                }
            ]
            
        }

        // await setDoc(test, msg)

        // await setDoc(doc(db, 'users',`${uid}`, 'treino'), {
        //     dataNascimento:'teste',
        //     nome:'teste',
        //     sobrenome:'teste'
        // })

        const querySnapshot = await getDocs(collection(db, `/users/${uid}/treinos`), orderBy('nomeExercicio'));
        const list = []        
        
        // querySnapshot.forEach((dc) => {
        //     console.log(`${dc.id} => ${dc.data()}`);
        //     list.push({...dc.data(), id: dc.id});

        // })

        const q = query(collection(db,`/users/${uid}/treinos`), orderBy('nomeExercicio'));
        const busca = await getDocs(q);
        busca.forEach((b) => {
            list.push({...b.data(), id: b.id});
            // console.log(b.id, " => ", b.data());
        })

        setTreino(list)
    }

    

    const renderItem = ({item}) => <Item {...item} />
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
                    data={treino}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                {item.diaSemana}
                            </Text>
                            <Text>
                                
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>      
            <View style={styles.containerTrainig}>
            <View style={styles.containerTextSmarMuscle}>
                    <Text style={styles.textTreinoSmartMuscle}>
                        Meu Treino 
                    </Text>
            </View>
                <FlatList
                    data={treino}
                    renderItem={({item}) => <Item diaSemana={item.id} exercicio={item.sobrenome} dua={item.treino}/>}
                    keyExtractor={(item) => item.id}
                />
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={addDados}
                    >
                        <Ionicons name='add-circle' size={40} color="#F65006"  />
                    </TouchableOpacity>
                </View>
            </View>      
            
        </SafeAreaView>

    )
    }

*/}