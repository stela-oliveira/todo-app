import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ListaCard({ lista, onPress, onDelete }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#E8D5F2',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6B4A6F' }}>
          {lista.nome}
        </Text>
        <Text style={{ color: '#999', marginTop: 5 }}>
          {lista.itens.length} item(ns)
        </Text>
      </View>
      <TouchableOpacity
        onPress={onDelete}
        style={{
          backgroundColor: '#F5D5E8',
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ fontSize: 20, color: '#E84C7F' }}>×</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
