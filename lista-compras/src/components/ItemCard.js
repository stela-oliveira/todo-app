import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CATEGORIAS from "../constants/categorias";

export default function ItemCard({ item, onToggle, onExcluir }) {
  const categoria = CATEGORIAS.find((c) => c.id === item.categoria);

  return (
    <View style={[styles.card, item.comprado && styles.cardComprado]}>
      <TouchableOpacity
        onPress={onToggle}
        style={[styles.checkbox, item.comprado && styles.checkboxAtivo]}
      >
        {item.comprado && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={[styles.nome, item.comprado && styles.nomeComprado]}>
          {item.nome}
        </Text>
        {categoria && (
          <View
            style={[styles.badge, { backgroundColor: categoria.cor + "30" }]}
          >
            <Text style={[styles.badgeTexto, { color: categoria.cor }]}>
              {categoria.label}
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={onExcluir} style={styles.botaoExcluir}>
        <Text style={styles.excluirTexto}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8D5F2",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    gap: 12,
  },
  cardComprado: {
    backgroundColor: "#F0E8F5",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#8B5A8F",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxAtivo: {
    backgroundColor: "#8B5A8F",
    borderColor: "#8B5A8F",
  },
  checkmark: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6B4A6F",
  },
  nomeComprado: {
    textDecorationLine: "line-through",
    color: "#C9A8D4",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
  },
  badgeTexto: {
    fontSize: 11,
    fontWeight: "700",
  },
  botaoExcluir: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5D5E8",
    alignItems: "center",
    justifyContent: "center",
  },
  excluirTexto: {
    fontSize: 22,
    color: "#E84C7F",
    lineHeight: 24,
  },
});
