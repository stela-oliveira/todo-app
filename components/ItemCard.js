import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ItemCard({ item, onDelete }) {
  return (
    <View
      style={{
        backgroundColor: '#E8D5F2',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text style={{ fontSize: 16, color: '#333', flex: 1 }}>
        {item.texto}
      </Text>
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
    </View>
  );
}
