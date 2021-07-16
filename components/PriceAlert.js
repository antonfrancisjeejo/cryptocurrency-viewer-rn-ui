import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 3.5,
        marginHorizontal: SIZES.radius + 12,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        ...customContainerStyle,
        ...styles.shadow,
      }}
    >
      <Image
        source={icons.notification_color}
        style={{
          width: 25,
          height: 25,
          marginLeft: SIZES.radius,
        }}
      />
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.radius,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Set Price Alert
        </Text>
        <Text
          style={{
            ...FONTS.body4,
          }}
        >
          Get Notified when your coins are moving
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{
          width: 25,
          height: 25,
          tintColor: COLORS.gray,
          marginRight: SIZES.radius,
        }}
      />
    </TouchableOpacity>
  );
};

export default PriceAlert;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
