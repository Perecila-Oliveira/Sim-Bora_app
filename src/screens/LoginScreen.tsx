import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { signInWithEmailAndPassword } from "firebase/auth";
// 1. CORREÇÃO DO CAMINHO: Subindo duas pastas para achar o firebaseConfig na raiz
import { auth } from "../../firebaseConfig"; 

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      Alert.alert("Sucesso", "Login realizado com sucesso!", [
        {
          text: "OK",
          // Como vi que você tem o arquivo home.tsx em app/, isso vai funcionar perfeitamente:
          onPress: () => router.replace("/home"), 
        },
      ]);
    } catch (error: any) { 
      // 2. CORREÇÃO DO TYPESCRIPT: 'error: any' dentro do catch é válido no TS se configurado, 
      // ou tratando diretamente as propriedades do Firebase:
      let mensagemErro = "Ocorreu um erro ao fazer login.";
      
      if (error && error.code === "auth/invalid-credential") {
        mensagemErro = "E-mail ou senha incorretos.";
      } else if (error && error.code === "auth/invalid-email") {
        mensagemErro = "Formato de e-mail inválido.";
      } else if (error && error.message) {
        mensagemErro = error.message;
      }

      Alert.alert("Erro", mensagemErro);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SIM!Bora</Text>

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#A7FF00",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#7B2CBF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});