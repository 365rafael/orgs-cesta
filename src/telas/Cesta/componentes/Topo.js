import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.png";

const WIDTH = Dimensions.get("screen").width;

export default function Topo() {
  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.titulo}>Detalhe da cesta</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * WIDTH,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
