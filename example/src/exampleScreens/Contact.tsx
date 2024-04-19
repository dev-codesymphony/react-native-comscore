import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { trackScreen } from "react-native-comscore";

const Contact = () => {
  useLayoutEffect(() => {
    console.log("inside useLayoutEffect");
    trackScreen("Contact");
  }, []);

  return (
    <View>
      <Text style={{ textAlign: "center" }}>Contact page</Text>
    </View>
  );
};

export default Contact;