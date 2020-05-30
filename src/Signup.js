// 2 : Signup Screen Component:

import * as React from 'react';
import {Button, View, Text} from 'react-native';

export default function SignupScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*
          Using the navigation to rout to Home screen
      */}
      <Text>Welcome New User!</Text>
      <Button title="Login" onPress={() => navigation.navigate('HomeScreen')} />
    </View>
  );
}
