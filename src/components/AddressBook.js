import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../redux/Slice';
import {useNavigation, useRoute} from '@react-navigation/native';

const AddressBook = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [title, setTitle] = useState(
    route.params.type == 'edit' ? route.params.data.title : '',
  );
  const [name, setName] = useState(
    route.params.type == 'edit' ? route.params.data.name : '',
  );
  const [number, setNumber] = useState(
    route.params.type == 'edit' ? route.params.data.number : '',
  );
  const [addressLine1, setAddressLine1] = useState(
    route.params.type == 'edit' ? route.params.data.addressLine1 : '',
  );
  const [addressLine2, setAddressLine2] = useState(
    route.params.type == 'edit' ? route.params.data.addressLine2 : '',
  );
  const [addressLine3, setAddressLine3] = useState(
    route.params.type == 'edit' ? route.params.data.addressLine3 : '',
  );
  const [pincode, setPincode] = useState(
    route.params.type == 'edit' ? route.params.data.pincode : '',
  );
  const [city, setCity] = useState(
    route.params.type == 'edit' ? route.params.data.city : '',
  );
  const [state, setState] = useState(
    route.params.type == 'edit' ? route.params.data.state : '',
  );
  const [country, setCountry] = useState(
    route.params.type == 'edit' ? route.params.data.country : '',
  );

  const addEntry = () => {
    clearFields();
  };

  const clearFields = () => {
    setTitle('');
    setName('');
    setNumber('');
    setAddressLine1('');
    setAddressLine2('');
    setAddressLine3('');
    setPincode('');
    setCity('');
    setState('');
    setCountry('');
  };

  const validate = () => {
    let valid = true;
    if (title == '') {
      valid = false;
    }
    if (name == '') {
      valid = false;
    }
    if (number == '') {
      valid = false;
    }
    if (addressLine1 == '') {
      valid = false;
    }
    if (addressLine2 == '') {
      valid = false;
    }
    if (addressLine3 == '') {
      valid = false;
    }
    if (pincode == '') {
      valid = false;
    }
    if (city == '') {
      valid = false;
    }
    if (state == '') {
      valid = false;
    }
    if (country == '') {
      valid = false;
    }

    return valid;
  };
  return (
    <View>
      <Text style={styles.title}>Address-Book-List </Text>
      <ScrollView>
        <View>
          <TextInput
            placeholder="Address Book Title"
            value={title}
            onChangeText={setTitle}
            style={styles.inputfilds}
           
          />
          <TextInput
            placeholder="Contact Person Name"
            value={name}
            onChangeText={setName}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="Contact Person Number"
            value={number}
            onChangeText={setNumber}
            style={styles.inputfilds}
            keyboardType={'number-pad'}
          />
          <TextInput
            placeholder="Address Line 1"
            value={addressLine1}
            onChangeText={setAddressLine1}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="Address Line 2"
            value={addressLine2}
            onChangeText={setAddressLine2}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="Address Line 3"
            value={addressLine3}
            onChangeText={setAddressLine3}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="Pincode"
            value={pincode}
            onChangeText={setPincode}
            style={styles.inputfilds}
            keyboardType={'number-pad'}
          />
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={setCity}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="State"
            value={state}
            onChangeText={setState}
            style={styles.inputfilds}
          />
          <TextInput
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
            style={styles.inputfilds}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              if (validate()) {
                if (route.params.type == 'edit') {
                  dispatch(
                    updateUser({
                      title: title,
                      name: name,
                      number: number,
                      addressLine1: addressLine1,
                      addressLine2: addressLine2,
                      addressLine3: addressLine3,
                      pincode: pincode,
                      city: city,
                      state: state,
                      country: country,
                      index: route.params.index,
                    }),
                  );
                } else {
                  dispatch(
                    addUser({
                      title,
                      name,
                      number,
                      addressLine1,
                      addressLine2,
                      addressLine3,
                      pincode,
                      city,
                      state,
                      country,
                    }),
                  );
                }

                navigation.goBack();
              } else {
                Alert.alert('Please Fill Correct Data');
              }
            }}>
            <Text style={styles.btntxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddressBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  title: {
    fontSize: 18,
    color: '#000',
    margin: '5%',
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
    marginVertical: '2%',
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#2E8B57',
    alignItems: 'center',
    margin:'8%',
  },
  btntxt: {
    color: '#fff',
    fontSize: 20,
  },
});
