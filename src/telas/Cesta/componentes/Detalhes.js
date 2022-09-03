import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png";

export default function Detalhes() {
  return (
    <>
      <Texto style={styles.nome}>Cesta de Verduras</Texto>
      <View style={styles.fazenda}>
        <Image source={logo} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>Jenny Jack Farm</Texto>
      </View>
      <Texto style={styles.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha
      </Texto>
      <Texto style={styles.preco}>R$40,00</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
