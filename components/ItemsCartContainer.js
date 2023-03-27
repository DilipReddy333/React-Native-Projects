import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemsCartContainer = ({ imageSrc, title, location, place }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Place Details", { place: place })}
      style={{
        width: 150,
        padding: 8,
        borderRadius: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "lightgray",
      }}
    >
      <Image
        style={{
          width: 132,
          height: 100,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "lightgray",
        }}
        resizeMode="contain"
        source={{ uri: imageSrc }}
      />
      <Text
        numberOfLines={1}
        style={{ fontWeight: 400, fontSize: 18, color: "#39B5E0" }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo name="location-pin" size={20} color="#2C74B3" />
        <Text numberOfLines={1} style={{ color: "#2C74B3" }}>
          {location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemsCartContainer;
