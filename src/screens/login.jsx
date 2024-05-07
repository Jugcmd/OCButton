import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

const Login = () => {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  const navigation = useNavigation();

  const onLoginSuccess = () => {
    console.log("onLoginSuccess");
    navigation.navigate("Home");
  };

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>

          {/* Logo/Top Banner */}

          <Image
            source={require("../../assets/images/OC Logo.png")}
            style={styles.logo}
          />
        </View>

        {/* Login Screen */}

        <View style={styles.content}>
          <Text style={styles.title}>Email</Text>

          <TextInput
            placeholder="Enter your email here..."
            inputMode="email"
            textContentType="emailAddress"
            style={styles.input}
          />

          <Text style={styles.title}>Password</Text>

          <TextInput
            placeholder="Enter your password here..."
            secureTextEntry={true}
            textContentType="password"
            style={styles.input}
          />

          {/* Sign in button */}

          <Pressable
            onPress={() => onLoginSuccess()}
            style={({ pressed }) => [
              styles.signInBtn,
              pressed ? styles.signInBtnPressed : null,
            ]}
          >
            <Text style={styles.signInText}>Sign in</Text>
          </Pressable>
        </View>

        {/* Bottom Banner/Forgot Password */}

        <View style={styles.bottom}>
          <Text style={{ color: "white", fontSize: 16 }}>
            Forgotten password?
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Contact Red on +123 694 209
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>Open 24/7</Text>
        </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },

  content: {
    marginTop: 100,
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
  },

  top: {
    position: "absolute",
    top: 0,
    width: "110%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#003145",
    height: 300,
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 500,
  },

  logo: {
    width: 270,
    height: 130,
    alignSelf: "center",
    top: 50,
    borderRadius: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
    paddingBottom: 10,
  },

  input: {
    padding: 10,
    borderRadius: 5,
    width: "95%",
    marginBottom: 20,
    backgroundColor: "rgba(193,190,190,0.4)",
    fontFamily: "Roboto_400Regular_Italic",
    fontSize: 16,
  },

  signInBtn: {
    backgroundColor: "#003145",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginRight: 20,
  },

  signInBtnPressed: {
    backgroundColor: "rgba(0,23,32,0.85)",
  },

  signInText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto_400Regular",
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    width: "110%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#FB5A17",
    height: 200,
    borderTopRightRadius: 400,
    borderTopLeftRadius: 400,
    paddingRight: 40,
    paddingLeft: 40,
  },
});

export default Login;
