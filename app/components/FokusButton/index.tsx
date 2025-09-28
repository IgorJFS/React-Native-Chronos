import { Play } from "lucide-react-native";
import { Pressable, StyleSheet, Text } from "react-native";

export default function FokusButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>
        <Play size={16} /> Start
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: "#B872FF",
    borderRadius: 32,
    alignItems: "center",
  },
  buttonText: {
    color: "#021123",
    fontWeight: "bold",
    fontSize: 18,
  },
});

//TODO: criar um defaultprops para o componente para a cor do botão e o texto serem customizáveis
