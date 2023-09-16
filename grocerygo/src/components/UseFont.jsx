import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Poppins': require("../../assets/Poppins-Regular.ttf"),
  });