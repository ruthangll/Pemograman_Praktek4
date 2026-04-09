import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  const [nama, setNama] = useState('')
  const [cardColor, setCardColor] = useState('#ffffff')

  const tambahCount = () => {
    setCount(count + 1)
  }

  const kurangCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const resetSemua = () => {
    setCount(0)
    setNama('')
  }

  const gantiWarna = () => {
    const colors = ['#ffffff', '#e0f2fe', '#fef3c7', '#dcfce7', '#fce7f3', '#ede9fe']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setCardColor(randomColor)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <Text style={styles.title}>Magic Dashboard</Text>

        <Text style={styles.counterLabel}>Counter</Text>
        <Text style={styles.counter}>{count}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.minusButton} onPress={kurangCount}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.plusButton} onPress={tambahCount}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Masukkan Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Ruth"
          placeholderTextColor="#888"
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.result}>
          {nama === '' ? 'Halo, User' : `Halo, ${nama}`}
        </Text>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.resetButton} onPress={resetSemua}>
            <Text style={styles.bottomButtonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.colorButton} onPress={gantiWarna}>
            <Text style={styles.bottomButtonText}>Ganti Warna</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf4ff',
    justifyContent: 'center',
    padding: 14,
  },
  card: {
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1e3a5f',
    marginBottom: 18,
  },
  counterLabel: {
    textAlign: 'center',
    fontSize: 18,
    color: '#475569',
  },
  counter: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 6,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 18,
  },
  minusButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#fca5a5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#7dd3fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  label: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 15,
  },
  result: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#2563eb',
    marginTop: 18,
    marginBottom: 18,
  },
  bottomButtons: {
    gap: 10,
  },
  resetButton: {
    backgroundColor: '#1e3a8a',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  colorButton: {
    backgroundColor: '#0f766e',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
})