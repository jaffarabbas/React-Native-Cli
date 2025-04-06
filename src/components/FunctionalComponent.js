import { Alert, SafeAreaView, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import {StyleComponentBg,StyleText} from "../styles/StyleComponents";
import { useState } from "react";

const FunctionalComponent = () => {
const [currentColor,setCurrentColor] = useState("white");
  return (
    <SafeAreaView style={{backgroundColor: "white", flex: 1}}>
      <StyleComponentBg backgroundColor={currentColor}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}   >
          <Text style={{color: "blue"}}>Functional Component</Text>
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("red")} title="Add Red Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("blue")} title="Add Blue Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("green")} title="Add Green Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("yellow")} title="Add Yellow Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("purple")} title="Add Purple Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("orange")} title="Add Orange Color" />
          <View style={{height: 20}} />
          <CustomButton onPress={() => setCurrentColor("white")} title="Add White Color" />
        </View>
      </StyleComponentBg >
    </SafeAreaView>
  );
}

export default FunctionalComponent;
