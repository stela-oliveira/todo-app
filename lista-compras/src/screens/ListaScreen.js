import { useState } from "react";
import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import ItemCard from "../components/ItemCard";
import CATEGORIAS from "../constants/categorias";

export default function ListaScreen({
  itens,
  onAdicionar,
  onToggle,
  onExcluir,
  onLimpar,
}) {
  const [nome, setNome] = useState("");
  const [categoriaId, setCategoriaId] = useState(CATEGORIAS[0].id);

  const comprados = itens.filter((i) => i.comprado).length;
  const pendentes = itens.length - comprados;

  function handleAdicionar() {
    if (nome.trim() === "") {
      Alert.alert("Atenção", "Digite o nome do item.");
      return;
    }
    onAdicionar(nome.trim(), categoriaId);
    setNome("");
  }

  function handleLimpar() {
    Alert.alert("Limpar lista", "Deseja remover todos os itens?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Limpar", style: "destructive", onPress: onLimpar },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.contadorRow}>
        <Text style={styles.contador}>
          {pendentes} pendente{pendentes !== 1 ? "s" : ""}
        </Text>
        <Text style={styles.contadorSep}>·</Text>
        <Text style={[styles.contador, styles.contadorComprado]}>
          {comprados} comprado{comprados !== 1 ? "s" : ""}
        </Text>
      </View>

      <TextInput
        placeholder="Nome do item"
        placeholderTextColor="#C9A8D4"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <View style={styles.chips}>
        {CATEGORIAS.map((cat) => {
          const ativo = categoriaId === cat.id;
          return (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setCategoriaId(cat.id)}
              style={[
                styles.chip,
                { borderColor: cat.cor },
                ativo && { backgroundColor: cat.cor },
              ]}
            >
              <Text style={styles.chipEmoji}>{cat.emoji}</Text>
              <Text
                style={[styles.chipTexto, { color: ativo ? "#fff" : cat.cor }]}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.botoesRow}>
        <TouchableOpacity
          onPress={handleAdicionar}
          style={styles.botaoAdicionar}
        >
          <Text style={styles.botaoAdicionarTexto}>Adicionar</Text>
        </TouchableOpacity>
        {itens.length > 0 && (
          <TouchableOpacity onPress={handleLimpar} style={styles.botaoLimpar}>
            <Text style={styles.botaoLimparTexto}>Limpar tudo</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onToggle={() => onToggle(item.id)}
            onExcluir={() => onExcluir(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhum item na lista ainda.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#8B5A8F",
    marginTop: 10,
    marginBottom: 4,
  },
  contadorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  contador: {
    fontSize: 14,
    color: "#B08AB5",
  },
  contadorSep: {
    fontSize: 14,
    color: "#D8C5E8",
  },
  contadorComprado: {
    color: "#8B5A8F",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F5D5E8",
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#6B4A6F",
    marginBottom: 12,
  },
  chips: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  chip: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 14,
    borderWidth: 2,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  chipEmoji: {
    fontSize: 24,
  },
  chipTexto: {
    fontSize: 11,
    fontWeight: "700",
  },
  botoesRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  botaoAdicionar: {
    flex: 1,
    backgroundColor: "#8B5A8F",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  botaoAdicionarTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  botaoLimpar: {
    backgroundColor: "#F5D5E8",
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  botaoLimparTexto: {
    color: "#E84C7F",
    fontWeight: "bold",
    fontSize: 15,
  },
  listaVazia: {
    textAlign: "center",
    color: "#D8C5E8",
    fontSize: 16,
    marginTop: 60,
  },
});
