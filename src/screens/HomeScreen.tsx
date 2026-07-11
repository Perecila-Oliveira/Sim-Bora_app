import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        SIM!Bora
      </Text>

      <Text style={styles.titulo}>
        Evento em Destaque
      </Text>

      <View style={styles.card}>
        <Text style={styles.nomeEvento}>
          Creative Week 2026
        </Text>

        <Text style={styles.info}>
          🎨 Arte e Criatividade
        </Text>

        <Text style={styles.info}>
          📍 Escola Zion - São Gonçalo/RJ
        </Text>

        <Text style={styles.info}>
          💰 Gratuito
        </Text>

        <Text style={styles.info}>
          👨‍👩‍👧‍👦 Classificação Livre
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/detalhes" as never)}
        >
          <Text style={styles.textoBotao}>
            Ver Mais
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
    padding: 20,
    justifyContent: "center",
  },

  logo: {
    color: "#A7FF00",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
  },

  nomeEvento: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  info: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },

  botao: {
    backgroundColor: "#7B2CBF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});