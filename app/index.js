import { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import ItemsScreen from "../screens/ItemsScreen";
import ListasScreen from "../screens/ListasScreen";

export default function App() {
  const [listas, setListas] = useState([]);
  const [listaSelecionada, setListaSelecionada] = useState(null);

  function handleCriarLista(nome) {
    const nova = { id: Date.now(), nome, itens: [] };
    setListas([...listas, nova]);
  }

  function handleExcluirLista(id) {
    setListas(listas.filter((l) => l.id !== id));
  }

  function handleSelecionarLista(lista) {
    setListaSelecionada(lista);
  }

  function handleAdicionarItem(texto) {
    const novoItem = { id: Date.now(), texto, done: false };
    const atualizadas = listas.map((l) =>
      l.id === listaSelecionada.id
        ? { ...l, itens: [...l.itens, novoItem] }
        : l,
    );
    setListas(atualizadas);
    setListaSelecionada(atualizadas.find((l) => l.id === listaSelecionada.id));
  }

  function handleExcluirItem(itemId) {
    const atualizadas = listas.map((l) =>
      l.id === listaSelecionada.id
        ? { ...l, itens: l.itens.filter((i) => i.id !== itemId) }
        : l,
    );
    setListas(atualizadas);
    setListaSelecionada(atualizadas.find((l) => l.id === listaSelecionada.id));
  }

  function handleToggleItem(itemId) {
    const atualizadas = listas.map((l) =>
      l.id === listaSelecionada.id
        ? {
            ...l,
            itens: l.itens.map((i) =>
              i.id === itemId ? { ...i, done: !i.done } : i,
            ),
          }
        : l,
    );
    setListas(atualizadas);
    setListaSelecionada(atualizadas.find((l) => l.id === listaSelecionada.id));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAF0FF" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF0FF" />
      <View style={{ flex: 1, paddingTop: 20 }}>
        {listaSelecionada ? (
          <ItemsScreen
            lista={listaSelecionada}
            onVoltar={() => setListaSelecionada(null)}
            onAdicionarItem={handleAdicionarItem}
            onExcluirItem={handleExcluirItem}
            onToggleItem={handleToggleItem}
          />
        ) : (
          <ListasScreen
            listas={listas}
            onCriarLista={handleCriarLista}
            onSelecionarLista={handleSelecionarLista}
            onExcluirLista={handleExcluirLista}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
