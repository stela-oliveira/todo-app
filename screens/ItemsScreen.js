import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import ItemCard from '../components/ItemCard';

export default function ItemsScreen({ lista, onVoltar, onAdicionarItem, onExcluirItem }) {
  const [novoItem, setNovoItem] = useState('');

  const handleAdicionar = () => {
    if (novoItem.trim() === '') {
      Alert.alert('Erro', 'Digite um item');
      return;
    }
    onAdicionarItem(novoItem);
    setNovoItem('');
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <TouchableOpacity onPress={onVoltar} style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#8B5A8F', fontWeight: 'bold' }}>
          ← Voltar
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#8B5A8F', marginBottom: 20 }}>
        {lista.nome}
      </Text>

      <View style={{ marginBottom: 20 }}>
        <TextInput
          placeholder="Novo item"
          value={novoItem}
          onChangeText={setNovoItem}
          style={{
            backgroundColor: '#F5D5E8',
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 15,
            marginBottom: 10,
            fontSize: 16,
            color: '#333'
          }}
        />
        <TouchableOpacity
          onPress={handleAdicionar}
          style={{
            backgroundColor: '#D8C5E8',
            paddingVertical: 15,
            borderRadius: 15,
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#8B5A8F' }}>
            Adicionar Item
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {lista.itens.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={() => onExcluirItem(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
