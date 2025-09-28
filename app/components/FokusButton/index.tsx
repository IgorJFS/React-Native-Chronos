import { Pressable, StyleSheet, Text } from "react-native";
import { IconPause, IconPlay } from "../Icons";

export default function FokusButton({
  onPress,
  title,
  isPlaying,
}: {
  onPress: () => void;
  title: string;
  isPlaying: boolean;
}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>
        {isPlaying ? <IconPause /> : <IconPlay />} {title}
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
