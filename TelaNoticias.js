import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function TelaPerfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Moda e estilo no mundo contemporâneo
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1520975958225-8b9d6c2a2d5c",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.text}>
            A moda é uma forma de expressão que reflete identidade, cultura e
            estilo de vida. Ao longo dos anos, ela tem se transformado,
            acompanhando mudanças sociais e tendências globais.

            Atualmente, o setor da moda está cada vez mais conectado à
            sustentabilidade, buscando materiais ecológicos e processos de
            produção conscientes.

            As redes sociais também desempenham um papel importante, influenciando
            tendências e aproximando marcas do público.

            Além disso, o mercado fashion se tornou mais diverso e inclusivo,
            valorizando diferentes estilos, corpos e culturas.

            A moda continua evoluindo como uma forma de arte e comunicação,
            refletindo a personalidade de cada indivíduo.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
    color: "#222",
  },

  image: {
    width: "100%",
    height: 250,
  },

  content: {
    padding: 20,
  },

  text: {
    fontSize: 17,
    lineHeight: 28,
    color: "#444",
    textAlign: "justify",
  },
});
