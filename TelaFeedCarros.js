import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TelaFeedCarros() {
  const carros = [
    {
      id: "1",
      nome: "BMW M4 Competition",
      descricao: "Esportivo de alto desempenho com visual agressivo.",
      imagem:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },

    {
      id: "2",
      nome: "Audi R8 V10",
      descricao: "Design sofisticado com motor potente e resposta rápida.",
      imagem:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },

    {
      id: "3",
      nome: "Porsche 911 Turbo",
      descricao: "Clássico esportivo com tecnologia e velocidade.",
      imagem:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Galeria Automotiva</Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.nome}>{item.nome}</Text>

              <Text style={styles.descricao}>{item.descricao}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  image: {
    width: "100%",
    height: 210,
  },

  content: {
    padding: 18,
  },

  nome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  descricao: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
