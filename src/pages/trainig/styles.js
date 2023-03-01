import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width - 24

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
        fontSize:32,
        color:"#FFFFFF",
        fontWeight:"bold",
        fontStyle:"italic",
    },
    viewTreinos: {
        marginTop:20,
        marginStart:40,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        width:318,        
    },
    textTreinos: {
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'500',
        color:'#F2F2F2',
    },
    containerTrainig: {
        height:320,
        width:width,
        backgroundColor:"#F2F2F2",
        marginTop:5,
        borderRadius:6,
        paddingStart:10,
        paddingEnd:10,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    containerTextSmarMuscle: {
        width:width - 20,
        marginTop:5,
    },
    textTreinoSmartMuscle: {
        fontSize:18,
        fontWeight:'500',
        color:'#374046'
    },
    cardTrainig: {
        width:250,
        height:60,
        backgroundColor:"#F49D1A",        
        padding: 5,
        marginVertical:5,
        borderRadius:6,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 2,

    },
    iconContainer:{
        alignItems: "flex-end",
        justifyContent: "flex-end",
        alignContent: "flex-end",
        width:250,        
    },
    
    viewList: {        
        alignContent:'space-between',
        alignItems:'center',
        justifyContent:'space-between'
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
        color:'#374046',
        fontSize:16,
    },
});

export default styles
