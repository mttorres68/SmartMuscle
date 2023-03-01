import react from "react"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"


const Componet = () =>{

    return(
        <View style={styles.container}>
            <View style={styles.containerDayWeek}>
                <TouchableOpacity ><Text style={styles.textTitle}>Seg</Text></TouchableOpacity>
                {/* <TouchableOpacity style={styles.textTitle}>Ter</TouchableOpacity>
                <TouchableOpacity style={styles.textTitle}>Qua</TouchableOpacity>
                <TouchableOpacity style={styles.textTitle}>Qui</TouchableOpacity>
                <TouchableOpacity style={styles.textTitle}>Sex</TouchableOpacity>
                <TouchableOpacity style={styles.textTitle}>Sab</TouchableOpacity>
                <TouchableOpacity style={styles.textTitle}>Dom</TouchableOpacity> */}
            </View>
            <View style={styles.containerTaing}>
                <Text>Treino A - Região Superior</Text>
            </View>

        </View>
    )
}


export default function TraingSmart (){


    return(        
        <SafeAreaView style={styles.contSafeAreaView}>
            <View>

            </View>
            <Componet/>
        </SafeAreaView>
    )
}