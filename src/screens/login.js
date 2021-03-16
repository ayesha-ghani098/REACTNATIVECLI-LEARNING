import React,{useState} from 'react';
import {StyleSheet,Text, Button, View,TextInput} from 'react-native'

import { LoginManager } from "react-native-fbsdk";

function Login({navigation}) {

  const [input,setInput] = useState("");

const facebook_login = () => {
LoginManager.logInWithPermissions(['public_profile']).then(
  function (result) {
    if (result.isCancelled) {
      console.log('Login cancelled');
    } else {
      console.log(
        'Login success with permissions: ' +
          result.grantedPermissions.toString(),
      );
    }
  },
  function (error) {
    console.log('Login fail with error: ' + error);
  },
);
}

    return(
<View>
<Button onPress={facebook_login} title="Facebook Login"  />
<TextInput placeholder="Enter Input" onChangeText={(text)=> setInput(text)}/>
<Text>{input}</Text>
</View>
    )
}

export default Login;