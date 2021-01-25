import React from 'react';

//-----import camera------//
import {RNCamera} from 'react-native-camera';


// ----CAMERA MODULE----
// react-native-camera package (search)

// INSTALL CAMERA
// npm install react-native-camera --save

// GIVE PERMISSION
// Add this 
// <!-- Required -->
// <uses-permission android:name="android.permission.CAMERA" />
// in android/app/src/main/AndroidManifest.xml file

// ADD FOLLOWING 
// android {
//   ...
//   defaultConfig {
//     ...
//     missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
//   }
// }
// in android/app/build.gradle
// remaining all functions are similar to expo 


//-----------------------------------------//
//------React Native Cli Camera Module-----//
//-----------------------------------------//

function Camera({navigation}) {
  return (
    <RNCamera
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      type={RNCamera.Constants.Type.back}
    />
  );
}

export default Camera;
