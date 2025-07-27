import { FlatList, Text, View } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList data={[offers]} renderItem={({item}) =>(<div/>)}/>
    </SafeAreaView>
  );
}