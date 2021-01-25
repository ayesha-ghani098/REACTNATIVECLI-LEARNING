import React from 'react';
import {View, Button} from 'react-native';

//-----import camera------//
import ImagePicker from 'react-native-image-picker';


// ----IMAGE PICKER MODULE----
// react-native-image-picker package (search)

// INSTALL IMAGE PICKER
// npm i react-native-image-picker


// GIVE PERMISSION
// Add this 
// <!-- Required -->
// <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
// in android/app/src/main/AndroidManifest.xml file

   const options = {
     title: 'Select Avatar',
     customButtons: [{name: 'fb', title: 'Chppse Photo from Facebook'}],
     storageOptions: {
       skipBackup: true,
       path: 'image',
     },
   };


//-----------------------------------------//
//------React Native Cli IMage Picker------//
//-----------------------------------------// 

function IMagePicker(){

 

    const open_picker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response=',response);

            if (response.didCancel) {
              console.log('user cancelled image picker');
            } else if (response.error) {
              console.log('Imagepicker error', response.error);
            } else if (response.customButton) {
              console.log('Use tapped custom button', response.customButton);
            }else {
                const source = {
                    uri: response.uri
                };

                console.log(source);
            }
        })

    }

    return(
        <View>
            <Button
            onPress={open_picker}
            title="Choose Image"
            />
        </View>
    )
}

export default IMagePicker;