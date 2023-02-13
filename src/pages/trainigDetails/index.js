import React from "react";
import { View, Text, SafeAreaView, StatusBar,FlatList } from "react-native";
import styles from "./styles";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { AppBar } from "@react-native-material/core";




export default function TrainigDetails({navigation}){
    const Cards = [
        {
            id:'1',
            diaSemana: 'Segunda',
            exercicio:'treino 01'
        },
        {
            id:'2',
            diaSemana: 'terca',
            exercicio:'treino 02'
        },
        {
            id:'3',
            diaSemana: 'quarta',
            exercicio:'treino 03'
        },
        {
            id:'4',
            diaSemana: 'quinta',
            exercicio:'treino 04'
        },
    ]
    
    const Item = ({diaSemana, exercicio}) => {
        <View style={styles.item}>
            <Text style={styles.title}>{diaSemana}</Text>
            <Text>{exercicio}</Text>
        </View>
    }

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
            <View style={styles.ctr}>
                <FlatList
                    data={Cards}
                    renderItem={({item}) => <Item diaSemana={item.diaSemana} exercicio={item.exercicio} />}
                    keyExtractor={(item) => item.id}
                />
            </View>      
            
        </SafeAreaView>

    )
}