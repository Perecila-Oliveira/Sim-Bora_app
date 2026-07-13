import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function DetalhesScreen() {
  function abrirSiteOficial() {
    Linking.openURL(
      "https://ztalent.escolazion.com/"
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text style={styles.voltar}>
          ← Voltar
        </Text>
      </TouchableOpacity>

      <Image
        source={require("../../assets/evento_zion.jpg")}
        style={styles.banner}
      />

      <Text style={styles.titulo}>
        ZTalent 2026
      </Text>

      <Text style={styles.categoria}>
        Criatividade • Inovação • Tecnologia
      </Text>

      <View style={styles.cardInfo}>
        <Text style={styles.info}>
          Escola ZION
        </Text>

        <Text style={styles.info}>
          Av. Visconde do Rio Branco, 243
        </Text>

        <Text style={styles.info}>
          Centro • Niterói/RJ
        </Text>

        <Text style={styles.info}>
        12 de Julho de 2026
        </Text>

        <Text style={styles.info}>
            Gratuito
        </Text>

        <Text style={styles.info}>
            Classificação Livre
        </Text>
      </View>

      <Text style={styles.subtitulo}>
        Sobre o Evento
      </Text>

      <Text style={styles.descricao}>
        O ZTalent 2026 da Escola ZION será realizado
        neste domingo, 12 de julho.

        {"\n\n"}

        O grande evento de criatividade e inovação,
        que reúne alunos e empresas, ocorre
        simultaneamente em diversas unidades,
        incluindo a etapa conjunta das filiais de
        Niterói e Alcântara.

        {"\n\n"}

        O encontro promete ser uma das maiores
        vitrines para a indústria criativa da região,
        com a apresentação de projetos práticos e
        desafios avaliados por grandes profissionais
        do mercado.

        {"\n\n"}

        As informações oficiais, horários detalhados
        e programações podem ser acompanhados pelo
        site oficial do ZTalent e pelos canais
        oficiais da Escola ZION.
      </Text>

      <Text style={styles.subtitulo}>
        Mais Informações
      </Text>

      <TouchableOpacity
        style={styles.botaoSite}
        onPress={abrirSiteOficial}
      >
        <Text style={styles.textoBotaoSite}>
          🌐 Site Oficial do ZTalent
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          router.push("/confirmacao")
        }
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

  voltar: {
    color: "#7B2CBF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },

  banner: {
    width: "100%",
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  categoria: {
    color: "#A7FF00",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 20,
    textAlign: "center",
  },

  cardInfo: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: "center",
  },

  info: {
    color: "#FFFFFF",
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
  },

  subtitulo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  descricao: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
    marginBottom: 25,
  },

  botaoSite: {
    backgroundColor: "#7B2CBF",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
  },

  textoBotaoSite: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#A7FF00",
    padding: 16,
    borderRadius: 12,
  },

  textoBotao: {
    color: "#121212",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});