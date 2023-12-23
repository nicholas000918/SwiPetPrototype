import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import useAuth from './hooks/useAuth';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/SignInScreen';
import ProfileScreen from './screens/ProfileScreen';
import ModalScreen from './screens/ModalScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        {/* {user?( */}
        {/* <> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Sign" component={SignInScreen} options={{ headerShown: false }}/>

        <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={ChatScreen}/>
        </Stack.Group>

        <Stack.Group screenOptions = {{presentation: 'modal'}}>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Modal" component={ModalScreen} options={{headerShown: false}}/>
        </Stack.Group>
       
        {/* </> */}
        {/* ) : ( */}
        {/* )} */}
    </Stack.Navigator>
  )
}

export default StackNavigator
