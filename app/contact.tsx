import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Ini Contact Screen</Text>
      <Link href="/" asChild>
        <Button title="Kembali ke Home" />
      </Link>
    </View>
  );
}
