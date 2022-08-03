import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";



const MyPlatform = () => {
  return (
    <View style={[ globalStyles.container]}>
      <Text>Font Scale: {screen.fontScale}</Text>
      <Text>Width: {screen.width}</Text>
      <Text>Height: {screen.height}</Text>
      <Text>Scale: {screen.scale}</Text>
    </View>
  )
}

export default MyPlatform

const styles = StyleSheet.create({})