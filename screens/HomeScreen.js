import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ position: "relative" }}>
      <View style={styles.headerContainer}>
        <View style={styles.goContainer}>
          <Animatable.Text animation="bounceIn" style={styles.goText}>
            Go
          </Animatable.Text>
        </View>
        <View style={styles.travelContainer}>
          <Animatable.Text animation="bounceInDown" style={styles.travelText}>
            Travel
          </Animatable.Text>
        </View>
      </View>

      {/* Second section */}
      <View style={styles.secondSectionContainer}>
        <Text style={styles.enjoyTrip}>Enjoy your Trip with</Text>
        <Animatable.Text
          animation="fadeIn"
          easing="ease-in-out"
          iterationCount={3}
          style={styles.goodMemories}
        >
          Good Memories
        </Animatable.Text>
      </View>
      {/* description section */}
      <View
        style={{
          marginTop: 8,
          marginBottom: 8,
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <Text style={{ color: "#2C74B3" }}>
          Your Memories are precious to us, click on the *𝗚𝗼* Button to explore
          more.
        </Text>
      </View>

      {/* Circles section */}
      <View style={styles.circlesContainer}>
        <View style={styles.cyanCircle}></View>
        <View style={styles.orangeCircle}></View>
      </View>
      {/* Image section */}
      <View
        style={{
          position: "relative",
        }}
      >
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          resizeMode="contain"
          style={{
            width: 400,
            height: 430,
            position: "absolute",
            top: -20,
          }}
          source={require("../assets/travel.png")}
        />
      </View>

      {/* go button */}
      <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
        <Animatable.View
          animation={"pulse"}
          iterationCount={"infinite"}
          easing={"ease-in-out"}
          style={{
            borderWidth: 2,
            borderColor: "#46C2CB",
            borderRadius: 50,
            borderBottomWidth: 0,
            position: "absolute",
            padding: 6,
            top: 130,
            left: 50,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#46C2CB",
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                fontSize: 24,
                color: "#00425A",
                fontFamily: "sans-serif",
              }}
            >
              Go
            </Text>
          </View>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    flexDirection: "row",
  },
  goContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#00425A",
    position: "relative",
  },
  goText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    position: "absolute",
    top: 7,
    left: 10,
    color: "#39B5E0",
  },
  travelContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  travelText: {
    fontSize: 22,
    fontWeight: 500,
  },
  secondSectionContainer: {
    paddingLeft: 16,
  },
  enjoyTrip: {
    fontSize: 20,
    fontWeight: 400,
  },
  goodMemories: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 700,
    color: "#2DCDDF",
  },
  circlesContainer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    top: 200,
    overflow: "hidden",
    padding: 26,
  },
  cyanCircle: {
    width: 320,
    height: 320,
    borderRadius: 320 / 2,
    backgroundColor: "#46C2CB",
    top: -12,
    left: 145,
    bottom: 20,
  },
  orangeCircle: {
    width: 320,
    height: 320,
    borderRadius: 320 / 2,
    backgroundColor: "orange",
    top: -80,
    right: 90,
  },
});

export default HomeScreen;
