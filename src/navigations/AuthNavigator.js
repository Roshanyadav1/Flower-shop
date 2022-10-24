import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing components
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
// import BottomTab from './BottomTab';


const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name="sign-up" component={SignUp} />
            <AuthStack.Screen name="sign-in" component={SignIn} />
            {/* <AuthStack.Screen name="home" component={BottomTab} /> */}
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
