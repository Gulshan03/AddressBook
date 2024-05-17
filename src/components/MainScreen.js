import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';


const MainScreen = ({navigation}) => {


  const handleManageProfile = () => {
    // navigation.navigate('');
  };

  const handleManageAddressBook = () => {
    navigation.navigate('ManageProfile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
      <TouchableOpacity style={styles.btn} onPress={handleManageProfile}>
        <Text style={styles.btntxt}>Manage Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleManageAddressBook}>
        <Text style={styles.btntxt}>Manage Address Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: 'auto',
  },
  title: {
    fontSize: 30,
    color: '#000',
    marginTop: '45%',
    alignSelf: 'center',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  inputfilds: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 16,
    fontSize: 16,
    color: '#000',
    borderColor: '#000',
  },
  btn: {
    width: '80%',
    height: 45,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#1A355B',
    alignItems: 'center',
  },
  btntxt: {
    color: '#fff',
    fontSize: 20,
  },
});
