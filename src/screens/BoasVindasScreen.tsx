import {
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";

export default function BoasVindasScreen() {
  async function abrirInstagram() {
    await Linking.openURL(
      "https://www.instagram.com/_sim_bora?igsh=dWl4amZzenVzejVo"
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.topo}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => router.replace("/login")}
          >
            <Text style={styles.textoBotao}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.instagramContainer}
          onPress={abrirInstagram}
          activeOpacity={0.8}
        >
          <Image
            source={require("../../assets/borinha-instagram.png")}
            style={styles.borinha}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },

  topo: {
    width: "100%",
    alignItems: "center",
  },

  logo: {
    width: 340,
    height: 160,
    marginBottom: 35,
  },

  botao: {
    backgroundColor: "#7B2CBF",
    width: "85%",
    padding: 16,
    borderRadius: 12,
  },

  textoBotao: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  instagramContainer: {
    alignItems: "center",
  },

  borinha: {
    width: 280,
    height: 280,
  },
});