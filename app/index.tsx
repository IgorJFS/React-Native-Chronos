import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import ActionButton from "./components/ActionButton";
import FokusButton from "./components/FokusButton";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

export type Pomodoro = {
  id: string;
  duration: number;
  image: any;
  display: string;
};

export const pomodoro: Pomodoro[] = [
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
  const timerRef: any = useRef(null);
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timeRemaining, setTimeRemaining] = useState(pomodoro[0].duration * 60); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [focusSessionCount, setFocusSessionCount] = useState(0);

  // Reset timer when timer type changes
  useEffect(() => {
    setTimeRemaining(timerType.duration * 60);
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [timerType]);

  // Handle timer countdown
  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Timer completed
            setIsRunning(false);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRunning, timeRemaining]);

  const handleTimerComplete = () => {
    if (timerType.id === "focus") {
      const newCount = focusSessionCount + 1;
      setFocusSessionCount(newCount);
      // After 4 focus sessions, take a long break
      if (newCount % 4 === 0) {
        setTimerType(pomodoro[2]); // Long break
      } else {
        setTimerType(pomodoro[1]); // Short break
      }
    } else {
      // After any break, go back to focus
      setTimerType(pomodoro[0]);
    }
  };

  const toggleTimer = () => {
    if (timeRemaining === 0) {
      // Reset timer if it's at 0
      setTimeRemaining(timerType.duration * 60);
    }
    setIsRunning(!isRunning);
  };

  const handleTimerTypeChange = (newTimerType: Pomodoro) => {
    setTimerType(newTimerType);
  };

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
              setTimerType={handleTimerTypeChange}
            />
          ))}
        </View>
        <Timer timeRemaining={timeRemaining} />
        <FokusButton
          isPlaying={isRunning}
          onPress={toggleTimer}
          title={isRunning ? "Pause" : timeRemaining === 0 ? "Reset" : "Start"}
        />
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
