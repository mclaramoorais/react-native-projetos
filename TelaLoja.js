import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function TelaLoja() {
  const celulares = {
    iPhone: {
      marca: "Apple",
      preco: "R$ 7.999",
    },

    Samsung: {
      marca: "Samsung",
      preco: "R$ 4.500",
    },

    Xiaomi: {
      marca: "Xiaomi",
      preco: "R$ 3.200",
    },
  };

  const [celular, setCelular] = useState("iPhone");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Catálogo de Smartphones</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={celular}
          onValueChange={(itemValue) => setCelular(itemValue)}
        >
          <Picker.Item label="iPhone" value="iPhone" />
          <Picker.Item label="Samsung" value="Samsung" />
          <Picker.Item label="Xiaomi" value="Xiaomi" />
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>{celulares[celular].marca}</Text>

        <Text style={styles.info}>
          Modelo selecionado: {celular}
        </Text>

        <Text style={styles.info}>
          Valor aproximado: {celulares[celular].preco}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
  },

  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 28,
    overflow: "hidden",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 22,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 4,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },

  info: {
    fontSize: 17,
    marginBottom: 8,
    textAlign: "center",
  },
});
