import { StyleSheet, Text } from "react-native";

export default function Timer({ timeRemaining }: { timeRemaining: number }) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <Text style={styles.timer}>
      {formatTime(minutes)}:{formatTime(seconds)}
    </Text>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
