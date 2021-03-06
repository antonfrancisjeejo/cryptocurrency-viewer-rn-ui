import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({ right }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.base,
              ...FONTS.h2,
              fontSize: 20,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
