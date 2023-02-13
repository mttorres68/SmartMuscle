import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet,StatusBar } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TrainigData() {
  return (
    <SafeAreaView style={styles.container}>        
        <View style={styles.viewTitle}>
            <Text style={styles.title}>
                SmartMuscle
            </Text>
        </View>
      <View style={styles.containerTrainig}>
          <FlatList            
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center'
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  viewTitle: {        
    justifyContent:"center",
    alignItems: "center",
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:"#F49D1A",
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4,
    flexDirection:"row",
    width:400,
},
title:{
    fontSize:28,
    color:"#FFFFFF",
    fontWeight:"bold",
    fontStyle:"italic",
},
containerTrainig: {
    height:587,
    width:320,
    backgroundColor:"#374046",
    marginTop:40,
    borderRadius:6,
    padding:20,        
},
});
