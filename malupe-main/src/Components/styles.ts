import {StyleSheet} from 'react-native'

export const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#192E50'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 265,
        height: 200,
        marginBottom:50,
        marginTop: 30
    },
    button: {
        backgroundColor: '#FF4928',
        width: '80%', 
        height: 50, 
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 100
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    title:{
        color: '#FF4928',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    },
    text:{
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30, 
        marginTop:15
    },
    image: {
        width: 400,
        height: 300,
        marginRight:65,
    },
    imageContainer: {
        backgroundColor: '#192E50',
        width: 500,
        height: 200,
        marginBottom: 15,
        alignItems: 'center',
        marginLeft: 0,
        marginTop: 10
    },
    buttonContainer: {
        flex: 1,
        marginTop: 100,
        marginLeft: 30
    }, 
    input: {
        height: 40,
        width: 200,
        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 25, 
        marginTop: 5,
        color: 'white'
    },
    errorText: {
        color: 'red',
        textTransform: 'uppercase'
    }, 
    itemContainer: {
        marginBottom: 15,
        borderWidth: 5,
        borderColor: 'gray',
        padding: 50,
        borderRadius: 0,
        marginTop: 30,
        height: 200,
        width:400
    },
    itemText: {
        fontSize: 16,
        color: 'white', 
    },
})