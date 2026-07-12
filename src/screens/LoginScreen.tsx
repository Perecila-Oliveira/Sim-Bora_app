import { useRouter } from "expo-router";
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

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebaseConfig";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert(
        "Erro",
        "Por favor, preencha todos os campos."
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      Alert.alert(
        "Sucesso",
        "Login realizado com sucesso!",
        [
          {
            text: "OK",
            onPress: () => router.replace("/home"),
          },
        ]
      );
    } catch (error: any) {
      let mensagemErro =
        "Ocorreu um erro ao fazer login.";

      if (
        error &&
        error.code === "auth/invalid-credential"
      ) {
        mensagemErro =
          "E-mail ou senha incorretos.";
      } else if (
        error &&
        error.code === "auth/invalid-email"
      ) {
        mensagemErro =
          "Formato de e-mail inválido.";
      }

      Alert.alert(
        "Erro",
        mensagemErro
      );
    }
  }

  async function recuperarSenha() {
    if (!email) {
      Alert.alert(
        "Recuperar Senha",
        "Digite seu e-mail para receber o link de recuperação."
      );
      return;
    }

    try {
      await sendPasswordResetEmail(
        auth,
        email
      );

      Alert.alert(
        "Sucesso",
        "Enviamos um link para redefinir sua senha."
      );
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível enviar o e-mail de recuperação."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
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
        onPress={fazerLogin}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <View style={styles.linhaLink}>
        <Text style={styles.linkTexto}>
          Esqueceu sua senha?
        </Text>

        <Text
          style={styles.linkAcao}
          onPress={recuperarSenha}
        >
          Recuperar senha
        </Text>
      </View>

      <View style={styles.linhaLink}>
        <Text style={styles.linkTexto}>
          Não possui conta?
        </Text>

        <Text
          style={styles.linkAcao}
          onPress={() =>
            router.push("/cadastro")
          }
        >
          Criar Conta
        </Text>
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

  linhaLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
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