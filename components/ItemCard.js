import { Text, TouchableOpacity, View } from "react-native";

export default function ItemCard({ item, onDelete, onToggle }) {
  return (
    <View
      style={{
        backgroundColor: "#E8D5F2",
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={onToggle}
        style={{
          width: 24,
          height: 24,
          borderRadius: 6,
          borderWidth: 2,
          borderColor: "#8B5A8F",
          backgroundColor: item.done ? "#8B5A8F" : "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        {item.done && (
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "700" }}>
            ✓
          </Text>
        )}
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: item.done ? "#bbb" : "#333",
          flex: 1,
          textDecorationLine: item.done ? "line-through" : "none",
        }}
      >
        {item.texto}
      </Text>

      <TouchableOpacity
        onPress={onDelete}
        style={{
          backgroundColor: "#F5D5E8",
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#E84C7F" }}>×</Text>
      </TouchableOpacity>
    </View>
  );
}
