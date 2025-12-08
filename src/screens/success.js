import React from  'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';


export default function Success({ route, navigation }) {

  const { password, attempts } = route.params;

  function getLevel() {
    if (attempts <= 3) return "GENIAL";
    if (attempts <= 6) return "INTELIGENTE";
    if (attempts <= 10) return "BOM RACIOCÍNIO";
    return "PRECISA TREINAR MAIS";
  }

  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../../assets/imagens/cadeadoGreen.png')} 
      />
      <Text style={styles.title}>
        Parabéns Você conseguiu ! 
      </Text>
      
      <Text style={styles.password}> 
        Senha: {password.join('')} 
      </Text>

      <Text style={styles.text}>
        VOCÊ UTILIZOU: {attempts} tentativas 
      </Text>

      <Text style={styles.text}>
        {getLevel()} 
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.replace("Welcome")}
      >
            <Text style={styles.buttonText}>
                Novo Desafio 
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#000',
    },

    image: {
        width: 120,
        height: 120,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },

    password: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#fff',
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },

    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
    },

    buttonText: {
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 18,
    },
});