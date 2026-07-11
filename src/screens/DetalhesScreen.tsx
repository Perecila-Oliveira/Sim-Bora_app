import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

export default function DetalhesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.logo}>SIM!Bora</Text>

      <Text style={styles.titulo}>
        Creative Week 2026
      </Text>

      <Text style={styles.info}>
      Categoria: Arte e Criatividade
      </Text>

      <Text style={styles.info}>
        Escola Zion
      </Text>

      <Text style={styles.info}>
          R. Silvio Romero, 50
      </Text>

      <Text style={styles.info}>
        Alcântara - São Gonçalo/RJ
      </Text>

      <Text style={styles.info}>
         Gratuito
      </Text>

      <Text style={styles.info}>
        Classificação Livre
      </Text>

      <Text style={styles.descricao}>
        O maior evento de artes e criatividade da América Latina.  Vai Perder?

        {"\n\n"}

        Explore conteúdos sobre design,
        cinema, jogos, música,
        criatividade e portfólio.

        {"\n\n"}

        Uma oportunidade para aprender,
        criar conexões e conhecer
        profissionais do mercado.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/confirmacao" as never)}
      >
        <Text style={styles.textoBotao}>
          Sim!Bora
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  info: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },

  descricao: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
  },

  botao: {
    backgroundColor: "#A7FF00",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#121212",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});