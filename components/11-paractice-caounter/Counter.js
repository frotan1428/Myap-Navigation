<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Board from "./Board";
import Toolbar from "./ToolBar";
import Spacer from "../common/Spacer";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);


  return (
    <View style={styles.container}>
      <Board counterVal={counterVal}/>
      <Spacer />
      <Toolbar setCounterVal={setCounterVal}/>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
=======
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Board from "./Board";
import Toolbar from "./ToolBar";
import Spacer from "../common/Spacer";

const Counter = () => {
  const [counterVal, setCounterVal] = useState(0);


  return (
    <View style={styles.container}>
      <Board counterVal={counterVal}/>
      <Spacer />
      <Toolbar setCounterVal={setCounterVal}/>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
>>>>>>> 16be425776930f3d9c8b4f1ea0a596003a821c34
});