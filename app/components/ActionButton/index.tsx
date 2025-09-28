import { Pressable, StyleSheet, Text } from "react-native";
export default function ActionButton({ active, timerType, setTimerType }: any) {
  return (
    <Pressable
      style={[
        styles.contextButtonText,
        timerType.id === active.id && styles.contextButtonActive,
      ]}
      onPress={() => setTimerType(active)}
    >
      <Text style={styles.contextButtonText}>{active.display}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12.5,
    padding: 8,
  },
});
