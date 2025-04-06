import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: "blue", padding: 10, borderRadius: 5}}>
        <Text style={{color: "white"}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
