import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ℹ Ini About Screen</Text>
      <Link href="/" asChild>
        <Button title="Kembali ke Home" />
      </Link>
    </View>
  );
}
