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

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function RecuperarSenhaScreen() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  async function recuperarSenha() {
    if (!email) {
      Alert.alert(
        "Atenção",
        "Informe seu e-mail."
      );
      return;
    }

    try {
      await sendPasswordResetEmail(
        auth,
        email
      );

      router.replace(
        "/sucessorecuperacao"
      );
    } catch (error: any) {
      Alert.alert(
        "Erro",
        "Não foi possível enviar o e-mail de recuperação."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        SIM!Bora
      </Text>

      <Text style={styles.titulo}>
        Recuperar Senha
      </Text>

      <TextInput
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={recuperarSenha}
      >
        <Text style={styles.textoBotao}>
          Enviar Link
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          router.back()
        }
      >
        <Text style={styles.link}>
          Voltar ao Login
        </Text>
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
    color: "#A7FF00",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  titulo: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#7B2CBF",
    padding: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  link: {
    color: "#A7FF00",
    textAlign: "center",
    marginTop: 20,
  },
});