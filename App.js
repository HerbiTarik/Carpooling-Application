import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [afficherImage, setAfficherImage] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    const masquerImage = () => {
      setAfficherImage(false);
    };

    const timeoutId = setTimeout(masquerImage, 9000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      onLayout={onLayoutRootView}
    >
      {afficherImage && (
        <LottieView
          source={require("./assets/animation.json")}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      )}
    </View>
  );
}
