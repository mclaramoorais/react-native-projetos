import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

type Carro = {
  id: string;
  nome: string;
  marca: string;
  preco: number;
  descricao: string;
  imagem: string;
};

export default function App() {
  const [marcaSelecionada, setMarcaSelecionada] =
    useState<string>('Todas');

  const [precoMaximo, setPrecoMaximo] =
    useState<number>(2000000);

  const carros: Carro[] = [
    {
      id: '1',
      nome: 'Mercedes GLC 220D',
      marca: 'Mercedes',
      preco: 525000,
      descricao: 'SUV de luxo com conforto e tecnologia avançada.',
      imagem:
        'https://th.bing.com/th/id/OIP.JCsU_CYeLsA_PjU1n1XSqgHaER?w=307&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    },
    {
      id: '2',
      nome: 'Audi R8',
      marca: 'Audi',
      preco: 990000,
      descricao: 'Superesportivo de alto desempenho e design agressivo.',
      imagem:
        'https://th.bing.com/th/id/OIP.iMKIXo8Co4fxORDnvR-REAHaES?w=284&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    },
    {
      id: '3',
      nome: 'Porsche Cayenne Electric',
      marca: 'Porsche',
      preco: 900000,
      descricao: 'SUV elétrico de luxo com performance premium.',
      imagem:
        'https://tse1.mm.bing.net/th/id/OIP.8w0VXui33KsyhW9rrU5XBgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: '4',
      nome: 'Volvo EX90',
      marca: 'Volvo',
      preco: 849000,
      descricao: 'SUV elétrico seguro e sofisticado.',
      imagem:
        'https://th.bing.com/th/id/OIP.hZySVzobi9_buqrpvRjGwgHaE8?w=248&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    },
    {
      id: '5',
      nome: 'Jaguar F-PACE',
      marca: 'Jaguar',
      preco: 650000,
      descricao: 'SUV esportivo com elegância e potência.',
      imagem:
        'https://tse3.mm.bing.net/th/id/OIP.VebNcZ6F_RbSlBVagofI8QHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: '6',
      nome: 'Haval H6 GT',
      marca: 'Haval',
      preco: 320000,
      descricao: 'SUV moderno com ótimo custo-benefício.',
      imagem:
        'https://tse3.mm.bing.net/th/id/OIP.VEXzuHqpDkWobowBhe5FtQHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ];

  const carrosFiltrados = carros.filter((carro) => {
    const filtroMarca =
      marcaSelecionada === 'Todas' ||
      carro.marca === marcaSelecionada;

    const filtroPreco =
      carro.preco <= precoMaximo;

    return filtroMarca && filtroPreco;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <Text style={styles.titulo}>
          CarShop Mobile
        </Text>

        {/* SOBRE A LOJA PREMIUM */}
        <View style={styles.secao}>
          <Text style={styles.subtitulo}>
            Sobre a Loja
          </Text>

          <Text style={styles.texto}>
            Localizada no coração do Recife, a CarShop é uma concessionária especializada em veículos de luxo e alto desempenho, dedicada a um público que valoriza exclusividade, sofisticação e excelência em cada detalhe.

            Com 8 anos de atuação consolidada no mercado automotivo premium, construímos uma trajetória marcada pela confiança, credibilidade e um padrão rigoroso de seleção dos veículos que compõem nosso catálogo.

            Nossa história é guiada pela paixão pelo automobilismo e pela busca constante por inovação, reunindo modelos que representam o que há de mais avançado em tecnologia, design e performance no cenário mundial.

            Mais do que uma concessionária, a CarShop é uma experiência. Cada cliente é atendido de forma personalizada, com um serviço que prioriza discrição, excelência e um nível de cuidado compatível com o universo dos carros de luxo.

            Em Recife, nos tornamos referência no segmento premium, conectando pessoas a máquinas extraordinárias e proporcionando uma jornada de compra que reflete status, exclusividade e confiança absoluta.
          </Text>
        </View>

        {/* PICKER */}
        <View style={styles.secao}>
          <Text style={styles.subtitulo}>Filtrar por Marca</Text>

          <Picker
            selectedValue={marcaSelecionada}
            onValueChange={(itemValue) =>
              setMarcaSelecionada(itemValue)
            }
          >
            <Picker.Item label="Todas" value="Todas" />
            <Picker.Item label="Mercedes" value="Mercedes" />
            <Picker.Item label="Audi" value="Audi" />
            <Picker.Item label="Porsche" value="Porsche" />
            <Picker.Item label="Volvo" value="Volvo" />
            <Picker.Item label="Jaguar" value="Jaguar" />
            <Picker.Item label="Haval" value="Haval" />
          </Picker>

          <Text style={styles.info}>
            Marca: {marcaSelecionada}
          </Text>
        </View>

        {/* SLIDER */}
        <View style={styles.secao}>
          <Text style={styles.subtitulo}>Faixa de Preço</Text>

          <Slider
            minimumValue={300000}
            maximumValue={2000000}
            step={50000}
            value={precoMaximo}
            onValueChange={setPrecoMaximo}
          />

          <Text style={styles.info}>
            Até R$ {precoMaximo.toLocaleString()}
          </Text>
        </View>

        {/* FLATLIST */}
        <View style={styles.secao}>
          <Text style={styles.subtitulo}>Catálogo</Text>

          <FlatList
            data={carrosFiltrados}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.imagem }}
                  style={styles.imagem}
                />

                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>
                  R$ {item.preco.toLocaleString()}
                </Text>
                <Text style={styles.descricao}>
                  {item.descricao}
                </Text>
              </View>
            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  secao: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    lineHeight: 24,
  },
  info: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: 200,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  preco: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  descricao: {
    fontSize: 16,
    margin: 10,
  },
});