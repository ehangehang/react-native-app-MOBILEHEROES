
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.ceria}>
		<Image
		source={require('./eudora.png')}/>
    <Text style={{fontSize:30}}>EUDORA</Text>
    <Text style={{fontSize:20}}>Lightning Sorceress</Text>
    <Text>HP : 2524</Text>
    <Text>Mana : 468</Text>
    <Text>Movement Speed : 250</Text>
    <Text>Physical Attack : 112</Text>
    <Text>Armor : 19</Text>
    <Text>Magic Resistance : 10</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ceria: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
