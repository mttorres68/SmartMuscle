import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#F65006",
        alignItems:'center', 
        
    },
    title: {
        fontSize:35,
        fontWeight:'bold',
        color:"#FCF7F7",
        marginTop:220,
    },
    button: {                
        marginTop:300,
        width:360,
    },
    buttonSingUp: {
        backgroundColor:"#F2ECE3", 
        padding:10,        
        alignItems:'center',
        borderRadius:15,
        marginBottom:15,
        shadowOffset:'#374046',
        shadowRadius:10,
        shadowColor:'black'
    },
    buttonLogin: {
        padding:10,
        backgroundColor:"#F49D1A",
        alignItems:'center',
        borderRadius:15,
        shadowOffset:'#374046',
        shadowRadius:10
    },
    textButtonSingUp: {
        fontSize: 24,
        color:"#F49D1A",
        
    },
    textButtonLogin: {
        fontSize:24,
        color:"#E9E2E2",
        textShadow: '#374046'
    }
});

export default styles
