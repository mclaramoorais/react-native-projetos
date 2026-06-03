import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from "react-native";

import Slider from "@react-native-community/slider";

export default function Volume() {
  const [nivelVolume, setNivelVolume] = useState(40);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ajuste de Áudio</Text>

        <Text style={styles.volume}>
          Intensidade: {Math.round(nivelVolume)}
        </Text>

        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={100}
          value={nivelVolume}
          onValueChange={(valor) => setNivelVolume(valor)}
        />
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

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 18,
  },

  volume: {
    fontSize: 20,
    marginBottom: 18,
    color: "#333",
  },
});
