import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Surface, TextInput } from "react-native-paper";
import { useState, useEffect } from "react";
import { getLatLon } from "../api";
import { getPlacesData } from "../api";

import ExploreContainer from "../components/ExploreContainer";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

const Discover = ({ navigation }) => {
  const [activeIcon, setActiveIcon] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [place, setPlace] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(latitude, longitude, activeIcon)
      .then((data) => {
        // console.log(data);
        setMainData(data);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
  }, [latitude, longitude, activeIcon]);

  const formSubmitHandler = async (e) => {
    setIsLoading(true);
    if (place.trim().length <= 0) {
      setIsLoading(false);
      alert("Please Enter a valid City Name");
      return;
    }
    getLatLon(place)
      .then((response) => {
        if (response) {
          // console.log(response.data[0]);
          setLatitude(response.data[0].lat);
          setLongitude(response.data[0].lon);
        }
      })
      .catch((err) => {
        if (err) {
          setIsLoading(false);
          alert("Please Enter a Valid 'City' Name");
          return;
        }
      });
  };

  return (
    <View>
      <View style={styles.discoverHeader}>
        <View>
          <Animatable.Text animation="flipInY">
            <View style={{ display: "flex" }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Surface
                  elevation={4}
                  style={{
                    width: 30,
                    height: 30,
                    padding: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="arrow-left" size={21} color="#00425A" />
                </Surface>
              </TouchableOpacity>
              <Text style={styles.discover}>Discover</Text>
            </View>
          </Animatable.Text>
          <Animatable.Text animation={"flipInX"} style={styles.beautifulDay}>
            your beautiful day
          </Animatable.Text>
        </View>
        <Animatable.Image
          animation={"bounceIn"}
          easing={"ease-in-out"}
          style={{ width: 65, height: 65 }}
          source={{
            uri: "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png",
          }}
        />
      </View>
      <Animatable.View animation="flipInX">
        {/* <View style={{ position: "absolute", top: 12, left: 10, zIndex: 10 }}>
          <FontAwesome name="search" size={24} color="#2C74B3" />
        </View> */}
        <TextInput
          placeholder="Search Place"
          left={
            <TextInput.Icon
              icon="search-web"
              onPress={() => {
                formSubmitHandler;
              }}
            />
          }
          mode="flat"
          value={place}
          onSubmitEditing={formSubmitHandler}
          onChangeText={(query) => setPlace(query)}
        ></TextInput>
      </Animatable.View>

      {/* hotels, restaurants, attractions section */}
      {isLoading ? (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
            height: "60%",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView alwaysBounceHorizontal={"true"}>
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {/* Hotels section */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  setActiveIcon("hotels");
                  formSubmitHandler();
                }}
              >
                {activeIcon !== "hotels" && (
                  <Image
                    style={[styles.imageIcons]}
                    resizeMode="contain"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20191123/original/pngtree-hotel-building-vector-illustration-with-simple-design-hotel-icon-png-image_5194507.jpg",
                    }}
                  />
                )}
                {activeIcon === "hotels" && (
                  <Surface style={styles.surface}>
                    <Image
                      style={[styles.imageIcons]}
                      resizeMode="contain"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20191123/original/pngtree-hotel-building-vector-illustration-with-simple-design-hotel-icon-png-image_5194507.jpg",
                      }}
                    />
                  </Surface>
                )}
              </TouchableOpacity>
              <Text style={{ textAlign: "center", color: "#39B5E0" }}>
                Hotels
              </Text>
            </View>
            {/* Restaurants section */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  setActiveIcon("restaurants");
                  formSubmitHandler();
                }}
              >
                {activeIcon !== "restaurants" && (
                  <Image
                    style={[styles.imageIcons]}
                    resizeMode="contain"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20190630/original/pngtree--png-image_4124521.jpg",
                    }}
                  />
                )}
                {activeIcon === "restaurants" && (
                  <Surface style={styles.surface}>
                    <Image
                      style={[styles.imageIcons]}
                      resizeMode="contain"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20190630/original/pngtree--png-image_4124521.jpg",
                      }}
                    />
                  </Surface>
                )}
              </TouchableOpacity>
              <Text style={styles.imageTexts}>Restaurants</Text>
            </View>
            {/* Attraction section */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  setActiveIcon("attractions");
                  formSubmitHandler();
                }}
              >
                {activeIcon !== "attractions" && (
                  <Image
                    style={[styles.imageIcons]}
                    resizeMode="contain"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-tourist-attraction-icon-design-png-image_4470837.jpg",
                    }}
                  />
                )}
                {activeIcon === "attractions" && (
                  <Surface style={styles.surface}>
                    <Image
                      style={[styles.imageIcons]}
                      resizeMode="contain"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-tourist-attraction-icon-design-png-image_4470837.jpg",
                      }}
                    />
                  </Surface>
                )}
              </TouchableOpacity>
              <Text style={styles.imageTexts}>Attractions</Text>
            </View>
          </View>
          {/* explore sections */}
          <View style={{ marginTop: 16 }}>
            {mainData?.length > 0 ? (
              <ExploreContainer places={mainData} />
            ) : (
              <>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                    padding: 8,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 300, height: 300 }}
                    source={{
                      uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-wifi-signal-4516678-3749030.png",
                    }}
                  />
                  <Text
                    style={{ fontWeight: 400, fontSize: 22, color: "#00425A" }}
                  >
                    Oops!, No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  discoverHeader: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  discover: {
    fontSize: 23,
    fontWeight: 500,
    color: "#00425A",
  },
  beautifulDay: {
    fontSize: 18,
    fontWeight: 300,
    letterSpacing: 2,
  },
  imageIcons: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  imageTexts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#39B5E0",
  },
  surface: {
    padding: 8,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
    borderRadius: 70 / 2,
    borderWidth: 6,
    borderColor: "#46C2CB",
    borderBottomWidth: 0,
  },
});

export default Discover;
