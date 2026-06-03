import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TelaListaAlunos() {
  const alunos = [
    { id: "1", nome: "Maria", curso: "Análise e Desenvolvimento de Sistemas" },
    { id: "2", nome: "Clara", curso: "Engenharia Civil" },
    { id: "3", nome: "Matheus", curso: "Sistemas de Informação" },
    { id: "4", nome: "José", curso: "Ciência da Computação" },
    { id: "5", nome: "Andréa", curso: "ADS" },
    { id: "6", nome: "Wilson", curso: "Sistemas de Informação" },
    { id: "7", nome: "João", curso: "Engenharia de Software" },
    { id: "8", nome: "Pedro", curso: "ADS" },
    { id: "9", nome: "Amanda", curso: "Ciência da Computação" },
    { id: "10", nome: "André", curso: "Sistemas" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro de Estudantes</Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Text style={styles.cursoLabel}>
              Formação: {item.curso}
            </Text>
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
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,

    elevation: 2,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },

  cursoLabel: {
    fontSize: 15,
    color: "#555",
  },
});
