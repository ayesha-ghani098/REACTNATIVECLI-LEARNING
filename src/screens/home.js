import React from 'react';
import {View, Text, Button} from 'react-native';

//-----------------------------------------//
//--------------------Home-----------------//
//-----------------------------------------//

function Home({navigation}){

    const navigatetocamera=()=>{
navigation.navigate('Camera');
    }

        const navigatetoimagepicker = () => {
          navigation.navigate('IMagePicker');
        };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 17}}>HOME</Text>
        <Button onPress={navigatetocamera} title="Camera" />
        <Button onPress={navigatetoimagepicker} title="Pick Image" />
      </View>
    );
}

export default Home;