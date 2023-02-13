import { Text, StyleSheet, View, Platform } from 'react-native'

const styles = StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center",
        alignItems:"center",
        width:400,
        height:830
    },
    container: {
        flex: 1,
        backgroundColor:'#F65006',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 0,
    },
    title: {
        fontSize: 48,
        color: "#F49D1A",
        marginBottom: 10,
        fontWeight: "bold"
    },
    input: {
        width:300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor:"#DDDDDD",
        marginLeft:"auto",
        marginRight:"auto",
        color:"#202026",
        fontSize: 20,
        
    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F49D1A",
        borderRadius: 12,
        marginTop: 30,
    },
    textButtonLogin: {
        fontSize:24,
        color:"#DDDDDD",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    warningAlert: {
        paddingLeft:10,
        color:"#F65006",
        fontSize:16,
    },
    registration: {
        marginTop: 20,
        color: "#DDDDDD"
    },
    linkSubscribe: {
        color:"#F49D1A",
        fontSize:16
    }


});

export default styles
