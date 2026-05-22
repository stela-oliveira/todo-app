import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListaScreen from "../screens/ListaScreen";

const CHAVE = "lista_compras";

export default function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function carregar() {
      const dados = await AsyncStorage.getItem(CHAVE);
      if (dados) setItens(JSON.parse(dados));
    }
    carregar();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(CHAVE, JSON.stringify(itens));
  }, [itens]);

  function adicionarItem(nome, categoria) {
    const novo = { id: Date.now(), nome, categoria, comprado: false };
    setItens([...itens, novo]);
  }

  function toggleItem(id) {
    setItens(
      itens.map((i) => (i.id === id ? { ...i, comprado: !i.comprado } : i)),
    );
  }

  function excluirItem(id) {
    setItens(itens.filter((i) => i.id !== id));
  }

  function limparLista() {
    setItens([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF0FF" />
      <ListaScreen
        itens={itens}
        onAdicionar={adicionarItem}
        onToggle={toggleItem}
        onExcluir={excluirItem}
        onLimpar={limparLista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0FF",
  },
});
