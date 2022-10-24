import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

// import BottomTab from './BottomTab';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => {
  return (
    <>
      <NavigationContainer >
        <AuthNavigator />
        {/* <BottomTab /> */}
      </NavigationContainer>
    </>
  );
};

export default AppNavContainer;
