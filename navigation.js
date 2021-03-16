import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import Camera from './src/screens/camera';
import IMagePicker from './src/screens/image-picker';
import FirebaseDemo from './src/screens/firebasedemo';
import Login from './src/screens/login';

//-----------------------------------------//
//----------------Navigation---------------//
//-----------------------------------------//

const Stack = createStackNavigator();

function NAvigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="IMagePicker" component={IMagePicker} />
        <Stack.Screen name="FirebaseDemo" component={FirebaseDemo} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NAvigation;
