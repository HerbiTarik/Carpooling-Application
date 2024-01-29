import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const [afficherImage, setAfficherImage] = useState(true);

  useEffect(() => {
    const masquerImage = () => {
      setAfficherImage(false);
    };

    const timeoutId = setTimeout(masquerImage, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-white">
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
