import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrarUsuario() {
    if (!nome || !email || !senha) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos."
      );
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      Alert.alert(
        "Sucesso",
        `Usuário ${nome} cadastrado com sucesso!`,
        [
          {
            text: "OK",
            onPress: () => router.replace("/login"),
          },
        ]
      );

      setNome("");
      setEmail("");
      setSenha("");
    } catch (error: any) {
      Alert.alert(
        "Erro",
        error.message
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#999"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

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

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarUsuario}
      >
        <Text style={styles.textoBotao}>
          Criar Conta
        </Text>
      </TouchableOpacity>

      <View style={styles.linhaLink}>
        <Text style={styles.linkTexto}>
          Já possui conta?
        </Text>

        <TouchableOpacity
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.linkAcao}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
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
    width: 260,
    height: 100,
    alignSelf: "center",
    marginBottom: 35,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: "#A7FF00",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBotao: {
    color: "#121212",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  linhaLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  linkTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 5,
  },

  linkAcao: {
    color: "#7B2CBF",
    fontSize: 14,
    fontWeight: "bold",
  },
});