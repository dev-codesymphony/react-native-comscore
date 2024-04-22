import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { trackScreen } from "../../../src";

const About = () => {
  useLayoutEffect(() => {
    console.log("inside useLayoutEffect");
    trackScreen("About");
  }, []);

  return (
    <View>
      <Text style={{ textAlign: "center" }}>About page</Text>
    </View>
  );
};

export default About;
