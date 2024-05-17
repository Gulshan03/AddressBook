// import { View, Text } from 'react-native'
// import React from 'react'

// const ManageProfile = ({navigation}) => {
//   return (
//     <View>
//       <Text>ManageProfile</Text>
//     </View>
//   )
// }

// export default ManageProfile

import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from '../redux/Slice';

const ManageProfile = ({navigation}) => {
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(users);

  // const editEntry = id => {
  //   // Implement editing functionality
  // };

  // const deleteEntry = id => {
  //   setEntries(entries.filter(entry => entry.id !== id));
  // };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={users.data}         
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <Text>{'Title' + ':' + item.title}</Text>
                <Text>{'Name' + ':' + item.name}</Text>
                <Text>{'Number' + ':' + item.number}</Text>
                <Text>{'AddressLine1' + ':' + item.addressLine1}</Text>
                <Text>{'AddressLine2' + ':' + item.addressLine2}</Text>
                <Text>{'AddressLine3' + ':' + item.addressLine3}</Text>
                <Text>{'Pincode' + ':' + item.pincode}</Text>
                <Text>{'City' + ':' + item.city}</Text>
                <Text>{'State' + ':' + item.state}</Text>
                <Text>{'Country' + ':' + item.country}</Text>
              </View>
              <View style={{marginRight: 10}}>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'blue',
                    color: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                  onPress={() => {
                    navigation.navigate('AddressBook', {
                      type: 'edit',
                      data: item,
                      index: index,
                    });
                  }}>
                  Edit
                </Text>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}>
                  Delete
                </Text>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          marginBottom: 30,
          backgroundColor: '#2E8B57',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddressBook', {type: 'add'});
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageProfile;
