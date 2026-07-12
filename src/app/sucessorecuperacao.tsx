import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

export default function SucessoRecuperacaoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        SIM!Bora
      </Text>

      <Text style={styles.titulo}>
        E-mail Enviado
      </Text>

      <Text style={styles.mensagem}>
        Enviamos um link para redefinir sua senha.
        Verifique sua caixa de entrada.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          router.replace("/login")
        }
      >
        <Text style={styles.textoBotao}>
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
    alignItems: "center",
    padding: 20,
  },

  logo: {
    color: "#A7FF00",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },

  titulo: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  mensagem: {
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },

  botao: {
    backgroundColor: "#7B2CBF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },

  textoBotao: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});