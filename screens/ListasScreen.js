import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ListaCard from "../components/ListaCard";

export default function ListasScreen({
  listas,
  onCriarLista,
  onSelecionarLista,
  onExcluirLista,
}) {
  const [nomeLista, setNomeLista] = useState("");

  const handleCriar = () => {
    if (nomeLista.trim() === "") {
      Alert.alert("Erro", "Digite um nome para a lista");
      return;
    }
    onCriarLista(nomeLista);
    setNomeLista("");
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#8B5A8F",
          marginBottom: 30,
        }}
      >
        Minhas Listas
      </Text>

      <View style={{ marginBottom: 30 }}>
        <TextInput
          placeholder="Nome da nova lista"
          value={nomeLista}
          onChangeText={setNomeLista}
          style={{
            backgroundColor: "#F5D5E8",
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 15,
            marginBottom: 10,
            fontSize: 16,
            color: "#333",
          }}
        />
        <TouchableOpacity
          onPress={handleCriar}
          style={{
            backgroundColor: "#D8C5E8",
            paddingVertical: 15,
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#8B5A8F" }}>
            Criar Lista
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={listas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListaCard
            lista={item}
            onPress={() => onSelecionarLista(item)}
            onDelete={() => onExcluirLista(item.id)}
          />
        )}
      />
    </View>
  );
}
