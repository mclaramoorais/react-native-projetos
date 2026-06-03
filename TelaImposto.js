import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Slider from "@react-native-community/slider";

export default function TelaImposto() {
  const [salario, setSalario] = useState(4500);

  const taxaImposto = salario * 0.12;

  const salarioFinal = salario - taxaImposto;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Cálculo de Impostos
        </Text>

        <Text style={styles.label}>
          Valor do salário mensal
        </Text>

        <Text style={styles.salary}>
          R$ {Math.round(salario)}
        </Text>

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={1000}
          maximumValue={20000}
          step={100}
          value={salario}
          onValueChange={(valor) => setSalario(valor)}
        />

        <View style={styles.infoBox}>
          <Text style={styles.info}>
            Desconto de imposto: R$ {taxaImposto.toFixed(2)}
          </Text>

          <Text style={styles.info}>
            Salário após desconto: R$ {salarioFinal.toFixed(2)}
          </Text>
        </View>
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

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 4,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
  },

  label: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "#444",
  },

  salary: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F46E5",
    marginBottom: 18,
  },

  infoBox: {
    marginTop: 22,
    gap: 8,
  },

  info: {
    fontSize: 18,
    textAlign: "center",
  },
});
