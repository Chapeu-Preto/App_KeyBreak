import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/imagens/img-welcome.png")}
        style={styles.image}
      />

      <Text 
        style={styles.text}
      >
        MOSTRE SUAS HABILIDADES
      </Text>
 
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20,
    backgroundColor: '#000',
  },
  image: { 
    width: 250, 
    height: 250, 
    marginBottom: 20, 
  },

  text: { 
    marginTop: 10,
    fontSize: 18, 
    color: '#fff',
    textAlign: "center", 
    marginBottom: 20, 
  },
  
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
  },

  buttonText: { 
    fontWeight: 'bold',
    color: '#000', 
    fontSize: 18, 
  },
  
});
