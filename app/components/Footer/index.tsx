import { StyleSheet, Text, View } from "react-native";
const year = new Date().getFullYear();
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Made with 💜 by IgorJFS - Alura Project
      </Text>
      <Text style={styles.footerText}>
        &copy; IgorJFS - Chronos Pomodoro {year}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5,
  },
});
