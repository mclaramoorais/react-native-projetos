import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function TelaNoticias() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          O impacto da tecnologia no mundo moderno
        </Text>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.text}>
            A tecnologia tem transformado de forma significativa a maneira como
            vivemos, trabalhamos e nos comunicamos.

            Nos últimos anos, áreas como desenvolvimento de software,
            inteligência artificial, análise de dados e segurança da informação
            cresceram rapidamente, abrindo novas possibilidades no mercado de
            trabalho.

            As empresas estão cada vez mais dependentes de soluções digitais,
            automação de processos e inovação tecnológica.

            O trabalho remoto também se consolidou como uma realidade, trazendo
            mais flexibilidade e novas formas de colaboração entre equipes ao
            redor do mundo.

            A tendência é que esse crescimento continue nos próximos anos,
            tornando a tecnologia uma das áreas mais estratégicas da atualidade.
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
