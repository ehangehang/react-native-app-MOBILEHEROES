import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Heroes from './Component/Heroes';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ justifyContent:'center', alignItems:'center'}}>

        <Image source={require('./logoml.png')} style={{width:378,height:284,marginTop:50}}/>
          <Text style={{fontSize:20}}>Welcome to Mobile Legends Heroes</Text>
          <Text>Start Exploring / Creating Your Favourite Heroes Here</Text>
          <Button
              title='START'
              onPress={()=> this.props.navigation.navigate('Details')}></Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Heroes/>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return {

    }
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
    initialRouteName: 'Home',

});
