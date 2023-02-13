import React from "react";
import { View, Text, SafeAreaView, StatusBar,ScrollView } from "react-native";
import styles from "./styles";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { AppBar } from "@react-native-material/core";


export default function TrainigDetails({navigation}){

    const  iconPress = () => {        
        console.log("icons presionado");
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
            <ScrollView style={styles.containerTrainig}>
                <View style={styles.viewList}>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                    <View style={styles.trainig}>
                        <Text style={styles.details}>Segunda</Text>
                    </View>
                </View>
            </ScrollView>

            <Text>
                Page training
                
            </Text>
            
            {/* <View style={styles.appBar}>
                <View>
                    <MaterialIcons 
                        name="data-usage" 
                        size={35} 
                        color="#F2F2F2" 
                        onPress={() => navigation.navigate('TrainigData')} 
                    />
                </View> 
                <View>
                    <AntDesign name="home" size={35} color="#F2F2F2" />
                </View>
                
                <View>
                <AntDesign name="user" size={35} color="#F2F2F2" />

                </View>
                
            </View> */}
        </SafeAreaView>

    )
}