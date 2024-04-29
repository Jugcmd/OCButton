import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = ({ iconName, focused, label }) => (
  <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: focused ? "#fb5a17" : "white", width: "100%", height: "100%", borderRadius: 30}}>
    <MaterialCommunityIcons
      name={iconName}
      color={focused ? "white" : "#fb5a17"}
      size={40}
    />
    <Text style={{ fontSize: 18, color: focused ? "white" : "#fb5a17" }}>
      {label}
    </Text>
  </View>
);

export default TabIcon;