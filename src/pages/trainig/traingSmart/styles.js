import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width - 24

const styles = StyleSheet.create({
    contSafeAreaView:{
        flex:1,        
        alignItems:'center',
        backgroundColor:'#F65006'
    },
    container: {
        alignItems:'center',
        marginTop:10,
        width:width,
        backgroundColor:'#F2F2F2',
        height:500,
        borderRadius:4,
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    containerDayWeek:{
        flexDirection:'row',
        marginTop:10,
    },
    
    textTitle:{
        marginHorizontal:4,
        borderRadius:20,        
        backgroundColor:'#F65006',
        paddingTop:5,
        margin:2,
        fontSize:20,
        width:40,
        height:40,
        textAlign:'center',
        color:'#F2F2F2',
    },
    containerTaing:{
        backgroundColor:'#F49D1A',
        width:width - 30,
        height:425,
        borderRadius:4,
        marginTop:10,
        padding:6

    }

})

export default styles