import { StyleSheet } from "react-native";


export const styles = StyleSheet.create ({

    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    imgBoasVindas: {
        marginTop: 90,
        width: 200,
        height: 200,
    },

    textWelcome: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
    },

    textAux: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    },

    button: {
        backgroundColor: '#00a900ff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10,
        width: '50%',
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default styles;