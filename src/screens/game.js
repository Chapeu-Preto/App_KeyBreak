import { useEffect, useState, useRef } from "react";
import { Animated, Image, Text, TextInput, TouchableOpacity, View, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";

export default function Game() {
  const navigation = useNavigation();

  const [password, setPassword] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState(["", "", ""]);
  const [message, setMessage] = useState("");

  const inputRefs = useRef([]);

  useEffect(() => {
    const newPassword = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setPassword(newPassword);
  }, []);

  function checkPassword() {
    const useGuess = guess.map(n => Number(n));
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    let correctPlace = 0;
    let correctWrongPlace = 0;

    for (let i = 0; i < 3; i++) {
      if (useGuess[i] === password[i]) correctPlace++;
    }

    for (let i = 0; i < 3; i++) {
      if (useGuess[i] !== password[i] && password.includes(useGuess[i])) {
        correctWrongPlace++;
      }
    }

    if (message) {
      shake();
    }

    if (correctPlace === 3) {
      navigation.navigate("Success", {
        password,
        attempts: newAttempts,
      });
      return;
    }

    if (correctPlace === 2) return setMessage("Apenas dois números corretos.");
    if (correctPlace === 1) return setMessage("Apenas um número correto.");
    if (correctWrongPlace === 2) return setMessage("Dois números certos no lugar errado.");
    if (correctWrongPlace === 1) return setMessage("Um número certo no lugar errado.");

    setMessage("Nenhum número correto.");
  }

  const shakeAnim = useRef(new Animated.Value(0)).current;

  function shake() {
    Animated.sequence([
      Animated.timing(
        shakeAnim, { 
          toValue: 10, 
          duration: 50, 
          useNativeDriver: true 
        }),

      Animated.timing(
        shakeAnim, { 
          toValue: -10, 
          duration: 50, 
          useNativeDriver: true 
        }),
        
      Animated.timing(
        shakeAnim, { 
          toValue: 6, 
          duration: 50, 
          useNativeDriver: true 
        }),

      Animated.timing(
        shakeAnim, { 
          toValue: -6, 
          duration: 50, 
          useNativeDriver: true 
        }),

      Animated.timing(
        shakeAnim, { 
          toValue: 0, 
          duration: 50, 
          useNativeDriver: true 
        })
    ]).start();
  }

  function updateInput(value, index) {
    const newGuess = [...guess];
    newGuess[index] = value;
    setGuess(newGuess);

    if (value.length === 1 && index < 2) {
      inputRefs.current[index + 1].focus();
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Image 
        source={require("../../assets/imagens/cadeadoRed.png")} 
        style={styles.image}
      />

      <Text style={styles.title}>
        DESCUBRA A SENHA
      </Text>

      <Animated.View 
        style={[
          styles.inputsContainer,
          { transform: [{ translateX: shakeAnim }] }
        ]}
      >
        {guess.map((g, index) => (
          <TextInput
            style={styles.input}
            placeholder="*"
            placeholderTextColor="#000"
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            keyboardType="numeric"
            maxLength={1}
            value={g}
            onChangeText={(v) => updateInput(v, index)}
          />
        ))}
      </Animated.View>

      <TouchableOpacity 
        style={styles.button}
        onPress={checkPassword}
      >
            <Text style={styles.buttomText}>
                Quebrar Senha
            </Text>
      </TouchableOpacity>

      <Text
      style={styles.message}
      >
        {message}
      </Text>
    </KeyboardAvoidingView>
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
        color: '#fff',
    },

    inputsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },

    input: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#000',
        marginHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        borderRadius: 6,
        backgroundColor: '#fff',
    },

    button: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 10,
    },

    buttomText: {
        color: '#fff',
        fontSize: 18,
    },

    message: {
        marginTop: 20,
        marginBottom: 40,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});