import { View, Button, SafeAreaView, Alert } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { trackScreen, updateConsent, updateData1P } from "../../../src";
import { useNavigation } from "@react-navigation/native";
import type { Data1p } from "../../../src/utility/type";

const Home = () => {
  const PUBLISHER_ID = "16676137";
  const navigation = useNavigation();
  const [consentState, setConsentState] = useState<string>("");

  async function updateConsentState(consentState: string) {
    try {
      await updateConsent(consentState);
    } catch (e) {
      console.log("Error in updating consent", e);
    }
  }

  function getConsent() {
    Alert.alert(
      "Require consent",
      "Do you want to allow ComScore to collect your usage data?",
      [
        { text: "Decide later", onPress: () => setConsentState("") },
        {
          text: "Deny",
          onPress: () => setConsentState("0"),
          style: "destructive",
        },
        {
          text: "Agree",
          onPress: () => setConsentState("1"),
          style: "default",
        },
      ],
    );
  }

  async function onUpdate1pData() {
    const data_1p: Data1p = {
      publisherId: PUBLISHER_ID,
      cs_fpid: "1605266069802_50777152",
      cs_fpit: "c",
      cs_fpdm: "39642313001",
      cs_fpdt: "01",
    };

    await updateData1P(data_1p);
  }

  useEffect(() => {
    updateConsentState(consentState);
  }, [consentState]);

  useLayoutEffect(() => {
    console.log("inside useLayoutEffect");
    trackScreen("Home");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 15,
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ padding: 10 }}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Button
            title="Go to Contact"
            onPress={() => navigation.navigate("Contact")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Button
            title="Go to Contact"
            onPress={() => navigation.navigate("Contact")}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Update 1P data" onPress={onUpdate1pData} />
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Update Consent" onPress={() => getConsent()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
