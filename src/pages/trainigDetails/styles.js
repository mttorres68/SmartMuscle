import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#F65006",
        alignItems:'center'
        
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
        backgroundColor:"#F2F2F2",
        marginTop:40,
        borderRadius:6,
        padding:20,        
    },
    viewList: {        
        alignContent:'space-between',
        alignItems:'center',
        justifyContent:'space-between'
    },
    trainig: {
        width:120,
        height:100,
        backgroundColor:"#F49D1A",
        borderRadius:6,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 12,
    },
    details: {
        textAlign:"center",
        paddingTop:10,
        fontSize:16,
        color:"#374046",
        fontWeight:"bold",
    },
    appBar: {
        position:"absolute",
        start:0,
        end:0,
        bottom:0,
        width:400,
        height:50,
        backgroundColor:"#F49D1A",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
        
    },
    diaSemana: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 12,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    ctr: {
        flex: 1,        
      },
    

});

export default styles
