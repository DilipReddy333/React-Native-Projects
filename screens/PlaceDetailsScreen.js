import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const PlaceDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const place = route.params.place;
  // console.log(place);
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 4, paddingVertical: 6 }}>
        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: 300,
              borderRadius: 7,
              objectFit: "cover",
            }}
            source={{
              uri: place?.photo?.images?.large?.url
                ? place?.photo?.images?.large?.url
                : "https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4=",
            }}
          />
          <View
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              insetX: 0,
              top: 5,
              alignItems: "center",
              gap: 600,
              justifyContent: "space-between",
              paddingHorizontal: 6,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 30,
                height: 30,
                borderRadius: 5,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#00425A" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingVertical: 8, paddingHorizontal: 4 }}>
          <Text style={{ fontWeight: 700, fontSize: 20, color: "#39B5E0" }}>
            {place.name}
          </Text>
          <View style={{ gap: 5 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo name="location-pin" size={22} color="#2C74B3" />
              <Text style={{ color: "#2C74B3" }}>{place.location_string}</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <MaterialIcons name="attach-money" size={22} color="#2C74B3" />
              <Text style={{ color: "#2C74B3" }}>
                {place.price ? place.price : "Not Available"}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo name="shop" size={20} color="#2c74B3" />
              <Text style={{ color: "#2C74B3" }}>
                {place.open_now_text ? place.open_now_text : "Not Available"}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 4, paddingHorizontal: 4 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            {/* ratings */}
            {place?.rating && (
              <>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#FFB4B4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <AntDesign name="star" size={24} color="brown" />
                </View>
                <View>
                  <Text style={{ color: "#39B5E0", fontWeight: "bold" }}>
                    {place?.rating}
                  </Text>
                  <Text style={{ color: "#39B5E0", fontWeight: 200 }}>
                    Ratings
                  </Text>
                </View>
              </>
            )}

            {/* bearing  */}
            {place?.bearing && (
              <>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#FFB4B4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <FontAwesome5 name="map-signs" size={22} color="brown" />
                </View>
                <View>
                  <Text style={{ color: "#39B5E0", fontWeight: "bold" }}>
                    {place?.bearing ? place.bearing : "Not Available"}
                  </Text>
                  <Text style={{ color: "#39B5E0", fontWeight: 200 }}>
                    Bearing
                  </Text>
                </View>
              </>
            )}
            {/* position ranking */}
            {place?.ranking_position && (
              <>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#FFB4B4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="arrange-bring-to-front"
                    size={22}
                    color="brown"
                  />
                </View>
                <View>
                  <Text style={{ color: "#39B5E0", fontWeight: "bold" }}>
                    {place?.ranking_position
                      ? place.ranking_position
                      : "Not Available"}
                  </Text>
                  <Text style={{ color: "#39B5E0", fontWeight: 200 }}>
                    Ranking
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
        {/* Description */}
        {place?.description && (
          <>
            <View style={{ paddingVertical: 8, paddingHorizontal: 4 }}>
              <Text>{place?.description}</Text>
            </View>
          </>
        )}
        {/* Cuisine Array */}
        {place?.cuisine && (
          <View style={styles.cuisineView}>
            {place.cuisine.map((c) => {
              return (
                <TouchableOpacity key={c.key} style={styles.eachCuisine}>
                  <Text>{c.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        {/* address section */}
        <View style={styles.addressSection}>
          {place.phone && (
            <View style={styles.phoneContainer}>
              <View>
                <FontAwesome5 name="phone-alt" size={24} color="#002B5B" />
              </View>
              <Text>{place?.phone}</Text>
            </View>
          )}
          {place.email && (
            <View style={styles.phoneContainer}>
              <View>
                <MaterialIcons name="email" size={24} color="#002B5B" />
              </View>
              <Text>{place?.email}</Text>
            </View>
          )}
          {place.address && (
            <View style={styles.phoneContainer}>
              <View>
                <MaterialIcons name="location-pin" size={24} color="#002B5B" />
              </View>
              <Text>{place?.address}</Text>
            </View>
          )}
          {place.web_url && (
            <View style={styles.phoneContainer}>
              <View>
                <MaterialCommunityIcons name="web" size={24} color="#002B5B" />
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL(`${place.web_url}`)}
              >
                <Text numberOfLines={1} style={{ color: "#1C6DD0" }}>
                  {place?.web_url}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {/* book now button */}
          <TouchableOpacity
            onPress={() =>
              alert("Buddy, To Book your trip check the url to know more")
            }
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cuisineView: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 4,
  },
  eachCuisine: {
    padding: 4,
    borderRadius: 5,
    textAlign: "center",
    backgroundColor: "#98DFD6",
  },
  addressSection: {
    padding: 12,
    backgroundColor: "#E9E8E8",
    marginTop: 8,
    borderRadius: 5,
    display: "flex",
    gap: 5,
    marginBottom: 48,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: "#3cc3b1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 8,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 18,
  },
});

export default PlaceDetailsScreen;
