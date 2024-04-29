import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TabIcon = ({ iconName, focused, label }) => (
  <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: 10, backgroundColor: focused ? "#fb5a17" : "white", width: "100%", height: "115%", borderRadius: 50, marginBottom: 0}}>
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