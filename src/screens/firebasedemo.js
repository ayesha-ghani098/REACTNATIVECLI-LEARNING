import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';

import database from '@react-native-firebase/database';

//--------------------------------------------------//
//--------------------FIREBASE DEMO-----------------//
//--------------------------------------------------//

function FirebaseDemo({navigation}) {
  //--------- State to store data---------//

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //---------Save Data to Firebase---------//

  const save_data = () => {
    let user = {
      email,
      password,
    };
    database().ref('/').child('users').push(user);
    console.log('Email: ', email);
    console.log('Password: ', password);

    setEmail("");
    setPassword("");
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 17}}>FIREBASE DEMO</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <Button onPress={save_data} title="Save Data" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default FirebaseDemo;
