import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActionButton from "./components/ActionButton";
import FokusButton from "./components/FokusButton";
import Footer from "./components/Footer";

type Pomodoro = {
  id: string;
  duration: number;
  image: any;
  display: string;
};

const pomodoro: Pomodoro[] = [
  {
    id: "focus",
    duration: 25,
    image: require("../public/pomodoro.png"),
    display: "Focus",
  },
  {
    id: "shortBreak",
    duration: 5,
    image: require("../public/shortbreak.png"),
    display: "Short Break",
  },
  {
    id: "longBreak",
    duration: 15,
    image: require("../public/longbreak.png"),
    display: "Long Break",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <ActionButton
              key={p.id}
              active={p}
              timerType={timerType}
              setTimerType={setTimerType}
            />
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.duration * 60000).toLocaleTimeString("en-US", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
        <FokusButton />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  timer: {
    fontSize: 54,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
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
