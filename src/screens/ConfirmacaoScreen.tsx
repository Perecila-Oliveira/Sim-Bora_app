import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function ConfirmacaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>
        ✅
      </Text>

      <Text style={styles.titulo}>
        Presença Confirmada!
      </Text>

      <Text style={styles.texto}>
        Você confirmou presença na
        Creative Week 2026.
      </Text>

      <Text style={styles.texto}>
        Nos vemos na Escola Zion!
      </Text>

      <TouchableOpacity
        style={styles.botao}
       onPress={() => router.replace("/" as never)}
      >
        <Text style={styles.textoBotao}>
          Voltar ao Início
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

  icone: {
    fontSize: 80,
    marginBottom: 20,
  },

  titulo: {
    color: "#A7FF00",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  texto: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#7B2CBF",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: "100%",
  },

  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});