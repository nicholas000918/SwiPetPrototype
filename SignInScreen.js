import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={tw`flex-1 bg-[#B684EF]`}>
        <View style={tw`items-center justify-center flex-1 bg-[#B684EF] pt-8 pl-8`}>
            <Image
                style={styles.imageStyle}
                source={require("../Images/Heart.png")}
            />
            <Text style={styles.swiPetText}>SwiPet</Text>
            </View >

            <View style={tw `px-8 py-4`}><Text style={[{color:"white"},{textAlign:"center"},{fontFamily: 'AbyssinicaSIL'}, {fontSize: 13}]}>By tapping Create Account or Sign In, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.</Text></View>

            <View style={tw`mx-4 mb-4`}>
            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    android_ripple={{ color: '#FCA2CF', borderless: true }}
                    style={styles.loginButton}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </Pressable>
            </View>

            <View style={styles.buttonView}>
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    android_ripple={{ color: '#FCA2CF', borderless: true }}
                    style={styles.anotherButton}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
            </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 128,
        height: 85
    },

    swiPetText: {
        marginTop: 8,
        right: 13,
        color: "white",
        fontFamily: 'Caveat-Bold',
        fontSize: 24
    },

    buttonView: {
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "black",
        elevation: 5,
        margin:4
      },

      loginButton: {
        height: 54,
        backgroundColor: '#FF69B4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
      },

      anotherButton: {
        height: 54,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
      },

      buttonText: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 15,
        fontWeight: "600",
      }

})
export default SignInScreen
