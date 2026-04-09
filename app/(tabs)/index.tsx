import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState("");
  const [bgColor, setBgColor] = useState("#f5f7ff");

  const colors = [
    "#f5f7ff",
    "#e3f2fd",
    "#e8f5e9",
    "#fff3e0",
    "#fce4ec",
    "#ede7f6",
  ];

  const tambah = () => {
    setCount(count + 1);
  };

  const kurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const gantiWarna = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomIndex]);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.card}>
        <Text style={styles.title}>Praktek 4</Text>
        <Text style={styles.subtitle}>Counter, Greeting, dan Ganti Warna</Text>

        <Text style={styles.label}>Counter</Text>
        <Text style={styles.count}>{count}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.smallButton} onPress={kurang}>
            <Text style={styles.smallButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallButton} onPress={tambah}>
            <Text style={styles.smallButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Masukkan Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Ruth"
          placeholderTextColor="#888"
          onChangeText={setNama}
          value={nama}
        />

        <Text style={styles.result}>
          {nama === "" ? "Halo!" : `Halo, ${nama}`}
        </Text>

        <TouchableOpacity style={styles.colorButton} onPress={gantiWarna}>
          <Text style={styles.colorButtonText}>Ganti Warna</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  count: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#2b2d42",
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 24,
  },
  smallButton: {
    backgroundColor: "#3a86ff",
    width: 55,
    height: 55,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  smallButtonText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 16,
  },
  result: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 24,
  },
  colorButton: {
    backgroundColor: "#8338ec",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
  },
  colorButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});