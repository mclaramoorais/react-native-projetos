import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function Picker() {
  const [cursoSelecionado, setCursoSelecionado] = useState("ADS");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seleção de Curso</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={cursoSelecionado}
          onValueChange={(valor) => setCursoSelecionado(valor)}
        >
          <Picker.Item label="ADS" value="ADS" />
          <Picker.Item label="Engenharia" value="Engenharia" />
          <Picker.Item label="Sistemas de Informação" value="Sistemas" />
          <Picker.Item
            label="Ciência da Computação"
            value="Ciência da Computação"
          />
        </Picker>
      </View>

      <Text style={styles.result}>
        Você escolheu: {cursoSelecionado}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F4F6F8",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },

  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 25,
    overflow: "hidden",
  },

  result: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
  },
});
