import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';


//-----------------------------------------//
//--------------------Home-----------------//
//-----------------------------------------//

function Home({navigation}) {

  //---------Navigation to Camera Screen---------//

  const navigatetocamera = () => {
    navigation.navigate('Camera');
  };

  //---------Navigation to Image Picker Screen---------//

  const navigatetoimagepicker = () => {
    navigation.navigate('IMagePicker');
  };


  const navigatetofirebasedemo = ()=>{
    navigation.navigate('FirebaseDemo');
  }


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 17}}>HOME</Text>
      <Button onPress={navigatetocamera} title="Camera" />
      {/* <Button onPress={navigatetoimagepicker} title="Pick Image" /> */}
      {/* for firebase demo */}
      <Button onPress={navigatetofirebasedemo} title="Firebase Demo" />
    </View>
  );
}


export default Home;
