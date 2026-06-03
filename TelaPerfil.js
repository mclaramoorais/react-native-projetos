import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TelaPerfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("./assets/minhafoto.jpeg")}
          style={styles.photo}
        />

        <Text style={styles.name}>Lorena Souza</Text>

        <Text style={styles.description}>
          Estudante de Análise e Desenvolvimento de Sistemas com interesse em
          criação de interfaces, desenvolvimento mobile e tecnologia voltada à
          experiência do usuário.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atualizar Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 4,
  },

  photo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 18,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f1f1f",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 26,
    lineHeight: 21,
  },

  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
