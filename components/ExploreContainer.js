import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ItemsCartContainer from "./ItemsCartContainer";

const ExploreContainer = ({ places }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <Text style={{ color: "#2C74B3", fontSize: 22, fontWeight: "bold" }}>
          Top Tips
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => alert("cliked on the explore button")}
            style={{ flexDirection: "row" }}
          >
            <Text
              style={{
                color: "#39B5E0",
                fontSize: 20,
                fontWeight: 400,
                marginRight: 4,
              }}
            >
              Explore
            </Text>
            <View>
              <FontAwesome
                name="long-arrow-right"
                style={{ marginTop: 4 }}
                size={24}
                color="#39B5E0"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* card components for displaying the images and the places description */}

      <View
        style={{
          paddingHorizontal: 4,
          marginTop: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          height: 1570,
        }}
      >
        {places?.map((place, i) => {
          return (
            <ItemsCartContainer
              key={i}
              imageSrc={
                place?.photo?.images?.medium?.url
                  ? place?.photo?.images?.medium?.url
                  : "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4="
              }
              title={place.name}
              location={place.location_string}
              place={place}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ExploreContainer;
