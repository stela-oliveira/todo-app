import React, { useState } from 'react';
import { View } from 'react-native';
import ListasScreen from './screens/ListasScreen';
import ItemsScreen from './screens/ItemsScreen';

export default function App() {
  const [listas, setListas] = useState([]);
  const [listaAtual, setListaAtual] = useState(null);

  const criarLista = (nome) => {
    const novaLista = {
      id: Date.now(),
      nome: nome,
      itens: []
    };
    setListas([...listas, novaLista]);
  };

  const excluirLista = (idLista) => {
    const listasAtualizadas = listas.filter(lista => lista.id !== idLista);
    setListas(listasAtualizadas);
    setListaAtual(null);
  };

  const adicionarItem = (texto) => {
    const listasAtualizadas = listas.map(lista => {
      if (lista.id === listaAtual.id) {
        return {
          ...lista,
          itens: [...lista.itens, { id: Date.now(), texto: texto }]
        };
      }
      return lista;
    });
    setListas(listasAtualizadas);
    setListaAtual(listasAtualizadas.find(l => l.id === listaAtual.id));
  };

  const excluirItem = (idItem) => {
    const listasAtualizadas = listas.map(lista => {
      if (lista.id === listaAtual.id) {
        return {
          ...lista,
          itens: lista.itens.filter(item => item.id !== idItem)
        };
      }
      return lista;
    });
    setListas(listasAtualizadas);
    setListaAtual(listasAtualizadas.find(l => l.id === listaAtual.id));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA', paddingTop: 40 }}>
      {listaAtual === null ? (
        <ListasScreen
          listas={listas}
          onCriarLista={criarLista}
          onSelecionarLista={setListaAtual}
          onExcluirLista={excluirLista}
        />
      ) : (
        <ItemsScreen
          lista={listaAtual}
          onVoltar={() => setListaAtual(null)}
          onAdicionarItem={adicionarItem}
          onExcluirItem={excluirItem}
        />
      )}
    </View>
  );
}
