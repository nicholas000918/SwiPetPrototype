import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable, Modal } from 'react-native'
import tw from 'twrnc'
import { Entypo } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'


const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
            <View style={tw`flex-1 pt-10 bg-[#FFFFFF]`}>
                <View style={tw`items-center pb-2`}>
                    <Text style={[{ fontFamily: "PlusJakartaSans-Regular" }, { fontSize: 17 }]}>PROFILE</Text>
                </View>


                <View style={tw`h-50 items-center bg-[#F9F3FE]`}>
                    <View style={tw`pt-3`}>

                        {/*Profile Picture*/}
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <View style={tw`h-23.5 w-23.5 left-3 rounded-full bg-[#B684EF]`}>
                                <Image style={tw`h-23 w-23 rounded-full`} source={require("../Images/Elon.jpeg")} />
                            </View>
                        </TouchableOpacity>

                        <View style={tw`pl-1 pt-2 justify-center items-center`}>
                            <Text style={[{ fontFamily: 'SF-Pro-Medium' }, { fontSize: 14 }, { fontWeight: 500 }]}>Elon Musk, 23</Text>
                        </View>
                        {/*Edit Profile Button*/}
                        <View style={[styles.buttonView, tw`mt-3`]}>
                            <Pressable
                                android_ripple={{ color: '#FCA2CF', borderless: true }}
                                style={styles.loginButton}
                                onPress= {()=> navigation.navigate("Modal")}>
                                <View style={tw`flex-row`}>
                                    <Entypo name="edit" size={14} color="#000000" style={tw`m-1`} />
                                    <Text style={[{ fontFamily: "SF-Pro-Medium" }, { fontSize: 14 }, { fontWeight: 600 }]}>Edit Profile</Text>
                                </View>

                            </Pressable>
                        </View>
                    </View>
                </View>

                {/*About Me*/}

                <View style={tw`h-26 p-6`}>
                    <Text style={[{ fontFamily: "SF-Pro-Medium" }, { fontSize: 15 }, { fontWeight: 700 }]}>About me</Text>
                    <Text style={[{ fontFamily: "SF-Pro" }, tw`pt-1`, { fontSize: 14 }]}>Hi, I'm Elon Musk, a passionate dog lover with a deep affection for all canine companions. I can't wait to welcome a furry friend into my life.</Text>
                </View>

                {/*Basic Info*/}

                
                <View style={tw`h-86 p-3`}>
                    <View style={tw`m-2`}><Text style={[{ fontFamily: "SF-Pro-Medium" }, { fontSize: 15 }, { fontWeight: 700 }]}>Basic Info</Text></View>
                    <View style={tw`flex-row pl-1 m-2`}>
                        <Entypo name="clipboard" size={17} color="#B684EF" style={tw`pr-3`} />
                        <Text style={[{ fontFamily: "SF-Pro" }, { fontSize: 14 }]}>45 years old</Text>
                    </View>
                    <View style={tw`flex-row pl-1 m-2`}>
                        <Entypo name="suitcase" size={17} color="#B684EF" style={tw`pr-3`} />
                        <Text style={[{ fontFamily: "SF-Pro" }, { fontSize: 14 }]}>Software Developer</Text>
                    </View>
                    <View style={tw`flex-row pl-1 m-2`}>
                        <Entypo name="location" size={17} color="#B684EF" style={tw`pr-3`} />
                        <Text style={[{ fontFamily: "SF-Pro" }, { fontSize: 14 }]}>United States</Text>
                    </View>
                    <View style={tw`flex-row pl-1 m-2`}>
                        <Entypo name="mail" size={17} color="#B684EF" style={tw`pr-3`} />
                        <Text style={[{ fontFamily: "SF-Pro" }, { fontSize: 14 }]}>elonmusktesla@gmail.com</Text>
                    </View>
               

                </View>


                <View style={tw`w-full h-15 justify-center items-center bg-white`}>
                    <View style={tw`flex-row justify-evenly`}>
                        <Entypo style={tw`mx-8`} name="baidu" size={26} color="#a9a7b4" onPress={() => navigation.navigate("Home")} />
                        <Entypo style={tw`mx-8`} name="message" size={26} color="#a9a7b4" onPress={() => navigation.navigate("Chat")} />
                        <Entypo style={tw`mx-8`} name="bell" size={26} color="#a9a7b4" onPress={() => navigation.navigate("Chat")} />
                        <Entypo style={tw`mx-8`} name="edit" size={26} color="#a9a7b4" onPress={() => navigation.navigate("Modal")} />
                    </View>
                </View>
            </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    buttonView: {
        justifyContent: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "black",
        elevation: 5,
    },

    loginButton: {
        height: 30,
        width: 120,
        backgroundColor: '#FF69B4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    }

})