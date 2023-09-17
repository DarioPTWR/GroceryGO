import React, { useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";

const PointsBar = () => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  // Function to increase points (you can trigger this function as needed)
  const increasePoints = () => {
    Animated.timing(animatedWidth, {
      toValue: 1, // Increase width to 1 (100%)
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // Set to false for Android
    }).start();
  };

  // User's level (you can replace this with your actual user level)
  const userLevel = 5;

  // Total points (you can replace this with your actual total points value)
  const totalPoints = 500;

  return (
    <View style={styles.container}>
      <View style={styles.levelCircle}>
        <Text style={styles.levelText}>{userLevel}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>
          Points: {Math.floor(animatedWidth.__getValue() * totalPoints)}
        </Text>
        <View style={styles.pointsBar}>
          <Animated.View
            style={[
              styles.pointsFill,
              {
                width: animatedWidth.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center horizontally
  },
  levelCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderColor: "black", // Border color
    borderWidth: 2, // Border width
  },
  levelText: {
    fontSize: 24,
    color: "black", // Text color
  },
  pointsContainer: {
    flex: 1,
  },
  pointsText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  pointsBar: {
    backgroundColor: "grey",
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  pointsFill: {
    backgroundColor: "green",
    height: "100%",
  },
});

export default PointsBar;
