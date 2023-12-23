import { View, Image, Text, StyleSheet} from 'react-native'
import React from 'react'
import tw from 'twrnc'

const LoadingScreen = () => {
  return (
    <View style={tw`items-center justify-center flex-1 bg-[#B684EF] pl-8 `}>
      <Image
        style={styles.imageStyle} 
        source={require("../Images/Heart.png")}
      />
      <Text style={styles.swiPetText}>SwiPet</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  imageStyle: {
    width: 128, 
    height: 85
  },

  swiPetText: {
    marginTop: 8,
    right:13,
    color: "white",
    fontFamily: 'Caveat-Bold',
    fontSize: 24
  }
})
export default LoadingScreen
