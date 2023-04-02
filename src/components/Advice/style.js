import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btn: {
        marginTop: 15,
        backgroundColor: '#F5F5F5',
        width: 200,
        //justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20
    },
    btnText: {
        color: '#000',
        padding: 10,
    },
    btnShare: {
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20,
        backgroundColor: '#00CA4E',
        width: 100,
        marginTop: 50,
    },
    btnTextShare:{
        color: '#fff',
        padding: 10,
    },
    containerBtns: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textApi: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 20,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 1
    }
})

export default styles