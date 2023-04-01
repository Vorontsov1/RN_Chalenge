import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FadeIn from '../../components/FadeIn';

const HomeScreen = ({ navigation }) => {
    
    const navigateToSignUp = () => {
        navigation.navigate('SignUp')
    }
  return (
    <View style={styles.container}>
      <FadeIn delay={300}>
        <Image
          style={styles.image}
          source={require("../../assets/image-001.png")}
          resizeMode="contain"
        />
      </FadeIn>
      <FadeIn delay={500}>
        <Text style={styles.textBold}>{`Discover Your\nDream Job Here`}</Text>
        <Text
          style={styles.textRegular}
        >{`Explore all the most exiting jobs roles \nbased on your interest and study major`}</Text>
      </FadeIn>

      <FadeIn delay={800}>
        <View style={styles.wrap}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToSignUp()}
          >
            <Text style={styles.textSignUp}>{`Sign Up`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondButton}
            onPress={() => navigateToSignUp()}
          >
            <Text style={styles.textSignIn}>{`Sign In`}</Text>
          </TouchableOpacity>
        </View>
      </FadeIn>
    </View>
  );
}

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e1e4ee",
    alignItems: "center",
  },
  image: {
    width: 380,
    height: 400,
    backgroundColor: "#d99bf1",
    borderRadius: 25,
  },
  textBold: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
    color: "#353045",
    textAlign: "center",
    marginTop: 40,
  },
  textRegular: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#353045",
    textAlign: "center",
    marginTop: 20,
  },
  wrap: {
    flexDirection: "row",
    marginTop: 60,
    backgroundColor: "#e9ecf7",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
  },
  secondButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#e9ecf7",
    borderColor: "#FFF",
    borderBottomEndRadius: 10,
    borderTopRightRadius: 10,
  },
  textSignUp: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#353045",
  },
  textSignIn: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#353045",
  },
});