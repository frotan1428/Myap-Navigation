<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "../common/IconButton";

const Toolbar = ({ setCounterVal }) => {
  return (
    <View style={styles.container}>
      <IconButton
        title="Inc"
        icon="clock-plus-outline"
        onPress={() => setCounterVal((prev) => prev + 1)}
      />
      <IconButton
        title="Dec"
        icon="clock-minus-outline"
        onPress={() => setCounterVal((prev) => (prev > 0 ? prev - 1 : 0))}
      />
      <IconButton
        title="Res"
        icon="clock-time-six-outline"
        onPress={() => setCounterVal(0)}
      />
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
=======
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconButton from "../common/IconButton";

const Toolbar = ({ setCounterVal }) => {
  return (
    <View style={styles.container}>
      <IconButton
        title="Inc"
        icon="clock-plus-outline"
        onPress={() => setCounterVal((prev) => prev + 1)}
      />
      <IconButton
        title="Dec"
        icon="clock-minus-outline"
        onPress={() => setCounterVal((prev) => (prev > 0 ? prev - 1 : 0))}
      />
      <IconButton
        title="Res"
        icon="clock-time-six-outline"
        onPress={() => setCounterVal(0)}
      />
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
>>>>>>> 16be425776930f3d9c8b4f1ea0a596003a821c34
});